import json
import os
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    '''Отправка уведомлений о новых заявках в Telegram'''
    method = event.get('httpMethod', 'POST')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    # Получаем данные из запроса
    body = json.loads(event.get('body', '{}'))
    name = body.get('name', 'Не указано')
    phone = body.get('phone', 'Не указан')
    message = body.get('message', '')

    # Получаем настройки из переменных окружения
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')

    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': False, 'error': 'Telegram не настроен'})
        }

    # Формируем текст сообщения
    telegram_message = f"🔔 Новая заявка с сайта!\n\n"
    telegram_message += f"👤 Имя: {name}\n"
    telegram_message += f"📱 Телефон: {phone}\n"
    if message:
        telegram_message += f"\n💬 Сообщение:\n{message}"

    # Отправляем сообщение в Telegram
    telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    data = {
        'chat_id': chat_id,
        'text': telegram_message,
        'parse_mode': 'HTML'
    }

    try:
        req = urllib.request.Request(
            telegram_url,
            data=json.dumps(data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
            
        if result.get('ok'):
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': True})
            }
        else:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': False, 'error': 'Ошибка отправки в Telegram'})
            }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': False, 'error': str(e)})
        }

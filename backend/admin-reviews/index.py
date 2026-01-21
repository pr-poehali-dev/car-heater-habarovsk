import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    '''Админ API для модерации отзывов'''
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Database connection not configured'})
        }
    
    conn = psycopg2.connect(dsn)
    cur = conn.cursor()
    
    try:
        if method == 'GET':
            # Получить все отзывы (включая неодобренные)
            cur.execute('''
                SELECT id, author, rating, review_text, created_at, is_approved
                FROM reviews 
                ORDER BY created_at DESC
            ''')
            rows = cur.fetchall()
            reviews = []
            for row in rows:
                reviews.append({
                    'id': row[0],
                    'author': row[1],
                    'rating': row[2],
                    'text': row[3],
                    'date': row[4].strftime('%d.%m.%Y'),
                    'is_approved': row[5]
                })
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps(reviews, ensure_ascii=False)
            }
        
        elif method == 'POST':
            # Одобрить или отклонить отзыв
            body = json.loads(event.get('body', '{}'))
            review_id = body.get('id')
            action = body.get('action')  # 'approve' или 'reject'
            
            if not review_id or not action:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'ID отзыва и действие обязательны'}, ensure_ascii=False)
                }
            
            if action == 'approve':
                cur.execute('UPDATE reviews SET is_approved = TRUE WHERE id = %s', (review_id,))
            elif action == 'reject':
                cur.execute('UPDATE reviews SET is_approved = FALSE WHERE id = %s', (review_id,))
            else:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Неизвестное действие'}, ensure_ascii=False)
                }
            
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': True, 'message': 'Отзыв обновлен'}, ensure_ascii=False)
            }
        
        elif method == 'DELETE':
            # Удалить отзыв
            body = json.loads(event.get('body', '{}'))
            review_id = body.get('id')
            
            if not review_id:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'ID отзыва обязателен'}, ensure_ascii=False)
                }
            
            cur.execute('DELETE FROM reviews WHERE id = %s', (review_id,))
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': True, 'message': 'Отзыв удален'}, ensure_ascii=False)
            }
        
        else:
            return {
                'statusCode': 405,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Method not allowed'})
            }
    
    finally:
        cur.close()
        conn.close()

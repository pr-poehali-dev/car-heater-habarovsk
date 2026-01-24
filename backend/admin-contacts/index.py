import json
import os
import psycopg2
from datetime import datetime

def handler(event: dict, context) -> dict:
    '''Получение всех заявок для админки'''
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    dsn = os.environ.get('DATABASE_URL')
    
    try:
        conn = psycopg2.connect(dsn)
        cur = conn.cursor()
        
        if method == 'GET':
            cur.execute(
                "SELECT id, name, phone, message, created_at FROM t_p84556943_car_heater_habarovsk.contact_requests ORDER BY created_at DESC"
            )
            
            rows = cur.fetchall()
            contacts = []
            
            for row in rows:
                contacts.append({
                    'id': row[0],
                    'name': row[1],
                    'phone': row[2],
                    'message': row[3],
                    'created_at': row[4].isoformat() if row[4] else None
                })
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'contacts': contacts})
            }
        
        elif method == 'DELETE':
            query_params = event.get('queryStringParameters', {})
            contact_id = query_params.get('id')
            
            if not contact_id:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'ID заявки не указан'})
                }
            
            cur.execute(
                "DELETE FROM t_p84556943_car_heater_habarovsk.contact_requests WHERE id = %s",
                (contact_id,)
            )
            
            conn.commit()
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': True, 'message': 'Заявка удалена'})
            }
        
        else:
            return {
                'statusCode': 405,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Method not allowed'})
            }
            
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }

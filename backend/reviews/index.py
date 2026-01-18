import json
import os
import psycopg2
from datetime import datetime

def handler(event: dict, context) -> dict:
    '''API для работы с отзывами клиентов'''
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
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
            cur.execute('''
                SELECT id, author, rating, review_text, created_at, is_approved
                FROM reviews 
                WHERE is_approved = TRUE
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
                    'source': 'Сайт'
                })
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps(reviews, ensure_ascii=False)
            }
        
        elif method == 'POST':
            body = json.loads(event.get('body', '{}'))
            author = body.get('author', '').strip()
            rating = body.get('rating', 5)
            review_text = body.get('text', '').strip()
            
            if not author or not review_text:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Имя и текст отзыва обязательны'}, ensure_ascii=False)
                }
            
            if rating < 1 or rating > 5:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Оценка должна быть от 1 до 5'}, ensure_ascii=False)
                }
            
            cur.execute('''
                INSERT INTO reviews (author, rating, review_text, is_approved)
                VALUES (%s, %s, %s, FALSE)
                RETURNING id
            ''', (author, rating, review_text))
            review_id = cur.fetchone()[0]
            conn.commit()
            
            return {
                'statusCode': 201,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': True, 'id': review_id, 'message': 'Отзыв отправлен на модерацию'}, ensure_ascii=False)
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

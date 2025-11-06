const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432
});

async function setupDatabase() {
    try {
        console.log('Подключение к PostgreSQL...');
        
        const sqlFile = path.join(__dirname, 'BD');
        const sql = fs.readFileSync(sqlFile, 'utf8');
        
        console.log('Выполнение SQL скрипта...');
        
        await pool.query(sql);
        
        console.log('✓ База данных успешно настроена!');
        console.log('✓ Схема resource создана');
        console.log('✓ Таблицы card и purchases созданы');
        console.log('✓ Данные вставлены');
        
        const result = await pool.query('SELECT * FROM resource.card ORDER BY id');
        console.log(`\n✓ Найдено ${result.rows.length} карточек в базе данных:`);
        result.rows.forEach((row, index) => {
            console.log(`  ${index + 1}. ${row.period} - ${row.price}${row.month}`);
        });
        
    } catch (error) {
        console.error('❌ Ошибка при настройке базы данных:');
        console.error(error.message);
        
        if (error.code === 'ECONNREFUSED') {
            console.error('\n⚠ PostgreSQL не запущен или недоступен!');
            console.error('Убедитесь, что PostgreSQL запущен и доступен на localhost:5432');
        } else if (error.code === '28P01') {
            console.error('\n⚠ Неверный пароль!');
            console.error('Проверьте пароль в файле setup-db.js');
        } else if (error.code === '3D000') {
            console.error('\n⚠ База данных не существует!');
            console.error('Создайте базу данных postgres если её нет');
        }
    } finally {
        await pool.end();
    }
}

setupDatabase();


const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');
const PORT = process.env.PORT || 3010;

const app = express();  

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432
});

app.use(cors());
app.use(express.json());

app.get('/api/card', async (req, res) => {
    const q = req.query.q || '';
    try {
        const { rows } = await pool.query(
            `SELECT * FROM resource.card order by id`
        );
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

app.post('/api/purchases', async (req, res) => {
    const { card_id, period, price } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO resource.purchases (card_id, period, price) VALUES ($1, $2, $3) RETURNING *`,
            [card_id, period, price]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});
const express = require('express');
const app = express(); // Initializing Express server
const cors = require('cors');
const pool = require('./db');


// MIDDLEWARE
app.use(cors()); // To resolve Cross Origin Resource Sharing errors
app.use(express.json()); // To get data from request.body area
// ROUTES

// Create
app.post('/todos', async (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})
// Get all
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message);
    }
})

// Get one
app.get('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const allTodos = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
})
// Update
app.put('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("update todo set description=$1 where todo_id=$2", [description, id]);
        res.json("Update successful!");
    } catch (err) {
        console.error(err.message);
    }
})
// Delete
app.delete('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const delTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
        res.json("Task Deleted!");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log('Server running on 5000')
});

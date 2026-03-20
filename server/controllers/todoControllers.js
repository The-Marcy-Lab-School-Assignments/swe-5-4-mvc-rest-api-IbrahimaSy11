const todoModel = require('../models/todoModel');

const listTodos = (req, res) => {
    res.send(todoModel.list());
};

const findTodo = (req, res) => {
    const todo = todoModel.find(Number(req.params.id));
    if (!todo) return res.status(404).send({ message: 'Todo not found' });
    res.send(todo);
};

const createTodo = (req, res) => {
    const { task } = req.body;
    if (!task) return res.status(400).send({ message: 'task is required' });
    res.status(201).send(todoModel.create(task));
};

const updateTodo = (req, res) => {
    const todo = todoModel.update(Number(req.params.id), req.body);
    if (!todo) return res.status(404).send({ message: 'Todo not found' });
    res.send(todo);
};

const deleteTodo = (req, res) => {
    const deleted = todoModel.destroy(Number(req.params.id));
    if (!deleted) return res.status(404).send({ message: 'Todo not found' });
    res.status(204).send();
};

module.exports = { listTodos, findTodo, createTodo, updateTodo, deleteTodo };
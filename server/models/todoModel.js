let id = 4;
const getId = () => id++;

const todos = [
    { id: 1, task: 'Buy groceries', isDone: false },
    { id: 2, task: 'Walk the dog', isDone: true },
    { id: 3, task: 'Read a book', isDone: false },
];

const list = () => todos.map(t => ({ ...t }));

const find = (id) => {
    const todo = todos.find(t => t.id === id);
    return todo ? { ...todo } : null;
};

const create = (task) => {
    const todo = { id: getId(), task, isDone: false };
    todos.push(todo);
    return todo;
};

const update = (id, changes) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return null;
    Object.assign(todo, changes);
    return { ...todo };
};

const destroy = (id) => {
    const idx = todos.findIndex(t => t.id === id);
    if (idx === -1) return false;
    todos.splice(idx, 1);
    return true;
};

module.exports = { list, find, create, update, destroy };
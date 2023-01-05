let todos = [
    {
        id: 1,
        title: "default one",
    },
];

let id = 2;

exports.getAll = (req, res) => {
    res.json(todos);
};

exports.create = (req, res) => {
    const todo = req.body.todo;
    todo.id = id++;
    todos.push(todo);
    res.json(todo);
};
exports.deleteTodo = (req, res) => {
    const id = req.params.id;
    console.log("delete where id =", id);
    let todo = null;
    todos = todos.filter((t) => {
        if (Number(t.id) === Number(id)) {
            todo = t;
        }
        return Number(t.id) !== Number(id);
    });

    res.json(todo);
};

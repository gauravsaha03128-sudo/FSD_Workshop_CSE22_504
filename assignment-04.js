import express from "express";

const app = express();
app.use(express.json());
let tasks = [
    {
        id: 1,
        name: "Study JavaScript",
        completed: false
    },
    {
        id: 2,
        name: "Complete Assignment",
        completed: false
    }
];
// GET - Show all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});
// POST - Add a new task
app.post("/tasks", (req, res) => {
    const task = {
        id: tasks.length + 1,
        name: req.body.name,
        completed: false
    };
    tasks.push(task);
    res.status(201).json(task);
});
// PUT - Mark task as completed
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).send("Task not found");
    }
    task.completed = true;
    res.json(task);
});
// DELETE - Delete task
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const taskExists = tasks.some(t => t.id === id);
    if (!taskExists) {
        return res.status(404).send("Task not found");
    }
    tasks = tasks.filter(t => t.id !== id);
    res.send("Task deleted successfully");
});
// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
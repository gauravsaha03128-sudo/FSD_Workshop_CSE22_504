import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
// Get current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "home.html"));
});
// Menu page
app.get("/menu", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "menu.html"));
});
// Contact page
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "contact.html"));
});
// Start server
app.listen(3000, () => {
    console.log("Bakery website running at http://localhost:3000");
});
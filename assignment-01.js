import { EventEmitter } from "events";

const schoolBell = new EventEmitter();

// Create events
schoolBell.on("classStart", () => {
    console.log("Class Started!");
});

schoolBell.on("classEnd", () => {
    console.log("Class Ended!");
});

// Trigger events
schoolBell.emit("classStart");
schoolBell.emit("classEnd");

// Event Loop
setTimeout(() => {
    console.log("setTimeout");
}, 0);
setImmediate(() => {
    console.log("setImmediate");
});

process.nextTick(() => {
    console.log("process.nextTick");
});

console.log("Normal Code");
import EventEmmiter from "node:events";
const myEmmiter=new EventEmmiter();
myEmmiter.on("greet",(teacher)=>{
    console.log(`Class started by ${teacher}`);
})
myEmmiter.on("exit",(teacher)=>{
    console.log(`Class ended by ${teacher}`);
})
myEmmiter.emit("greet",'chandrahas');
myEmmiter.emit("exit",'chandrahas');
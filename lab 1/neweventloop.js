console.log("This is the starting point of my code");
process.nextTick(()=>{
    console.log("This is process.nextTrick code")
})
setTimeout(()=>{
    console.log("This is first time out")
},2000);
uu55
setTimeout(()=>{
    console.log("This is second time out")
},5000);
setTimeout(()=>{
    console.log("This is third time out")
},7000);
setTimeout(()=>{
    console.log("This is fourth time out")
},10000);
console.log("This is end point of my code");
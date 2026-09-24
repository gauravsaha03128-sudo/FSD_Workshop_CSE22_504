import {EventEmitter} from "node:events"

function createDomElememnts (){
    const emitter =new EventEmitter();
    return{
        addEventListener(eventType,listener){
            emitter.on(eventType,listener);
            

        },

        removeEventListener(eventType,listener){
            emitter.off(eventType,listener);
            
            
        }, 
        dispatchEvent(event){
            emitter.emit(event.eventType,event);
        }
    }
}

const button =createDomElememnts();
button.addEventListener('save',()=>{
    console.log("saving...");
})

button.dispatchEvent('save',()=>{
    eventType:"save"
});
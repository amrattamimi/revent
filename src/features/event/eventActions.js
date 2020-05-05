import { CREAT_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants"





export const createEvent =(event)=>{
    return{
        type:CREAT_EVENT,
        payload:{
            event
        }
    }
}


export const updateEvent =(event)=>{
    return{
        type:UPDATE_EVENT,
        payload:{
            event
        }
    }
}


export const deleteEvent =(eventId)=>{
    return{
        type:DELETE_EVENT,
        payload:{
            eventId
        }
    }
}
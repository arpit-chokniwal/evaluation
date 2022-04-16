import { Delete,Edit,add } from "./action";
const initState = {
    data:[]
}

export const dataReducer = (store=initState,{type,payload}) =>{
   

    if(type == add){
        return {...store, data:[...store.data, payload]}
    }else if(type == Edit){
        return {...store , data: store.data.filter((e)=>{
            if(e.id == payload.id){
                return payload
            }}) }
    }else if(type == Delete ){
        return {...store , data: store.data.filter((e)=>e.id != payload) }
    }
    else{
        return store
    }
}
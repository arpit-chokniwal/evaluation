export const Delete  = 'DELETE'
export const Edit  = 'EDIT'
export const add  = 'add'


export const deleData = (payload) =>({type:Delete, payload})
export const addData = (payload) =>({type:add, payload})
export const editData = (payload) =>({type:Edit, payload})
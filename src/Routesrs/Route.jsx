import { Routes, Route } from "react-router"
import { AddCity } from "../components/table/AddCity"
import { AddContry } from "../components/table/AddContry"
import { ShowTable } from "../components/table/ShowTable"

export const Rout = () =>{
    return(
        <Routes>
       <Route path={'/add-country'}  element={<AddContry/>}/>
       <Route path={'/add-city/:id'}  element={<AddCity/>}/>
       <Route path={'/'}  element={<ShowTable/>}/>
        
        </Routes>
    )
}
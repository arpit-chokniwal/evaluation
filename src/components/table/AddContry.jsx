
// id	Country	City	Population	Edit	Delete
// 1	India	Delhi	19,000,000	Edit	Delete
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import { addData } from "../../redux/tableData/action"
export const AddContry = () =>{
    const disptach = useDispatch()
    const [data,setData] = useState({
        contry:'',
        city:'',
        population:''
    })
    function raju(e){
        let {value} = e.target
        // console.log(data)
        setData({
            ...data,
            [e.target.id] : value
        })
    }
    
    function sub(e){
        console.log('---------')
        e.preventDefault()
        axios.post('http://localhost:3001/data',data).then((res)=>{
            disptach(addData(res.data))
            console.log(res.data)
        })


        setData({
        contry:'',
        city:'',
        population:''
    })
    }
    return(<>
        <h1>AddContry</h1>
            <form onSubmit={(e)=>{
                sub(e)
            }} >
                <input placeholder="Contry" id="contry" onChange={(e)=>{raju(e)}} type={'text'} value={data.contry} />
                <input type={'submit'} value={'Submit'} />
                
            </form>
        
    </>)
}
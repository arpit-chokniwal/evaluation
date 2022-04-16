// id	Country	City	Population	Edit	Delete
// 1	India	Delhi	19,000,000	Edit	Delete
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import { editData } from "../../redux/tableData/action"
import { useNavigate, useParams } from "react-router"


export const AddCity = () =>{
    const { id } = useParams();
    // console.log(id)
    const navigate  = useNavigate()
    const disptach = useDispatch()
    const [data,setData] = useState({
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
        axios.patch(`http://localhost:3001/data/${id}`,data).then((res)=>{
            disptach(editData(res.data))
            console.log('editData',res.data)
        })


        setData({
        contry:'',
        city:'',
        population:''
    })
    }
    function a(){
        navigate('/add-country')
    }
    return(<>
        <h1>AddCity</h1>
        <button onClick={()=>a()}>Go to add Country</button>
            <form onSubmit={(e)=>{
                sub(e)
            }} >
               <input placeholder="City" id="city"  onChange={(e)=>{raju(e)}} type={'text'} value={data.city}/>
                <input placeholder="Population" id="population"  onChange={(e)=>{raju(e)}}  type={'number'} value={data.population}/>
                <input type={'submit'} value={'Submit'} />
                
            </form>
        
    </>)
}
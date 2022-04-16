import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router'
import axios from 'axios'
export const ShowTable = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
        get()
    },[])
    const [dmap,setdata] = useState([]) 

    function get(){
        axios.get('http://localhost:3001/data').then((res)=>{
            setdata(res.data)
        })
    }
    function del(e){
        axios.patch(`http://localhost:3001/data/${e}`,{city: "",population:''}).then((res)=>{
            get()
        })
    }
    function edit(e){
    console.log(e)
    navigate(`/add-city/${e}`)
    }
    function sbc(){
        axios.get('http://localhost:3001/data').then((res)=>{
            let x = res.data.sort((a,b)=>{
                if(a.contry>b.contry){
                    return 1
                }else{
                    return -1
                }
            })
            setdata(x)
        })
        
    }
    function sba(){
        axios.get('http://localhost:3001/data').then((res)=>{
            let x = res.data.sort((a,b)=>{
                // console.log(typeof )
                if(+a.population> +b.population){
                    return 1
                }else{
                    return -1
                }
            })
            setdata(x)
        })
        
    }


    function sbd(){
        axios.get('http://localhost:3001/data').then((res)=>{
            let x = res.data.sort((a,b)=>{
                // console.log(typeof )
                if(+a.population < +b.population){
                    return 1
                }else{
                    return -1
                }
            })
            setdata(x)
        })
        
    }
    return(<>
            <h1>ShowData</h1>
            <button onClick={()=>sbc()}>sortByCountry</button>
            <button onClick={()=>sba()}>sortByAssPopulation</button>
            <button onClick={()=>sbd()}>sortByDesPopulation</button>
            <table>
            
					
            <th >id</th>
            <th>Country</th>
            <th >City</th>
            <th >Population</th>
            <th >Edit</th>
            <th >Delete</th>

        {
            dmap.map((e)=>{
                return <tr>
                    <td style={{margin:'10px'}}>{e.id}</td>
                    <td style={{margin:'10px'}}>{e.contry}</td>
                    <td style={{margin:'10px'}}>{e.city}</td>
                    <td style={{margin:'10px'}}>{e.population}</td>
                    <button style={{margin:'10px'}} onClick={()=>{edit(e.id)}}>Edit</button>
                    <button style={{margin:'10px'}} onClick={()=>{del(e.id)}}>Delete</button>
                    </tr>
                    

            })
        }

            
            
            </table>
    </>)
}
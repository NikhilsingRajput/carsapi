import { useEffect, useState } from "react";
import axios, { formToJSON } from "axios"
import './App.css';

export default function Home(){

    const [data , setdata] = useState([]);
        
    const [search , setsearch ] = useState("")
    const [filter , setfilter] = useState("")
    const url = "https://notes-taker-backend-nikhilsing-rajput.onrender.com"
 
    useEffect(()=>{
        console.log("useeffect called")
        axios.get(url)
        .then((res) =>{
           
            const da=res.data
            setdata(da.response);

        }).catch(err=>{
            console.log(err)
        })
    },[])
          
        
    const Display = data.filter((items)=>{
        if(search == ""){
            return items
        }
        else if(items.name.toLowerCase().includes(search.toLowerCase())){
            return items
        }
        else if(items.type.toLowerCase().includes(search.toLowerCase())){
            return items
        }
        console.log(search)
    })

    function displaytabledata(){
        return Display.map(d=>{
            return <tr>
                 <td>{d.name}</td>
                 <td>{d.country}</td>
                 <td>{d.type}</td>
             </tr>
        })
        
              
       
        
    }

    return <>
    <div className="title-top">
    <h2>VEHICLE MANUFACTURER</h2>
    </div>

    <div className="nav">
        <div>
        <label>Search : </label>
        <input onChange={(e)=>{
            setsearch(e.target.value)
        }} type={"text"}/>

        </div>
        <div className="filter">
            <label>Filter by Vehicle Type :</label>
            <select onChange={(e)=>{
            setsearch(e.target.value)}} >
                <option value={""}>All</option>
                <option value={"Passenger Car"}>Passenger Car</option>
                <option value={"Truck"}>Truck </option>
                <option value={"Multipurpose Passenger Vehicle"}>Multipurpose Passenger Vehicle (MPV)</option>
                <option value={"Motercycle"}>Motercycle </option>
                <option value={"Trailer"}>Trailer</option>
                <option value={"Low speed Vehicle"}>Low speed Vehicle</option>
                <option value={"Off Road Vehicle"}>Off Road Vehicle</option>
                <option value={"Bus"}>Bus</option>
                <option value={"Incomplete Vehicle"}>Incomplete Vehicle </option>
            </select>
        </div>
    </div>
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>country</th>
                <th>type</th>
            </tr>
            
           {
            displaytabledata()
           }
           
            
        </table>
    </div>
   
    <div></div>
    </>
}
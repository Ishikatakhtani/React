import axios from "axios";
import{useState , useEffect } from "react";

const Display=()=>{
    const [mydata ,setMydata]=useState({});
    const loadData=async()=>{
        let api="http://localhost:3000/Student";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData();
    },[]);
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.desgnation}</td>
                <td>{key.salary}</td>
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>Display Page</h1>
        <table>
            <tr>
                <th>EmpNo</th>
                <th>Name</th>
                <th>Desgnation</th>
                <th>Salary</th>
            </tr>
        </table>
        </>
    )
}
export default Display
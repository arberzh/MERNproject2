import { useState , useEffect } from "react"
import { FaTrash } from "react-icons/fa"
import { getAll } from "./services/students"
const Students = ()=> {
    const [students, setStudents] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        getAll().then(res => {
            setStudents(res.data)
        }).catch(err => {
            setError(err.message)
        })
    },[])   

    const createStudents = (student) => {
        return (
            <tr class="table table-striped">
                <td>{student.fullName}</td>
                <td>{student.email}</td>
                <td><FaTrash 
                    role="button"
                                      /></td>
            </tr>                 
        )
    }
    return(
        <div>
            <div style={{ width: '100vw' }}>
                <br></br>
                <a href="/students/add" style={{ width: '100%' }} className="btn btn-outline-primary">
                    Shto porosi të re
                </a>
            </div>
            <br></br>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Emri Mbiemri</th>
                        <th>Produkti</th>
                        <th>Fshij porosinë</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    students.map(createStudents)
                    }
                    
                </tbody>
            </table>         
              
        </div>
    )
}
export default Students
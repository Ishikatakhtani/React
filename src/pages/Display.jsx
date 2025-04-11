import axios from "axios";
import { useState, useEffect } from "react";

const Display = () => {
    const [myData, setMyData] = useState([]);

    const loadData = async () => {
        const api = "http://localhost:3000/Student";
        try {
            const response = await axios.get(api);
            setMyData(response.data);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Employee Data</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover shadow">
                    <thead className="table-dark">
                        <tr>
                            <th>Emp No</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myData.map((emp, index) => (
                            <tr key={index}>
                                <td>{emp.empno}</td>
                                <td>{emp.name}</td>
                                <td>{emp.desgnation}</td>
                                <td>{emp.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Display;

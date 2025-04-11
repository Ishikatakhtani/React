import { useState } from "react";
import axios from "axios";

const Inser = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const api = "http://localhost:3000/Student";
        try {
            const response = await axios.post(api, input);
            console.log(response);
            alert("Data saved successfully!");
        } catch (err) {
            console.error(err);
            alert("Failed to save data.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Insert Employee Data</h3>
                            <div className="mb-3">
                                <label htmlFor="empno" className="form-label">Emp No</label>
                                <input
                                    type="text"
                                    name="empno"
                                    className="form-control"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desgnation" className="form-label">Designation</label>
                                <input
                                    type="text"
                                    name="desgnation"
                                    className="form-control"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="salary" className="form-label">Salary</label>
                                <input
                                    type="text"
                                    name="salary"
                                    className="form-control"
                                    onChange={handleInput}
                                />
                            </div>
                            <button onClick={handleSubmit} className="btn btn-primary w-100">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inser;

import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import swal from 'sweetalert';
const AddDoctor = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [info, setInfo] = useState({});
    // const [file, setFile] = useState([]);
    const [files, setFiles] = useState([]);
    let files1 = [];
    // const [data , setData] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        // setFiles(e.target.files[0]);
        console.log(e.target.files[0]);
        // console.log(files);
        files.push(e.target.files[0]);
        console.log(files1);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(files[0]);
        const formData = new FormData();
        // data = {file: file, name:info.name, email: info.email};
        formData.append('image', files[0]);
        formData.append('name', info.name);
        formData.append('email', info.email);
        // console.log(formData.getAll());

       
        try{
            // Register With node-server & mongodb
            const data =  await axios.post(`${baseUrl}/auth/addDoctors`, formData);
            // console.log(registerInfo);
            // setLoading(false);
            swal({
                icon:'success',
                text:'Successfully added',
                timer: 2000
            })
        }
        catch(err){
            // setLoading(false);
            // setError(err);
            console.log(err);
        }
    }

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ backgroundColor: '#F4FDFB', position: 'absolute', right: '0' }}>
                <h2 className="text-center brand-color">Add a Doctor</h2>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword">Email Address</label>
                        <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Enter Doctor email" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword">Name</label>
                        <input type="text" onBlur={handleBlur} name="name" id="" placeholder="Enter Doctor name" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword">Upload Image</label>
                        <input type="file" onChange={handleFileChange} name="file" id="" placeholder="select File" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
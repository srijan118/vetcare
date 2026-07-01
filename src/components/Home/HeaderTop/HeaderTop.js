import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/doc/doc1.jpg';
const HeaderTop = () => {
    return (
        <div style={{ height: "600px", 'width': '100%' }} className="row d-flex align-items-center container">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 md-mx-5">
                <h1>Bringing veterinary care to your doorstep, with Vetcare.</h1>
                <p className="text-secondary">Booking an appointment with Vetcare is quick and easy. With our online booking system, you can schedule a virtual consultation with one of our experienced veterinarians in just a few clicks. Simply select a date and time that works for you, and our team will take care of the rest. 
                </p>
                <Link to="/appointment" className="btn btn-primary btn-lg shadow rounded"> GET STARTED</Link>

            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'} className="img-fluid rounded" alt="" />
            </div>
        </div>
    );
};

export default HeaderTop;
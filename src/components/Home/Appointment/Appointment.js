import React from 'react';
import doctor from '../../../images/doctor.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment my-5">
            <div className="container">
            <div className="row ">
                <div className="col-md-5 d-none d-md-block">
                    <img src={doctor} alt="" />
                </div>
                <div className="col-md-7 text-white py-5">
                    <h5 className="brand-color text-uppercase">AppointMent</h5>
                    <h1 className="">Make An AppointMent <br/> today </h1>
                    <p>Don't wait until it's too late - make an appointment with Vetcare today. Our remote veterinary care services make it easy and convenient to get the care and support your pet needs, all from the comfort of your own home. Whether you need a routine check-up or have concerns about your pet's health, our experienced veterinarians are here to help. With our online booking system, scheduling an appointment has never been easier. Simply choose a date and time that works for you, and let us take care of the rest. Book your appointment today and give your furry friend the care they deserve.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Appointment;
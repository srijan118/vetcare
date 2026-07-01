import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/teath.png';
import ServiceDetail from '../../../components/Home/ServiceDetail/ServiceDetail';
import './Services.css';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: 'https://img.freepik.com/free-vector/cute-dog-doctor-with-stethoscope-cartoon-vector-icon-illustration-animal-healthcare-icon-isolated_138676-5182.jpg?w=740&t=st=1677509612~exp=1677510212~hmac=dc4455ada3f1535a3a705096d86bad3379890b122cc23d220d811b04615b837e',
        heading:'Pet Behavioral Consultation',
        desc:'A consultation with your veterinarian or a referral to a knowledgeable and properly trained veterinary behaviorist helps you obtain results faster and more effectively.'
    },
    {
        name: 'Cavity Filling',
        img: 'https://img.freepik.com/free-vector/illustration-people-with-pets_23-2148990305.jpg?w=996&t=st=1677521334~exp=1677521934~hmac=c86412d5959c56de9133f04460817d797218e6afb492ae8adafcb542f9c17357',
        heading:'General Pet Health Care',
        desc:'A consultation with your veterinarian or a referral to a knowledgeable and properly trained veterinary behaviorist helps you obtain results faster and more effectively.'
    },
    {
        name: 'Teeth Whitening',
        img: 'https://img.freepik.com/free-vector/mascots-bags-food-set_24877-51205.jpg?w=740&t=st=1677521376~exp=1677521976~hmac=3383e17223754176dbcd0392b75d8d007239d0efa668e5d185a666a3300afeee',
        heading:'Pet Nutrition Consultation',
        desc:'When it comes to the well-being and health of your animal friend, good nutrition plays an important part. You need to understand, however, that there is no specific diet that is ideal for all pets. '
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5" id="serviceContaint">
            <div className="text-center">
                <h5 className="brand-color">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 row">
                    {
                        serviceData.map(service =><ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
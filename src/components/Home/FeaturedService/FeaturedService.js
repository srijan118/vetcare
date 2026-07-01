import React from 'react';
// import baby from '../../../images/baby.png';
import baby from '../../../images/doc/doctor chair 2.jpg';


const FeaturedService = () => {
    return (
        <div className="feature-service pb-0 pb-md-5 pt-md-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5 col-sm-6 col-12">
                        <img src={'https://img.freepik.com/free-vector/veterinary-concept-illustration_114360-3007.jpg?w=740&t=st=1677521463~exp=1677522063~hmac=8c1b2c3e88f2fe8dde8947616dd07ecaea4c4c1ee2539d694a22a40fcc173540'} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7 col-sm-6 col-12 align-self-center">
                        <h1>Exceptional Pet Care, on your Term</h1>
                        <p>Exceptional pet care is an essential component of VetCare's mission 
                        and will be prominently displayed on our website. Our team of experienced veterinary professionals 
                        will be dedicated to providing top-quality care and personalized attention to each pet and their owner.
                         We will emphasize the importance of preventive care and educate pet owners on the best ways to keep 
                         their pets healthy and happy. In addition, we will have a comprehensive range of services, including 
                         vaccinations, check-ups, and consultations, to address any health concerns that may arise. Our team 
                         will be available for consultation via secure video conferencing, which will provide pet owners with 
                         convenient access to our services, regardless of their location. We will also have a customer service 
                         team available to assist pet owners with any questions or concerns they may have. Exceptional pet care
                          will be an integral part of our brand and will be communicated across all our marketing channels, including 
                          our website, social media, and email campaigns. By providing exceptional pet care, VetCare aims to build a 
                          strong reputation in the market and become the go-to platform for remote veterinary care.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;
import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center">
            <img style={{height:'200px'}} src={service.img} alt=""/>
            <h2 style={{fontFamily:'varela-round-font,ui-serif,Georgia,Cambria,"Times New Roman",Times,serif',paddingTop:'10px'}}>{service.heading}</h2>
            <p>{service.desc}</p>
        </div>
    );
};

export default ServiceDetail;
import React, { useEffect, useState } from 'react';


const BillboardComponent = (props) => {
    let token = localStorage.getItem("token");
   
    return (
        <div key={props.id}>
            Dr. {props.f_name} {props.l_name}
        </div>
    );
};

export default BillboardComponent;
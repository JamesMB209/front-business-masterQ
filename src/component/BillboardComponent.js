import React, { useEffect, useState } from 'react';


const BillboardComponent = (props) => {
    return (
        <>
            <div key={props[1].id}><h2>{props[1].fullName} </h2>{props[1].queue.map((eachP) => <p>{eachP.f_name} {eachP.l_name}</p>)} </div>
            <div key={props[2].id}><h2>{props[2].fullName} </h2>{props[2].queue.map((eachP) => <p>{eachP.f_name} {eachP.l_name}</p>)} </div>
            <div key={props[3].id}><h2>{props[3].fullName} </h2>{props[3].queue.map((eachP) => <p>{eachP.f_name} {eachP.l_name}</p>)} </div>       
        </>
    );
};

export default BillboardComponent;
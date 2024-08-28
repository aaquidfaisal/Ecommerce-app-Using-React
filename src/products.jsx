import React from "react";
const Products= (props)=>{
    return(

        <>
        
        <div className="card">
                <div className="card-header">
                    <h1 className='text-center'>{props.name}</h1>
                </div>
                <div className="card-body text-center">
                    <img src={props.img} alt="" className='img-fluid' style={{ height: '250px' }} />
                </div>
                <div className="card-footer">
                    <button className='btn btn-info px-2 fw-bold mx-2'>{props.btn1} </button>
                    <button className='btn btn-outline-dark px-4 fw-bold mx-2'>{props.btn2} </button>
                </div>
            </div>
        </>
    )
}
export default Products;
import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart,useCart } from '../componet/ContextReducer.js';
// we are using this two(useDispatchCart,useCart) for sending data to ContextReducer from this Card page. once we send the data then that data is store on that context and all children or all pages can access that data. when any change in reflect on card page and when user click on add to cart then that data send to contextReduced page.

export default function Card({ data }) {
    const [qty,setqty] = useState(1);
    const [size,setsize] = useState("");
    let dispatch=useDispatchCart();
    let data2=useCart();
    let options=data.options;
    let priceOption=Object.keys(options);

    const priceRef=useRef();

    const handleAddtoCart=async(e)=>{
        e.preventDefault();
        dispatch({type:"ADD",id:data._id,name:data.name,price:finalPrice,qty:qty,size:size});
        // console.log(data)
        console.log(data2);
    }

    let finalPrice=qty * parseInt(options[size]);

    useEffect(()=>{
        setsize(priceRef.current.value);

    },[])

        
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <form>

                        <img src={data.img} className="card-img-top" style={{ "height": "8rem", "objectFit": "contain !important" }} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">{data.description}.</p>
                            <div className='container w-100'>
                                <select className='bg-success m-2 h-100 rounded' name="option" onChange={(e) => { setqty(e.target.value) }}>
                                    {
                                        Array.from(Array(6), (e, i) => {
                                            return (
                                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                            )
                                        })
                                    }
                                </select >
                                <select className='bg-success m-2 h-100 rounded' ref={priceRef} onChange={(e) => { setsize(e.target.value) }}>
                                    {
                                        priceOption.map((optio)=>{
                                            return <option key={optio} value={optio}>{optio}</option>
                                        })
                                    }
                                </select>

                                <div className='d-inline h-100 fs-5'>
                                    ${finalPrice}/-</div>
                                <hr></hr>
                                <button onClick={handleAddtoCart} className='btn-success text-white rounded  pd-1 mb-5'>Add to cart</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

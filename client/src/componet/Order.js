import React, { useEffect, useState } from 'react'
import Navbars from './Navbars';

export default function Order() {

    const [orders, setorders] = useState([]);

    const callhandler = async () => {
        let userEmail = localStorage.getItem("email");
        const response = await fetch("http://localhost:2000/getorder", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: userEmail }),
        });
        const json = await response.json();
        setorders(json);
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    useEffect(() => {
        callhandler();
    }, []);
    return (
        <div>
            <Navbars></Navbars>
            <div className='container'>
                <h5 className='mt-5'>{formattedDate}</h5>
                <hr></hr>

                {
                    orders != [] ? orders.map((data) => {
                        return (
                            <div>
                                <div>
                                    <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>


                                        <img src={data.img} className="card-img-top" style={{ "height": "8rem", "objectFit": "contain !important" }} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title fs-4">{data.name}</h5>
                                            <p className='fs-5 fw-bold'>

                                                {data.qty} &nbsp;&nbsp; {data.size}&nbsp;&nbsp; {data.date.split("T")[0]}<br></br>
                                                <i class="fa-solid fa-indian-rupee-sign fa-xs">&nbsp;{data.price}</i>
                                            </p>
                                        </div>


                                    </div>
                                </div>
                            </div >
                        )
                    }) : ""
                }
            </div>


        </div>
    )
}

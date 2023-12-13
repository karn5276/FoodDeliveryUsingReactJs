import React from 'react'

export default function Card({data}) {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={data.img} className="card-img-top" style={{"height":"10rem", "objectFit":"contain !important"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.description}.</p>
                        <div className='container w-100'>
                            <select className='bg-success m-2 h-100 rounded'>
                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        )
                                    })
                                }
                            </select>
                            <select className='bg-success m-2 h-100 rounded'>
                                <option value="half">{data.options.half}</option>
                                <option value="full">{data.options.full}</option>
                            </select>

                            <div className='d-inline h-100 fs-5'>Total Price</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

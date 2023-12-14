import React, { useState, useEffect } from 'react';
import Footer from '../componet/Footer';
import Navbar from '../componet/Navbars.js';
import Card from '../componet/Card.js';
import Carousal from '../componet/Carousal.js';
import axios from "axios";



export default function Home() {

    const [alldata, setalldata] = useState([]);
    const [alldataCat, setalldataCat] = useState([]);
    const [search,setsearch]=useState("");


    async function dataHandler() {

        const data = await axios.get("http://localhost:2000/");
        const catdata = await axios.get("http://localhost:2000/foodcat");

        setalldata(data.data);
        setalldataCat(catdata.data);

    }



    useEffect(() => {
        dataHandler();
    }, [])

    return (
        <>
            <div><Navbar></Navbar></div>
            <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{"objectFit":"contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption d-none d-md-block" style={{"zIndex":"10"}}>
                        <form className="d-flex " >
                            <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e)=>setsearch(e.target.value)} aria-label="Search"/>
                                
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?momos" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?sea" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
            <div className='m-3' >
                {
                    alldataCat != [] ? alldataCat.map((data) => {
                        return (
                            <div>
                                <br></br>
                                <div key={data._id} className='fs-3 mt-3'>{data.categoryName}</div>
                                <hr></hr>
                                <div id="foodData">
                                {
                                    alldata != [] ?alldata.filter((item)=>item.categoryName==data.categoryName && (item.name.toLowerCase().includes(search.toLowerCase()))).map((data2) => {
                                        return(
                                             <div key={data2._id}>

                                            <Card data={data2}></Card>
                                             </div>
                                        )
                                    }) : ""
                                }
                                </div>
                            </div>
                        )
                    })
                        : ""
                }
                {/* <Card data={alldata[1]}></Card>
                <Card data={alldata[2]}></Card>
                <Card data={alldata[3]}></Card> */}

            </div>
            <div><Footer></Footer></div>

        </>
    )
}

import React, { useState, useEffect } from 'react';
import Footer from '../componet/Footer';
import Navbar from '../componet/Navbars.js';
import Card from '../componet/Card.js';
import Carousal from '../componet/Carousal.js';
import axios from "axios";



export default function Home() {

    const [alldata, setalldata] = useState([]);
    const [alldataCat, setalldataCat] = useState([]);


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
            <div><Carousal></Carousal></div>
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
                                    alldata != [] ?alldata.filter((item)=>item.categoryName==data.categoryName).map((data2) => {
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

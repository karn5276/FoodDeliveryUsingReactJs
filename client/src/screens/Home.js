import React from 'react';
import Footer from '../componet/Footer';
import Navbar from '../componet/Navbars.js';
import Card from '../componet/Card.js';
import Carousal from '../componet/Carousal.js';

export default function Home() {
    return (
        <>
            <div><Navbar></Navbar></div>
            <div><Carousal></Carousal></div>
            <div className='m-3'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </div>
            <div><Footer></Footer></div>

        </>
    )
}

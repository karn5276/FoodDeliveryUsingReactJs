import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from "react-bootstrap/Badge";
import {  useCart, useDispatchCart } from './ContextReducer';
import Model from '../Model';
import Cart from './Cart';

export default function Navbars() {

    let data = useCart();
    let dispatch = useDispatchCart();
    const [cartview, setcartview] = useState(false);

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("email");
        navigate("/login");
    }

    const orderHandler = (e) => {
        e.preventDefault();
        
        navigate("/order");
    }


    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="#">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item active">
                                <Link className="nav-link fs-4 m-2 active fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            {
                                localStorage.getItem("authToken") ? <li className="nav-item active">
                                    <div className="nav-div fs-4 mt-3 mx-4 active fw-bold" style={{cursor:"pointer"}} onClick={orderHandler} aria-current="page">Orders</div>
                                </li>
                                    : ""
                            }
                        </ul>


                        <div>
                            {
                                localStorage.getItem("authToken") ?
                                    <div>
                                        <div className="btn bg-white rouded m-2 text-success" onClick={() => { setcartview(true) }} >
                                            myCart <Badge pill bg='danger'>{data.length}</Badge>
                                        </div>

                                        {
                                            cartview ? <Model onClose={() => setcartview(false)}><Cart></Cart></Model> : null
                                        }
                                        <div className="btn bg-white rouded m-2 text-danger" onClick={handleLogout}>LogOut</div>
                                    </div>
                                    :
                                    <div>
                                        <Link className="btn bg-white rouded m-2 text-success" to="/login">Login</Link>
                                        <Link className="btn bg-white rouded m-2 text-success" to="/signup">SignUp</Link>
                                    </div>
                            }
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    )
}

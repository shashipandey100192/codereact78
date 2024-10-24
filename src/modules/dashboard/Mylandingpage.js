import React from 'react'
import { Link } from 'react-router-dom';
import { FaRupeeSign } from "react-icons/fa";


function Mylandingpage() {
    return (
        <div className='container mt-3 apps'>
            <div className='row justify-content-center'>
                <div className='col-md-12 p-5 bg-info rounded shadow'>
                    <div className='container-fluid'>
                        <div className='row text-white'>
                            <div className='col-12 text-center pb-3'>
                                <p className='h2'>Apps List</p>
                            </div>
                            <div className="col-md-3 mt-5 text-center">
                                <Link to="payment">
                                <div className="card shadow p-3 rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>

                            <div className="col-md-3 mt-5 text-center">
                                <Link to="payment">
                                <div className="card shadow p-3 rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>

                            <div className="col-md-3 mt-5 text-center">
                                <Link to="payment">
                                <div className="card shadow p-3 rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>

                            <div className="col-md-3 mt-5 text-center">
                                <Link to="payment">
                                <div className="card shadow p-3 rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>

                            <div className="col-md-3 mt-5 text-center">
                                <Link to="payment">
                                <div className="card shadow p-3 rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>

                            <div className="col-md-3 mt-5 text-center">
                                <Link to="payment">
                                <div className="card shadow p-3 rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>

                            <div className="col-md-3 mt-5 text-center">
                                <Link to="payment">
                                <div className="card shadow p-3 rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Mylandingpage
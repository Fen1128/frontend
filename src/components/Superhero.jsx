import React from "react";
import Antman from "../assets/images/superhero/antman.jpg";
import Avenger from "../assets/images/superhero/avenger.jpg";
import Batman from "../assets/images/superhero/batman.jpg";
import Robinhood from "../assets/images/superhero/robinhood.jpg";
import Spiderman from "../assets/images/superhero/spiderman-cover.jpg";
import Superman from "../assets/images/superhero/superman.jpg";

function Superhero() {
    return (
        <div>
            <div className="container-fluid superhero" id="superhero">
                <div className="container p-3 text-light text-center">
                    <h3 className="mb-5 mt-2">Superhero</h3>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Antman} className="card-img-top" alt="..." />
                                <div className="card-body bg-secondary bg-opacity-50">
                                    <h5 className="card-title">ANT-MAN</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a href="#" className="btn btn-warning">
                                        Lihat Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Avenger} className="card-img-top" alt="..." />
                                <div className="card-body bg-secondary bg-opacity-50">
                                    <h5 className="card-title">AVENGERS</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a href="#" className="btn btn-warning">
                                        Lihat Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Batman} className="card-img-top" alt="..." />
                                <div className="card-body bg-secondary bg-opacity-50">
                                    <h5 className="card-title">THE DARK KNIGHT</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a href="#" className="btn btn-warning">
                                        Lihat Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Robinhood} className="card-img-top" alt="..." style={{height:"220"}}/>
                                <div className="card-body bg-secondary bg-opacity-50">
                                    <h5 className="card-title">ROBIN HOOD</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a href="#" className="btn btn-warning">
                                        Lihat Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Spiderman} className="card-img-top" alt="..." />
                                <div className="card-body bg-secondary bg-opacity-50">
                                    <h5 className="card-title">SPIDER-MAN</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a href="#" className="btn btn-warning">
                                        Lihat Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Superman} className="card-img-top" alt="..." />
                                <div className="card-body bg-secondary bg-opacity-50">
                                    <h5 className="card-title">SUPERMAN</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a href="#" className="btn btn-warning">
                                        Lihat Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Superhero;

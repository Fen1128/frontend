import React from "react";
import Dune from "../assets/images/trending/dune.jpg";
import Everything from "../assets/images/trending/everything.jpg";
import Infiniti from "../assets/images/trending/infinite.jpg";
import Joker from "../assets/images/trending/joker.jpg";
import Lightyear from "../assets/images/trending/lightyear.jpg";
import Morbius from "../assets/images/trending/morbius.jpg";

function Trending() {
    return (
        <div className="container-fluid trending" id="trending">
            <div className="container p-3 text-light text-center">
                <h3 className="mb-5 mt-2">Trending</h3>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={Dune} className="card-img-top" alt="..." />
                            <div className="card-body bg-secondary bg-opacity-50">
                                <h5 className="card-title">DUNE</h5>
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
                            <img src={Everything} className="card-img-top" alt="..." />
                            <div className="card-body bg-secondary bg-opacity-50">
                                <h5 className="card-title">EVERYTHING EVERYWHERE</h5>
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
                            <img src={Infiniti} className="card-img-top" alt="..." />
                            <div className="card-body bg-secondary bg-opacity-50">
                                <h5 className="card-title">INFINITI STORM</h5>
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
                            <img src={Joker} className="card-img-top" style={{height:""}} />
                            <div className="card-body bg-secondary bg-opacity-50">
                                <h5 className="card-title">JOKER</h5>
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
                            <img src={Lightyear} className="card-img-top" alt="..." />
                            <div className="card-body bg-secondary bg-opacity-50">
                                <h5 className="card-title">LIGHTYEAR</h5>
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
                            <img src={Morbius} className="card-img-top" alt="..." />
                            <div className="card-body bg-secondary bg-opacity-50">
                                <h5 className="card-title">MORBIUS</h5>
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
    );
}

export default Trending;

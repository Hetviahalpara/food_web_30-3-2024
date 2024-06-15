import React from "react";
import Slider from "react-slick";

export default function TestimonialSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className="d-flex">
                <img src="assets/images/ava-1.jpg" alt="" className="carousel-img me-3" />
                <h5>Jhon Doe</h5>
            </div>
            <div className="d-flex">
                <img src="assets/images/ava-2.jpg" alt="" className="carousel-img me-3" />
                <h5>Jhon Doe</h5>
            </div>
            <div className="d-flex">
                <img src="assets/images/ava-3.jpg" alt="" className="carousel-img me-3" />
                <h5>Jhon Doe</h5>
            </div>
        </Slider>
    );
}

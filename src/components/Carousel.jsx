import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    const data = [{
        title: "Welcome to Expendi",
        subHeading: 'Take Charge of Your Spending effortlessly and track your expenses',
        img: '/welcome-img-1.avif',
        id:1
    }, {
        title: "Take control of your finances",
        subHeading: 'Track manage and analyze your expenses with ease and like a pro',
        img: '/welcome-img-2.avif',
        id:2
    }, {
        title: "Your Data is secure",
        subHeading: 'Peace of mind with secure data protection, we prioritize your privacy',
        img: '/welcome-img-3.avif',
        id:3
    },]

    return (
        <div style={{ width: "100%"}}>
            <Slider {...settings}>
                {data && data.map((dataObj) => (
                    <div key={dataObj.id} className="carousel d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img src={dataObj.img} alt="Slide 1" />

                            <h5 className="mt-4">{dataObj.title}</h5>

                            <p className="my-3">{dataObj.subHeading}</p>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;

import {styled } from "@mui/material";

import Carousel from 'react-multi-carousel';

import "react-multi-carousel/lib/styles.css";
import { bannerImgs } from "../partials/data.js";

const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: "500px",
    [theme.breakpoints.down("md")]: {
        objectFit: "cover",
        height: "180px"
    }

}))
const CarouselComponent = styled(Carousel)(({ theme }) => ({

    "& .react-multiple-carousel__arrow react-multiple-carousel__arrow--right": {
        right: 0,
        backgoundColor: "white",
        color: "black",
        height: "40px",
    }

}))
const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Background = () => {


    return (
        <>
            <CarouselComponent className="mt-3"
                responsive={responsive} dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px" swipeable={false}
                draggable={false}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                containerClass="carousel-container"
                keyBoardControl={true}
            >
                {
                    bannerImgs.map((url, idx) => {
                        return <a href="#" key={idx}><Image src={url} /></a>
                    })
                }
            </CarouselComponent>
        </>
    )
}
export default Background;
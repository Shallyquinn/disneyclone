import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WrapText } from '@mui/icons-material';

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        sliderToShow: 1,
        slidesToScroll:1,
    };
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src = "/imgslider/dislogo.jpg" />
        </Wrap>
        <Wrap>
            <img src = "/imgslider/mulan.jpg" />
        </Wrap>
        <Wrap>
            <img src = "/imgslider/cinda.jpg" />
        </Wrap>
        <Wrap>
            <img src = "/imgslider/onwardwall.jpg" />
        </Wrap>
        <Wrap>
            <img src = "/imgslider/disstar.jpg" />
        </Wrap>
        <Wrap>
            <img src = "/imgslider/pocahan.jpg" />
        </Wrap>
        <Wrap>
            <img src = "/imgslider/coco.jpg" />
        </Wrap>
        <Wrap>
            <img src = "/imgslider/onward.jpg" />
        </Wrap>
        <Wrap>
            <img src = "/imgslider/disimg.jpg" />
        </Wrap>
        <Wrap>
            <img src = "/imgslider/tangles.jpg" />
        </Wrap>
        <Wrap>
            <img src = "/disney images/images (19).jpeg" />
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 10px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 159, 172);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 2;
    }

`

const Wrap = styled.div`
cursor: pointer;
    img {
        border: 4px solid transparent;
        display: flex;
        justify-content: center;
        border-radius: 7px;
        width: 100%;
        height: 200px;
        box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px,
        rgb(0 0 0 / 74%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        
        &:hover {
            transform: scale(1.05);
            border: 5px solid rgba(249, 249, 249, 0.8);

        }

    }
`    
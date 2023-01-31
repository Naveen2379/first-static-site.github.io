import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import k1 from '../images/carousel/k1.jpg';
import k2 from '../images/carousel/k2.jpg';
import k3 from '../images/carousel/k3.jpg';
import k4 from '../images/carousel/k4.jpg';
import k5 from '../images/carousel/eventImg.jpg';
import k6 from '../images/carousel/photoGift.jpg';
import './WorkShowCase.scss';



const WorkShowCase = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="showcase-items">
            <Carousel activeIndex={index} 
            onSelect={handleSelect}
            variant="dark"
            >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={k1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={k2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={k3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default WorkShowCase;
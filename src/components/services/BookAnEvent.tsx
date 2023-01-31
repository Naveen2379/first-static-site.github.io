import React from "react";
import { Button, Card } from "react-bootstrap";
import './BookAnEvent.scss';
import data from '../../configJSON/bookEventGifts.json';
import eventsImg from '../../images/eventImg.jpg';
import photoGiftsImg from '../../images/photoGift.jpg';


type Services = {
    name: string,
    variant: string,
    // styles: {
    //     width: string,
    //     className: string,
    // },
    events: {name: string}[],
    btn: { value: string }
}[];


const BookAnEvent = () => {
    const services : Services = data.services;
    console.log('services ', services)
    return (
        <div className="services">
            {services.map( (service) => {
                const {name, variant, events, btn} = service;
                return (
                    <React.Fragment key={name}>
                        <Card
                            bg={variant.toLowerCase()}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: 'styles.width' }}
                            className="service"
                            >
                            <Card.Header>{name}</Card.Header>
                            <Card.Img variant="top" alt="eventsPhto" src={eventsImg} />
                            <Card.Body>
                                {/* <Card.Title>{}</Card.Title> */}
                                <Card.Text>
                                {events.map( (event) => {
                                    return <h6>{event.name}</h6>
                                })}
                                </Card.Text>
                                <Button variant="primary">{btn.value}</Button>
                            </Card.Body>
                        </Card>
                    </React.Fragment>
                    
                )
            })}
        </div>
    )
}

export default BookAnEvent;
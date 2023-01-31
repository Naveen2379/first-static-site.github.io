import React from "react";
import { Button, Card } from "react-bootstrap";


const OrderPhotoGifts = () => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src=""></Card.Img>
                <Card.Title>Photo Gifts</Card.Title>
                <Card.Body>
                    <img></img>
                </Card.Body>
                {/** integrate Watsapp api */}
                <Button variant="primary">Order Photo Gifts</Button>
            </Card>
        </div>
    )
}

export default OrderPhotoGifts;
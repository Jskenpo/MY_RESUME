import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './proyect.scss';

function Proyect({ name, description, url, img }) {
    return (

        <div className="proyectCard">

            <Card bg='secondary' border = 'info' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary" href={url} >Github</Button>
                </Card.Body>
            </Card>

        </div>
    );
}

export default Proyect;
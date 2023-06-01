import React from "react";
import "./SocialMedia.scss";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import email from "../../imas/email.png";
import github from "../../imas/github.jpg";
import instagram from "../../imas/insta.png";


function SocialMedia() {
    return (
        <div className="Redes">
            <CardGroup>
                <Card bg='dark' border = 'danger' text= 'light'>
                    <Card.Img variant="top" src={instagram} />
                    <Card.Body>
                        <Card.Title>Instagram</Card.Title>
                        <Card.Text>
                            Contactame mediante mi red social más usada, Instagram.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a href="https://www.instagram.com/santisteban02/"> @Santisteban02</a></small>
                    </Card.Footer>
                </Card>
                <Card bg='dark' border = 'danger' text= 'light'>
                    <Card.Img variant="top" src={email} />
                    <Card.Body>
                        <Card.Title>Correo</Card.Title>
                        <Card.Text>
                            Para un acercamiento más formal contáctame mediante mi correo electrónico.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=jskenpo2002@gmail.com"> jskenpo2002@gmail.com</a></small>
                    </Card.Footer>
                </Card>
                <Card bg='dark' border = 'danger' text= 'light'>
                    <Card.Img variant="top" src={github} />
                    <Card.Body>
                        <Card.Title>Github</Card.Title>
                        <Card.Text>
                            Para ver mis proyectos y mis avances en el mundo de la programación, visita mi Github.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a href="https://github.com/Jskenpo"> @Jskenpo</a></small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}

export default SocialMedia;
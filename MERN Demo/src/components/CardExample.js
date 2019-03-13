import React from 'react';
import { Col, Row, Card, Container, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import ModalExample from './ModalExample';

const publicUrl = "../../";

const CardExample = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Here's what our stack looks like with <b><code>Cards</code></b></h2>
                </Col>
            </Row>
            <Row>
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src={publicUrl + "images/mongodb.png"} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>MongoDB</CardTitle>
                            <CardSubtitle>Database</CardSubtitle>
                            <CardText>I'm Mongo!</CardText>
                            <ModalExample buttonType={"MongoDB"}/>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={publicUrl + "images/express.png"} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Express</CardTitle>
                            <CardSubtitle>Backend</CardSubtitle>
                            <CardText>I'm Express!</CardText>
                            <ModalExample buttonType={"Express"}/>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={publicUrl + "images/react.png"} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>React</CardTitle>
                            <CardSubtitle>Frontend</CardSubtitle>
                            <CardText>I'm React!</CardText>
                            <ModalExample buttonType={"React"}/>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={publicUrl + "images/node.jpg"} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>NodeJS</CardTitle>
                            <CardSubtitle>Frontend & Backend</CardSubtitle>
                            <CardText>I'm Node!</CardText>
                            <ModalExample buttonType={"NodeJS"}/>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Row>
        </Container>
    );
};

export default CardExample;
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Resources = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2><b><code>Read the documentation!</code></b></h2>
                </Col>
            </Row>
            <b><a target={"blank"} href={'https://docs.mongodb.com'}>MongoDB documentation</a></b>
            <br/>
            <b><a target={"blank"} href={'https://expressjs.com/en/guide/routing.html'}>Express documentation</a></b>
            <br/>
            <b><a target={"blank"} href={'https://reactjs.org/docs/getting-started.html'}>React documentation</a></b>
            <br/>
            <b><a target={"blank"} href={'https://reactstrap.github.io'}>Reactstrap documentation</a></b>
            <br/>
            <b><a target={"blank"} href={'https://nodejs.org/dist/latest-v10.x/docs/api/documentation.html'}>NodeJS documentation</a></b>
        </Container>
    );
};

export default Resources;
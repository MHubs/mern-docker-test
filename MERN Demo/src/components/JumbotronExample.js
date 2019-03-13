import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import ModalExmaple from './ModalExample';

const JumbotronExample = (props) => {
    return (
        <Container>
            <Jumbotron>
                <h1 className="display-3">Ultimate Software</h1>
                <p className="lead">I may not be green but I can be.</p>
                <hr className="my-2" />
                <p>Lots of rectangles</p>
                <p className="lead">
                    <ModalExmaple buttonType={"Jumbotron"}/>
                </p>
            </Jumbotron>
        </Container>
    );
};

export default JumbotronExample;
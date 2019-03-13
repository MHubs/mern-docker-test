import React from 'react';
import {Container, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

const FormExample = (props) => {

    return (
        <Container>
            <Form>
                <FormGroup row>
                    <Label for="first" sm={2}>First</Label>
                    <Col sm={10}>
                        <Input type="email" name="first" id="first" onChange={(evt) => {
                            props.app.state.firstname = evt.target.value;
                        }} placeholder="First name"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="last" sm={2}>Last</Label>
                    <Col sm={10}>
                        <Input type="password" name="last" id="last" onChange={(evt) => {
                            props.app.state.lastname = evt.target.value;
                        }} placeholder="Last name, but as a password field"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="user" sm={2}>Username</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="user" id="user" onChange={(evt) => {
                            console.log(evt.target.value);
                            props.app.state.username = evt.target.value;
                        }} placeholder="Username, but as a text area"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{size: 10, offset: 2}}>
                        <Button
                            onClick={() => props.app.putDataToDB(props.app.state.firstname, props.app.state.lastname, props.app.state.username) }>Submit</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="ID" sm={2}>ID</Label>
                    <Col sm={10}>
                        <Input name="ID" id="ID" onChange={(evt) => {
                            props.app.state.idToDelete = evt.target.value;
                        }} placeholder="ID to delete"/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{size: 10, offset: 2}}>
                        <Button
                            onClick={() => props.app.deleteFromDB(props.app.state.idToDelete) }>Delete</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    );
}

export default FormExample;
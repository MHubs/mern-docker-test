import React from 'react';
import { Table, Container, Row, Col } from 'reactstrap';

const TableExample = (props) => {

    const { data } = props.app.state;

    return(
        <Container>
            <Row>
                <Col>
                    <h2>Ultimate Software's <b><code>Employees</code></b></h2>
                </Col>
            </Row>
            <Row>
                <Table striped bordered responsive>
                    <thead>
                    <tr>
                        <th>ID:</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.length <= 0
                        ? ""
                        : data.map(dat => (
                            <tr>
                                <th scope="row">{dat.id}</th>
                                <td>{dat.firstname}</td>
                                <td>{dat.lastname}</td>
                                <td>{dat.username}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default TableExample;
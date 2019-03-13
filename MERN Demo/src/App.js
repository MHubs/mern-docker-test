//Import Modules
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

//Import Components
import Header from './components/Header';
import Message from './components/Message';
import CardExample from './components/CardExample';
import TableExample from './components/TableExample';
import FormExample from './components/FormExample';
import JumbotronExample from './components/JumbotronExample';
import Resources from './components/Resources';
import Footer from './components/Footer';

export default class App extends Component {

    /*
        State:
          A representation of the database data:
            data: an array of the current MongoDB data
            id: the ID of the next element to be added to Mongo
            firstname: what is currently input in the "first" section of the form
            lastname: what is currently input in the "last" section of the form
            username: what is currently input in the "username" section of the form
            intervalIsSet: A test to see if the browser is polling Mongo every few seconds
            idToDelete: The id of the element about to be deleted from Mongo
            idToUpdate: The id of the element about to be updated in Mongo
            objectToUpdate: The actual element being updated in Mongo
     */

    state = {
        data: [],
        id: 0,
        firstname: null,
        lastname: null,
        username: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null
    };

    /*
        When a component mounts, make it continuously poll Mongo for data changes
     */
    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    /*
        Probably best to have a way to stop this polling
     */
    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    /*
        Contact backend to get access data from Mongo
     */
    getDataFromDb = () => {
        fetch("http://localhost:3001/api/getData")
            .then(data => data.json())
            .then(res => this.setState({ data: res.data }));
    };

    /*
        Contact backend to put new data in Mongo
     */
    putDataToDB = (fName, lName, uName) => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        console.log("Adding", idToBeAdded, fName, lName, uName);

        console.log(axios.post("http://localhost:3001/api/putData", {
            id: idToBeAdded,
            firstname: fName,
            lastname: lName,
            username: uName
        }));
    };


    /*
        Contact backend to Delete element with specific ID
     */
    deleteFromDB = idTodelete => {
        let objIdToDelete = null;
        this.state.data.forEach(dat => {
            if (dat.id === idTodelete) {
                objIdToDelete = dat._id;
            }
        });

        axios.delete("http://localhost:3001/api/deleteData", {
            data: {
                id: objIdToDelete
            }
        });
    };

    render() {

        /*
            This part is relatively straightforward
            The main part is that this class is passed into components so they can access the above methods
         */

        return (
            <div className="App">
                <Header logo={logo}/>
                <br/>
                <Message/>
                <br/>
                <TableExample app={this}/>
                <br/>
                <CardExample />
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <h2>A sample <b><code>Form</code></b> and <b><code>Jumbotron</code></b></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col><FormExample app={this}/></Col>
                        <Col><JumbotronExample app={this}/></Col>
                    </Row>
                </Container>
                <br/>
                <Resources />
                <br/>
                <br/>
                <Footer />
            </div>
        );
    }
}



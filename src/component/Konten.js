import React, {Component} from 'react';
import Tabel from './Tabel';
import { Col, Container, Row, Spinner, Tabs, Tab} from 'react-bootstrap';

class Konten extends Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col align='left'><h3>Rumor Transfer Pemain</h3></Col>
                        <Col align='right'>
                            <Spinner animation="border" variant="success" />   
                            <Spinner animation="grow" variant="success" /> 
                        </Col>
                    </Row>
                    </Container>
                    <Container>
                    <center>
                    <Row >
                        <Col sm={12}>
                            <Tabs defaultActiveKey="Semua Transfer" id="uncontrolled-tab-example">
                                <Tab eventKey="Semua Transfer" title="Semua Transfer"><Tabel/></Tab>
                                <Tab eventKey="Liga Primer Inggris" title="Liga Primer Inggris"><Tabel/></Tab>
                                <Tab eventKey="Serie A" title="Serie A"><Tabel/></Tab>
                                <Tab eventKey="Divisi Primera" title="Divisi Primera"><Tabel/></Tab>
                                <Tab eventKey="Bundesliga" title="Bundesliga"><Tabel/></Tab>
                                <Tab eventKey="Liga 1 Indonesia" title="Liga 1 Indonesia"><Tabel/></Tab>
                            </Tabs>
                        </Col>
                    </Row>
                    </center>
                </Container>
            </div>
        )
    }
}
export default Konten
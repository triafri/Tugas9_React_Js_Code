import React from 'react';
import {Col, Pagination, OverlayTrigger,Popover, Button, Container, Row, Collapse} from 'react-bootstrap';

function Footer() {
    const [open, setOpen] = React.useState(false)

    const popover=(
        <Popover id="popover-basic">
            <Popover.Title as="h3">Informasi Website</Popover.Title>
            <Popover.Content>
                Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
            </Popover.Content>
        </Popover>
    )

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item >{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item >{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Col>
                </Row>
                <Row>
                    <Col align='left' sm={2.5}>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <Button variant="primary">Informasi</Button>
                        </OverlayTrigger>
                    </Col>
                    <Col sm={2}>
                        <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        >
                        Versi Website
                        </Button>
                        <Collapse in={open}>
                        <div id="example-collapse-text">Akses Sport V1.0</div>
                        </Collapse>
                    </Col>
                </Row>
            </Container>>
        </div>
    );
}

export default Footer;
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/esm/Container'

export default function Footer() {
    return (
        <footer
            style={{
                width: "100%",
                position: "relative",
                bottom: 0,
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Container>
                <Row>
                    <Col className='text-center p-3'>
                        Copyright &copy; Create notes
                    </Col>
                </Row>
            </Container>

        </footer>

    )
}

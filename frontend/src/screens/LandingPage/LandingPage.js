import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import "./LandingPage.css"
import Button from 'react-bootstrap/esm/Button'


export default function LandingPage() {
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className='title'>Welcome to create notes App</h1>
                            <p className='subtitle'>One safe place for all your notes...</p>
                        </div>
                        <div className='buttonContainer'>
                            <a href='/login'>
                                <Button size='lg' className='landingbutton' >Login</Button>
                            </a>
                            <a href='/register'>
                                <Button size='lg' className='landingbutton'
                                    variant='outline-primary'
                                >
                                    Signup
                                </Button>
                            </a>

                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import "./MainScreen.css"

export default function MainScreen({ title, children }) {
    return (
        <div className='mainback'>
            <Container> 
                <Row>
                    <div className='page'>
                        {
                            title && (
                                <>
                                    <h1 className='heading'>{title}</h1>
                                    <hr />
                                </>
                            )}
                        {children}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

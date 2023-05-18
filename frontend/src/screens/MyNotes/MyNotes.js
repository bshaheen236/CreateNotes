import React from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'

export default function MyNotes() {
    return (
        <MainScreen title="Welcome Back Shaheen bano..">
            <Link to="/createnote">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
                    Create New Notes
                </Button>
            </Link>
        </MainScreen>
    )
}

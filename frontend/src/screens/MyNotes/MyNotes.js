import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import GetNots from '../../services/Services';


export default function MyNotes() {
    const [Notes, setNotes] = useState([]);
    const deleteHandler = (id) => {
        if (window.confirm("are you sure?")) {
            alert("ok", id)
        }
    }
    useEffect(() => {
        (async () => {
            const res = await GetNots();
            setNotes(res.data)
        })();
    }, [])

    return (
        <MainScreen title="Welcome Back Shaheen bano.." >
            <Link to="/createnote">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
                    Create New Notes
                </Button>
            </Link>
            {Notes.map((notes =>
            (

                <Card style={{ margin: 10 }}>

                    <Card.Header style={{ display: "flex" }}>
                        <span
                            style={{
                                color: "black",
                                flex: 1,
                                cursor: "pointer",
                                alignSelf: "center",
                                fontSize: 20,
                                textDecoration: 'none'
                            }}
                        >

                            {notes.title}
                        </span>
                        <div>
                            <Button href={`/notes/${notes._id}`}>Edit</Button>
                            <Button variant='danger' className='mx-2'
                                onClick={() => deleteHandler(notes._id)}
                            >Delete</Button>
                        </div>
                    </Card.Header>


                    <Card.Body >
                        <h4>
                            <Badge bg='success' text='light'>category - {notes.category}</Badge>
                        </h4>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {notes.content}
                            </p>
                            <footer className="blockquote-footer">
                                Created On - date
                            </footer>
                        </blockquote>
                    </Card.Body>

                </Card>

            )))}


        </MainScreen>
    )
}




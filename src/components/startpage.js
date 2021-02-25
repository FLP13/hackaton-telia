import { useReducer, useState, useRef, useEffect } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';

import Timeline from './timeline';

function Startpage({startMob}) {

    const [startTime, setStartTime] = useReducer((_, newValue) => newValue.target.value,'12:00');
    const [endTime, setEndTime] = useReducer((_, newValue) => newValue.target.value,'12:00');
    
    const [participants, setParticipants] = useState([]);

    const participantInput = useRef();

    const addParticipant = (e) => {
        e.preventDefault();

        const tempParticipants = [...participants];
        tempParticipants.push(participantInput.current.value);
        setParticipants(tempParticipants);

        participantInput.current.value = '';
    }

    useEffect(() => {
        
    }, [participants, startTime, endTime]);

    return (
      <>
        <div>
            <input type="time" value={startTime} onChange={setStartTime} />
            <input type="time" value={endTime} onChange={setEndTime} />
        </div>

        <Form className="align-items-center" onSubmit={addParticipant}>
            <Row>
                <Col xs="auto">
                    <Form.Control type="text" ref={participantInput} />
                </Col>
                <Col xs="auto">
                    <Button variant="primary" type="submit">Add</Button>
                </Col>
            </Row>
        </Form>

        {
            participants.map((participant, i) =>{
                return <p key={i}>{participant}</p>
            })
        }

        <Timeline participants={participants} />
        <Button variant="primary" onClick={() => startMob(startTime, endTime, participants)}>Start Mobbing :)</Button>
      </>
    );
  }
  
  export default Startpage;

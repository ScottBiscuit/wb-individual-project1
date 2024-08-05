import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { useLoaderData } from 'react-router-dom';
import { Button, ListGroup, Table } from 'react-bootstrap';
import AccordionSesItem from '../components/accordion/AccordionSesItem';
import AccordionDMItem from '../components/accordion/AccordionDMItem';
import ModalAddSesNote from '../components/accordion/ModalAddSesNote';
import { useState } from 'react';

export default function SessionNotes() {

  const [sessionNotes, setNotes] = useState(useLoaderData().sessionNotes);
  const [dmNotes, setDMNotes] = useState(useLoaderData().dmNotes);

  const sessionNotesList = sessionNotes.map((sesNote) => (
    <AccordionSesItem key={sesNote.sesId} sesNote = {sesNote} setNotes={setNotes} sessionNotes={sessionNotes}/>
  ));
  const dmNotesList = dmNotes.map((dmNote) => (
    <AccordionDMItem key={dmNote.sesId} dmNote = {dmNote} setDMNotes={setDMNotes} dmNotes={dmNotes}/>
  ));

  return (
    <Container >
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey='0' className="mb-3 bg-warning-subtle">
            <Accordion.Header  className='mb-3'>Future Session Ideas</Accordion.Header>
            <Accordion.Body>
              <Button as="input" type="button" value="Add Ideas" className='bg-success'/>
              <ListGroup className='mb-3'>
                {dmNotesList}
              </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
        <ModalAddSesNote setNotes={setNotes} sessionNotes={sessionNotes}/>
        <div>
        {sessionNotesList}
        </div>
      </Accordion>
    </Container>
  );
}


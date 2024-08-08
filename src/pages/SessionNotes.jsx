import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import AccordionSesItem from '../components/accordion/AccordionSesItem';
import AccordionDMItem from '../components/accordion/AccordionDMItem';
import ModalAddSesNote from '../components/accordion/ModalAddSesNote';
import ModalAddDMNote from '../components/accordion/ModalAddDMNote';
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
    // <Container >
      <Card>
        <Card.Img src="../images/white_bg_green_dice.jpg" alt="Card image" className='opacity-50'/>
        <Card.ImgOverlay>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey='0' className="mb-3 bg-success-subtle">
            <Accordion.Header  className='mb-3'>Future Session Ideas</Accordion.Header>
            <Accordion.Body>
              <ModalAddDMNote dmNotes={dmNotes} setDMNotes={setDMNotes} />
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
      </Card.ImgOverlay>
    </Card>
    // </Container>
  );
}


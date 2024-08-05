import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { useLoaderData } from 'react-router-dom';
import { Button, ListGroup, Table } from 'react-bootstrap';
import AccordionSesItem from '../components/accordion/AccordionSesItem';
import ModalAddSesNote from '../components/accordion/ModalAddSesNote';
import { useState } from 'react';

export default function SessionNotes() {

  const [sessionNotes, setNotes] = useState(useLoaderData().sessionNotes);

  const sessionNotesList = sessionNotes.map((sesNote) => (
    <AccordionSesItem key={sesNote.sesId} sesNote = {sesNote} setNotes={setNotes} sessionNotes={sessionNotes}/>
  ));

  return (
    <Container >
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey='0' className="mb-3 bg-warning-subtle">
            <Accordion.Header  className='mb-3'>Future Session Ideas</Accordion.Header>
            <Accordion.Body>
              <Button as="input" type="button" value="Add Ideas" className='bg-success'/>
            <ListGroup className='mb-3'>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
              <Table>
              
              <div>
              </div>
              </Table>
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


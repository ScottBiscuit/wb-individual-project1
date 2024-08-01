import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';
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
            <Accordion.Header>Future Session Ideas</Accordion.Header>
            <Accordion.Body>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat recusandae facere sunt asperiores iure! Facere nostrum, pariatur officia accusamus accusantium doloremque totam quibusdam aliquam maiores repellendus hic sapiente officiis aut.
              </div>
              <div>
                <Button as="input" type="button" value="Edit" />
              </div>
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

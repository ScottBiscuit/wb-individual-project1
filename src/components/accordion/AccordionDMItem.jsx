import React, { useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import ModalEditDMNote from './ModalEditDMNote';
import ModalDelDMNote from './ModalDelDMNote';

export default function AccordionDMItem({ dmNote, setDMNotes, dmNotes }) {
    const { dmNoteId, dmNoteIdeas } = dmNote;
    
  return (
    <>
    <ListGroup.Item key={dmNoteId}>
      <Row>
        <Col xs={{span: 10}}>
          {dmNoteIdeas}
        </Col>
        <Col>
          <ModalDelDMNote dmNote={dmNote} setDMNotes={setDMNotes} dmNotes={dmNotes}/>
          <ModalEditDMNote dmNote={dmNote} setDMNotes={setDMNotes} dmNotes={dmNotes}/>
        </Col>
      </Row>
    </ListGroup.Item>
    </>
  )
}

              


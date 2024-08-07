import React, { useState } from 'react'
import { Button, Form, ListGroup, } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

import ModalEditDMNote from './ModalEditDMNote';
import ModalDelDMNote from './ModalDelDMNote';

export default function AccordionDMItem({ dmNote, setDMNotes, dmNotes }) {
    const { dmNoteId, dmNoteIdeas } = dmNote;
    
  return (
    <>
    <ListGroup.Item key={dmNoteId}>
      {dmNoteIdeas}
      <ModalDelDMNote dmNote={dmNote} setDMNotes={setDMNotes} dmNotes={dmNotes}/>
      <ModalEditDMNote dmNote={dmNote} setDMNotes={setDMNotes} dmNotes={dmNotes}/>
    </ListGroup.Item>
    </>
  )
}

              


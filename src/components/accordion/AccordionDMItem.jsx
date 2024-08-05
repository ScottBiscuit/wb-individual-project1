import React, { useState } from 'react'
import { Button, Form, ListGroup, } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import ModalEditSesNote from './ModalEditSesNote';
import ModalDelSesNote from './ModalDelSesNote';

export default function AccordionDMItem({ dmNote, setDMNotes, dmNotes }) {
    const { dmNoteId, dmNoteIdeas } = dmNote;
    
  return (
    <>
    <ListGroup.Item key={dmNoteId}>{dmNoteIdeas}</ListGroup.Item>
            {/* <ModalDelSesNote sesNote={sesNote} setNotes={setNotes} sessionNotes={sessionNotes}/>
            <ModalEditSesNote sesNote={sesNote} setNotes={setNotes} sessionNotes={sessionNotes}/> */}
            {/* <BsFillTrashFill />
            <BsFillPencilFill /> */}
    </>
  )
}

              


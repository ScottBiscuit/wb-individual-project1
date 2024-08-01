import React, { useState } from 'react'
import { Accordion, Button, Form, Row } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import ModalEditSesNote from './ModalEditSesNote';
import ModalDelSesNote from './ModalDelSesNote';

export default function AccordionSesItem({ sesNote, setNotes, sessionNotes }) {
    const {sesId, sesNumber, sesDate, sesPartyLvl, sesNotes} = sesNote;
    
  return (
    <Accordion.Item eventKey={sesId} key={sesId}>
    <Accordion.Header>Session #{sesNumber}  |  {sesDate}  |  Lvl: {sesPartyLvl} </Accordion.Header>
      <Accordion.Body>
        <Row type='text'>
          {sesNotes}
        </Row>
          <span>
            <ModalDelSesNote sesNote={sesNote} setNotes={setNotes} sessionNotes={sessionNotes}/>
            <ModalEditSesNote sesNote={sesNote} setNotes={setNotes} sessionNotes={sessionNotes}/>
            {/* <BsFillTrashFill />
            <BsFillPencilFill /> */}
          </span>
      </Accordion.Body>
    </Accordion.Item>
  )
}

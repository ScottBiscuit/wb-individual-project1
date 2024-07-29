import React, { useState } from 'react'
import { Accordion, Button, Form, Row } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import ModalEditSesNote from './ModalEditSesNote';

export default function AccordionSesItem({ sesNote }) {
    const {sesId, sesNumber, sesDate, sesPartyLvl, sesNotes} = sesNote;
    
  return (
    <Accordion.Item eventKey={sesId} key={sesId}>
    <Accordion.Header>Session #{sesNumber}  |  {sesDate}  |  Lvl: {sesPartyLvl} </Accordion.Header>
      <Accordion.Body>
        <Row type='text'>
          {sesNotes}
        </Row>
          <span>
            <ModalEditSesNote />
            <BsFillTrashFill />
            <BsFillPencilFill />
          </span>
      </Accordion.Body>
    </Accordion.Item>
  )
}

AccordionSesItem.propTypes = {
    sesNotes: propTypes.string
}
import React, { useState } from 'react'
import { Accordion, Button, Form } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

export default function AccordionItem({ sesNote }) {
    const {sesId, sesNumber, sesDate, sesPartyLvl, sesNotes} = sesNote;


    const [isEditing, setIsEditing] = useState(sesNote)
    function turnOnEditing(){
        setIsEditing(true);
    }
    

  return (
    <Accordion.Item eventKey={sesId} key={sesId}>
    <Accordion.Header>Session #{sesNumber}  |  {sesDate}  |  Lvl: {sesPartyLvl} </Accordion.Header>
      <Accordion.Body>

        <span>
            <input 
                type='text'
                value={sesNotes}
                onChange={e => setIsEditing(e.target.value)}
                
            />
        </span>

        
          <div>
            <Button as="input" type="button" value="Save"  /> 
          </div>
      </Accordion.Body>
  </Accordion.Item>
  )
}

AccordionItem.propTypes = {
    sesNotes: propTypes.string
}
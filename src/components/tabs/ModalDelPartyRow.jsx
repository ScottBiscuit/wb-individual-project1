import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { BsFillTrashFill } from 'react-icons/bs';


export default function ModalDelPartyRow({ party, setParty, PC }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formState, setFormState] = useState(
    {
        pcName: party.pcName,
        pcRace: party.pcClass,
        pcLevel: party.pcLevel,
        pcBackstory: party.pcBackstory,
        pcGoals: party.pcGoals,
        pcExtras: party.pcExtras
    });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };

  const handleSubmit = () => {

    axios.delete(`/api/party/${PC.pcId}/delete`, 
      { pcId: formState.pcId }).then((res) => {

        const deletedResData = PC.pcId

        function findDeleted(PC, deletedResData){
          for(let i = 0; i < PC.length; i++){
            if(PC[i].pcId === deletedResData){
              return i;
            }
          }
        }
        party.splice(findDeleted(party, deletedResData), 1)

        setParty([...party])

        handleClose()
      })
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        <BsFillTrashFill />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Character</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this character from the party?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" type='submit' onClick={handleSubmit}>
            Delete Character
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

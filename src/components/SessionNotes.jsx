import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { useLoaderData } from 'react-router-dom';

export default function SessionNotes() {
  const { sessionNotes } = useLoaderData();

  const sessionNotesList = sessionNotes.map((sesNote) => (
    <Accordion.Item eventKey={sesNote.sesId} key={sesNote.sesId}>
      <Accordion.Header>Session #{sesNote.sesNumber}  |  {sesNote.sesDate}  |  Lvl: {sesNote.sesPartyLvl} </Accordion.Header>
        <Accordion.Body>
          {sesNote.sesNotes}
        </Accordion.Body>
    </Accordion.Item>
  ));

  return (
    <Container >
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey='0' className="mb-3 bg-warning-subtle">
            <Accordion.Header>Future Session Ideas</Accordion.Header>
            <Accordion.Body>
                Text here
            </Accordion.Body>
        </Accordion.Item>
        <div>
        {sessionNotesList}
        </div>
      </Accordion>
    </Container>
  );
}


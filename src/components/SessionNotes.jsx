import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

export default function SessionNotes() {
  return (
    <Container >
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey='0' className="mb-3 bg-warning-subtle">
            <Accordion.Header>Future Session Ideas</Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quidem veniam explicabo. Quis, explicabo incidunt aliquid aut, minus iste similique beatae harum officia repellat officiis eos? Sed porro laboriosam consectetur?
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
            <Accordion.Header>Session #1 - 2024-01-08 - Lvl 1</Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quidem veniam explicabo. Quis, explicabo incidunt aliquid aut, minus iste similique beatae harum officia repellat officiis eos? Sed porro laboriosam consectetur?
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
            <Accordion.Header>Session #0 - 2024-01-01 - Lvl 0</Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quidem veniam explicabo. Quis, explicabo incidunt aliquid aut, minus iste similique beatae harum officia repellat officiis eos? Sed porro laboriosam consectetur?
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}


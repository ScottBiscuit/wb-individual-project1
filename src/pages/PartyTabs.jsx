import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import ModalAddPartyRow from '../components/tabs/ModalAddPartyRow'
import ModalDelPartyRow from '../components/tabs/ModalDelPartyRow'
import ModalEditPartyRow from '../components/tabs/ModalEditPartyRow'

export default function PartyTabs() {
    // const { party } = useLoaderData();
    const [party, setParty] = useState(useLoaderData().party);
    const playerBasicRows = party.map((PC) => (
       
        <Container key={PC.pcId} className='bg-success-subtle'>
            <Row >
                <Col xs={{ span: 2 }}>
                    <img src={PC.pcImg} width='100px'/>
                </Col>
                <Col xs={{ span: 2 }}>
                    <Stack gap={0}>
                        <div className="p-2">Name:</div>
                        <div className="p-2">Race:</div>
                        <div className="p-2">Class:</div>
                        <div className="p-2">Level:</div>
                    </Stack>
                </Col>
                <Col xs={{ span: 7 }}>
                    <Stack gap={0}>
                        <div className="p-2">{PC.pcName}</div>
                        <div className="p-2">{PC.pcRace}</div>
                        <div className="p-2">{PC.pcClass}</div>
                        <div className="p-2">{PC.pcLevel}</div>                       
                    </Stack>
                </Col>
                <Col xs={{ span: 1 }}>
                    <Stack gap={1}>
                        <ModalEditPartyRow setParty={setParty} party={party} PC={PC} />
                        <ModalDelPartyRow setParty={setParty} party={party} PC={PC} />
                    </Stack>
                </Col>
            </Row>
        </Container>
    ));

    const playerBSRows = party.map((PC) => (
        <Container key={PC.pcId} className='bg-success-subtle'>
            <Row>
                <Col xs={{ span: 2 }}>
                    <img src={PC.pcImg} width='100px'/>
                </Col>
                <Col xs={{ span: 9 }}>
                    {PC.pcBackstory}
                </Col>
                <Col xs={{ span: 1 }}>
                    <Button as="input" type="button" value="Edit" />
                </Col>
            </Row>
        </Container>
    ));

    const playerGoalsRows = party.map((PC) => (
        <Container key={PC.pcId} className='bg-success-subtle'>
            <Row>
                <Col xs={{ span: 2 }}>
                    <img src={PC.pcImg} width='100px'/>
                </Col>
                <Col xs={{ span: 9 }}>
                    {PC.pcGoals}
                </Col>
                <Col xs={{ span: 1 }}>
                    <Button as="input" type="button" value="Edit" />
                </Col>
            </Row>
        </Container>
    ));

    const playerExtrasRows = party.map((PC) => (
        <Container key={PC.pcId} className='bg-success-subtle'>
            <Row>
                <Col xs={{ span: 2 }}>
                    <img src={PC.pcImg} width='100px'/>
                </Col>
                <Col xs={{ span: 9 }}>
                    {PC.pcExtras}
                </Col>
                <Col xs={{ span: 1 }}>
                    <Button as="input" type="button" value="Edit" />
                </Col>
            </Row>
        </Container>
    ));

  return (
    <Container fluid>
        <Tabs defaultActiveKey="profile" className="mb-3 bg-success-subtle" justify>
            <Tab eventKey="blank" title="" disabled></Tab>
            <Tab eventKey="profile" title="Basic Info">{playerBasicRows}</Tab>
            <Tab eventKey="backstory" title="Backstory">{playerBSRows}</Tab>
            <Tab eventKey="goals_missions" title="Goals/Missions">{playerGoalsRows}</Tab>
            <Tab eventKey="extras" title="Extras">{playerExtrasRows}</Tab>
        </Tabs>
        <Row>
            <ModalAddPartyRow 
            // onClick={addNewPlayer}
            />
        </Row>
    </Container>
  );
}

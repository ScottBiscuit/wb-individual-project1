import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import axios from 'axios';
import PartyTabsAddPCButton from '../components/PartyTabsAddPCButton.jsx';
import { Link, useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap'

export default function PartyTabs() {
    const { party } = useLoaderData();

    // const addNewPlayer = async (pcId) => {
    //     const { data } = await axios.post('/api/party', { name: 'New Player Name' });
    //     const newParty = { ...data, isEditing: true };
    //     setPartyList([...partyList, newParty]);
    //   };

    // const deletePartyRow = async (pcId) => {
    //     const { data } = await axios.delete(`/api/party/${pcId}/delete`);

    //     if (!data.error) {
    //         const newPartyList = [...partyList];

    //         const index = newPartyList.findIndex((party) => party.pcId === data.pcId);
    //         newPartyList.splice(index, 1);
    //         setPartyList(newPartyList);
    //     }
    // };

    const playerBasicRows = party.map((PC) => (
        // <PartyTabsRow 
        // key={ pcId }
        // initialPartyData={{ pcId, pcImg, pcName, pcRace, pcClass, pcLevel }}
        // initialIsEditing={ isEditing }
        // onDeleteRow={ () => deletePartyRow(pcId) }
        // />
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
                <Button as="input" type="button" value="Edit" />
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
            <PartyTabsAddPCButton 
            // onClick={addNewPlayer}
            />
        </Row>
    </Container>
  );
}

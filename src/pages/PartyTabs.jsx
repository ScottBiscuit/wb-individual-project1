import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ModalAddPartyRow from '../components/tabs/ModalAddPartyRow'
import ModalDelPartyRow from '../components/tabs/ModalDelPartyRow'
import ModalEditPartyRow from '../components/tabs/ModalEditPartyRow'
import ModalEditPartyBS from '../components/tabs/ModalEditPartyBS'
import ModalEditPartyEx from '../components/tabs/ModalEditPartyEx'
import ModalEditPartyGM from '../components/tabs/ModalEditPartyGM'

export default function PartyTabs() {

    const [party, setParty] = useState(useLoaderData().party);
    const playerBasicRows = party.map((PC) => (
       
    <Row key={PC.pcId} className="mb-3 p-2 bg-success-subtle">
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
    ));

    const playerBSRows = party.map((PC) => (

        <Row key={PC.pcId} className="mb-3 p-2 bg-success-subtle">
            <Col xs={{ span: 2 }}>
                <img src={PC.pcImg} width='100px'/>
            </Col>
            <Col xs={{ span: 9 }}>
                <Stack gap={1}>
                <h5>{PC.pcName}</h5>
                <div>{PC.pcBackstory}</div>
                </Stack>
            </Col>
            <Col xs={{ span: 1 }}>
                <Stack gap={1}>
                    <ModalEditPartyBS setParty={setParty} party={party} PC={PC} />
                    <ModalDelPartyRow setParty={setParty} party={party} PC={PC} />
                </Stack>
            </Col>
        </Row>
    ));

    const playerGoalsRows = party.map((PC) => (

        <Row key={PC.pcId} className="mb-3 p-2 bg-success-subtle">
            <Col xs={{ span: 2 }}>
                <img src={PC.pcImg} width='100px'/>
            </Col>
            <Col xs={{ span: 9 }}>
                <Stack gap={1}>
                    <h5>{PC.pcName}</h5>
                    <div>{PC.pcGoals}</div>
                </Stack>
            </Col>
            <Col xs={{ span: 1 }}>
                <Stack gap={1}>
                    <ModalEditPartyGM setParty={setParty} party={party} PC={PC} />
                    <ModalDelPartyRow setParty={setParty} party={party} PC={PC} />
                </Stack>
            </Col>
        </Row>
    ));

    const playerExtrasRows = party.map((PC) => (

        <Row key={PC.pcId} className="mb-3 p-2 bg-success-subtle">
            <Col xs={{ span: 2 }}>
                <img src={PC.pcImg} width='100px'/>
            </Col>
            <Col xs={{ span: 9 }}>
                <Stack gap={1}>
                    <h5>{PC.pcName}</h5>
                    <div>{PC.pcExtras}</div>
                </Stack>
            </Col>
            <Col xs={{ span: 1 }}>
                <Stack gap={1}>
                    <ModalEditPartyEx setParty={setParty} party={party} PC={PC} />
                    <ModalDelPartyRow setParty={setParty} party={party} PC={PC} />
                </Stack>
            </Col>
        </Row>
    ));

  return (
    <Card>
        <Card.Img src="../images/game_background.jpg" alt="Card image" className='opacity-25' height='100%'/>
        <Card.ImgOverlay>
        <Tabs defaultActiveKey="profile" className="mb-3 bg-success-subtle" justify>
            <Tab eventKey="blank" title="" disabled></Tab>
            <Tab eventKey="profile" title="Basic Info" className='mb-3 p-2'>{playerBasicRows}</Tab>
            <Tab eventKey="backstory" title="Backstory" className='mb-3 p-2'>{playerBSRows}</Tab>
            <Tab eventKey="goals_missions" title="Goals/Missions" className='mb-3 p-2'>{playerGoalsRows}</Tab>
            <Tab eventKey="extras" title="Extras" className='mb-3 p-2'>{playerExtrasRows}</Tab>
        </Tabs>
        <Row>
            <ModalAddPartyRow party={party} setParty={setParty} />
        </Row>
        </Card.ImgOverlay>
    </Card>
  );
}

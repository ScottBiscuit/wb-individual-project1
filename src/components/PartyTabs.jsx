import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import axios from 'axios';
import PartyTabsRow from './PartyTabsRow.jsx';



export default function PartyTabs({initialPartyList}) {
    const [partyList, setPartyList] = useState(initialPartyList);

    // TODO change to correct Row Add
    const addCombatRowHero = async (pcId) => {
        const { data } = await axios.post('/api/party', { name: 'Hero', hero: true });
        const newParty = { ...data, isEditing: true };
        setPartyList([...partyList, newParty]);
      };

    const deletePartyRow = async (pcId) => {
        const { data } = await axios.delete(`/api/party/${pcId}/delete`);

        if (!data.error) {
            const newPartyList = [...partyList];

            const index = newPartyList.findIndex((party) => party.pcId === data.pcId);
            newPartyList.splice(index, 1);
            setPartyList(newPartyList);
        }
    };

    const rows = partyList.map(({ pcId, pcImg, pcName, pcRace, pcClass, pcLevel, isEditing }) => (
        <PartyTabsRow 
        key={ pcId }
        initialCombatData={{ pcId, pcImg, pcName, pcRace, pcClass, pcLevel }}
        initialIsEditing={ isEditing }
        onDeleteRow={ () => deletePartyRow(pcId) }
        />
    ));

  return (
    <Container fluid>
        <Tabs
        defaultActiveKey="profile"
        // id="justify-tab-example"
        className="mb-3 bg-success-subtle"
        justify
        >
        <Tab eventKey="players" title="" disabled>
        </Tab>
        <Tab eventKey="profile" title="Basic Info">
            <Container className='bg-success-subtle'>
                {rows}
            </Container>
        </Tab>

{/* TODO convert backstory, goals and extras tabs like basic info/profile */}

        <Tab eventKey="backstory" title="Backstory">
        <Container className='bg-success-subtle'>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/cawlin.png' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    BS - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/beast_boy.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    BS - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/bender_rodriguez.png' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    BS - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/ahsoka_tano.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    BS - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
            </Container>
        </Tab>

        <Tab eventKey="goals_missions" title="Goals/Missions">
        <Container className='bg-success-subtle'>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/cawlin.png' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    Goals - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/beast_boy.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    Goals - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/bender_rodriguez.png' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    Goals - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/ahsoka_tano.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    Goals - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
            </Container>
        </Tab>

        <Tab eventKey="extras" title="Extras">
        <Container className='bg-success-subtle'>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/cawlin.png' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    Extras - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/beast_boy.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    Extras - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/bender_rodriguez.png' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    Extras - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2 }}>
                        <img src='./images/ahsoka_tano.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 9 }}>
                    Extras - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
            </Container>
        </Tab>
        </Tabs>
    </Container>
  );
}

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function PartyTabs() {
  return (
    <Container fluid>
        <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3 bg-success-subtle"
        justify
        >
        <Tab eventKey="players" title="Player Characters" disabled>
        </Tab>
        <Tab eventKey="profile" title="Basic Info">
            <Container className='bg-success-subtle'>
                <Row>
                    <Col xs={{ span: 2}}>
                        <img src='./images/cawlin.png' width='100px'/>
                    </Col>
                    <Col xs={{ span: 2, offset: 1}}>
                        <Stack gap={0}>
                            <div className="p-2">Name:</div>
                            <div className="p-2">Race:</div>
                            <div className="p-2">Class:</div>
                        </Stack>
                    </Col>
                    <Col xs={{ span: 6}}>
                        <Stack gap={0}>
                            <div className="p-2">Cawlin</div>
                            <div className="p-2">Kenku</div>
                            <div className="p-2">Rogue 1, Warlock - Hexblade 6</div>
                        </Stack>
                    </Col>
                    <Col xs={{ span: 1}}>Edit</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2}}>
                        <img src='./images/beast_boy.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 2, offset: 1}}>
                        <Stack gap={0}>
                            <div className="p-2">Name:</div>
                            <div className="p-2">Race:</div>
                            <div className="p-2">Class:</div>
                        </Stack>
                    </Col>
                    <Col xs={{ span: 6}}>
                        <Stack gap={0}>
                            <div className="p-2">Garfield Beast Boy Logan</div>
                            <div className="p-2">Goblin</div>
                            <div className="p-2">Druid - Moon 7</div>
                        </Stack>
                    </Col>
                    <Col xs={{ span: 1}}>Edit</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2}}>
                        <img src='./images/bender_rodriguez.png' width='100px'/>
                    </Col>
                    <Col xs={{ span: 2, offset: 1}}>
                        <Stack gap={0}>
                            <div className="p-2">Name:</div>
                            <div className="p-2">Race:</div>
                            <div className="p-2">Class:</div>
                        </Stack>
                    </Col>
                    <Col xs={{ span: 6}}>
                        <Stack gap={0}>
                            <div className="p-2">Bender Rodriguez</div>
                            <div className="p-2">Warforged</div>
                            <div className="p-2">Artificer - Armorer 7</div>
                        </Stack>
                    </Col>
                    <Col xs={{ span: 1}}>Edit</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2}}>
                        <img src='./images/ahsoka_tano.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 2, offset: 1}}>
                        <Stack gap={0}>
                            <div className="p-2">Name:</div>
                            <div className="p-2">Race:</div>
                            <div className="p-2">Class:</div>
                        </Stack>
                    </Col>
                    <Col xs={{ span: 6}}>
                        <Stack gap={0}>
                            <div className="p-2">Ahsoka Tano</div>
                            <div className="p-2">Hobgoblin</div>
                            <div className="p-2">Fighter - Psi Warrior 7</div>
                        </Stack>
                    </Col>
                    <Col xs={{ span: 1}}>Edit</Col>
                </Row>
            </Container>
        </Tab>
        <Tab eventKey="backstory" title="Backstory">
        <Container className='bg-success-subtle'>
                <Row>
                    <Col xs={{ span: 2}}>
                        <img src='./images/cawlin.png' width='100px'/>
                    </Col>
                    <Col xs={{ span: 8, offset:1 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
            </Container>
        </Tab>
        <Tab eventKey="goals_missions" title="Goals/Missions">
        <Container className='bg-success-subtle'>
                <Row>
                    <Col xs={{ span: 2}}>
                        <img src='./images/cawlin.png' width='100px'/>
                    </Col>
                    <Col xs={{ span: 8, offset:1 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
            </Container>
        </Tab>
        <Tab eventKey="extras" title="Extras">
        <Container className='bg-success-subtle'>
                <Row>
                    <Col xs={{ span: 2}}>
                        <img src='./images/ahsoka_tano.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 8, offset:1 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2}}>
                        <img src='./images/ahsoka_tano.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 8, offset:1 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2}}>
                        <img src='./images/ahsoka_tano.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 8, offset:1 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
                <Row>
                    <Col xs={{ span: 2}}>
                        <img src='./images/ahsoka_tano.jpeg' width='100px'/>
                    </Col>
                    <Col xs={{ span: 8, offset:1 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti tempore adipisci totam, nisi at quo provident officiis ullam fuga quaerat libero non eaque asperiores sint blanditiis atque! Nostrum, autem! Porro.
                    </Col>
                    <Col xs={{ span: 1 }}>[Edit]</Col>
                </Row>
            </Container>
        </Tab>
        </Tabs>
    </Container>
  );
}

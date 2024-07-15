import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function PartyTabs() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="players" title="Player Characters" disabled>
      </Tab>
      <Tab eventKey="profile" title="Basic Info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia maiores officiis excepturi quia voluptates. Rerum voluptatem voluptatum id ad dolores veniam quia adipisci, velit rem harum qui repellat aliquam?
      </Tab>
      <Tab eventKey="backstory" title="Backstory">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque inventore similique ea, pariatur hic totam accusantium rerum sint consequuntur atque fugiat dolorem maxime assumenda deleniti nemo quisquam esse voluptas quas.
      </Tab>
      <Tab eventKey="goals_missions" title="Goals/Missions">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sed assumenda magnam officiis inventore! Vitae repellendus eos autem nihil! Maiores dolor reiciendis quas illo fugiat explicabo itaque possimus, nesciunt pariatur?
      </Tab>
      <Tab eventKey="extras" title="Extras">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae voluptatum consequatur itaque, quas alias dolore minima optio aspernatur? Quos eum libero modi quae maiores. Harum in tempore repellendus dolores!
      </Tab>
    </Tabs>
  );
}

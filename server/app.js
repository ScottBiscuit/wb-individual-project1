import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express();
const port = '8000';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

ViteExpress.config({ printViteDevServerHost: true });

const USER_DATA = [
    { userId: 0, email: 'scott@testemail.com', password: 'password', userName: 'Scott', isDM: true },
    { userId: 1, email: 'player@testemail.com', password: 'password', userName: 'Player', isDM: false },
]

const PC_DATA = [
    { pcId: 0, pcName: 'Cawlin', pcImg: 'cawlin.png', pcRace: 'Kenku', pcClass: 'Rogue | Warlock - Hexblade', pcLevel: 7,
        pcBackstory: 'Lots of words here',
        pcAllies: 'Friendly Person', pcGoals: 'Do things, and stuff', pcExtras: 'Random stuff here' },
    { pcId: 1, pcName: 'Garfield Beast Boy Logan', pcImg: 'beast_boy.png', pcRace: 'Goblin', pcClass: 'Druid - Moon', pcLevel: 7,
        pcBackstory: 'Lots of words here',
        pcAllies: 'Friendly Person', pcGoals: 'Do things, and stuff', pcExtras: 'Random stuff here' },
    { pcId: 2, pcName: 'Bender Rodriguez', pcImg: 'bender.png', pcRace: 'Warforged', pcClass: 'Artificer - Armorer', pcLevel: 7,
        pcBackstory: 'Lots of words here',
        pcAllies: 'Friendly Person', pcGoals: 'Do things, and stuff', pcExtras: 'Random stuff here' },
    { pcId: 3, pcName: 'Ahsoka Tano', pcImg: 'ahsoka.png', pcRace: 'Hobgoblin', pcClass: 'Fighter - Psi Warrior', pcLevel: 7,
        pcBackstory: 'Lots of words here',
        pcAllies: 'Friendly Person', pcGoals: 'Do things, and stuff', pcExtras: 'Random stuff here' },
]

const SESSION_DATA = [
    { sesId: 0, sesNumber: 0, sesDate: '2024-01-01', sesPartyLevel: 0, sesNotes: 'Session 0 notes here' },
    { sesId: 1, sesNumber: 1, sesDate: '2024-01-08', sesPartyLevel: 1, sesNotes: 'Session 1 notes here' },
    { sesId: 2, sesNumber: 2, sesDate: '2024-01-15', sesPartyLevel: 2, sesNotes: 'Session 2 notes here' },
    { sesId: 3, sesNumber: 3, sesDate: '2024-01-22', sesPartyLevel: 2, sesNotes: 'Session 3 notes here' },
    { sesId: 4, sesNumber: 4, sesDate: '2024-01-29', sesPartyLevel: 3, sesNotes: 'Session 4 notes here' }
]

app.get('/api/party', (req, res) => {
    res.json(PC_DATA);
  });
  
  app.post('/api/party', (req, res) => {
    const { pcImg, pcName, pcRace, pcClass, pcLevel } = req.body;
    
    const newItem = {
        pcId: generateId(),
        // if no value is provided in req.body, use default values
        pcImg: pcImg || './images/img_default.jpg',
        pcName: pcName || '',
        pcRace: pcRace || '',
        pcClass: pcClass || '',
        pcLevel: +(pcLevel) || 0,
    };
    PC_DATA.push(newItem);
    res.json(newItem);
  });

  app.put('/api/party/:pcId', (req, res) => {
    const { pcId } = req.params;
    const { pcImg, pcName, pcRace, pcClass, pcLevel } = req.body;

    const index = PC_DATA.findIndex((item) => item.pcId === +(pcId));
    if (index === -1) {
        res.status(404).json({ error: `Item with ID ${pcId} not found!`});
    } else {
        const item = PC_DATA[index];
        
        // Only update the values that are provided in req.body
        item.pcImg = pcImg || item.pcImg;
        item.pcName = pcName || item.pcName;
        item.pcRace = pcRace || item.pcRace;
        item.pcClass = pcClass || item.pcClass;
        item.pcLevel = +(pcLevel) || item.pcLevel;
        
        res.json(item);
    }
  });

  app.delete('/api/party/:pcId/delete', (req, res) => {
    const { pcId } = req.params;

    const index = PC_DATA.findIndex((item) => item.pcId === +(pcId));
    if (index === -1) {
        res.status(404).json({ error: `Item with ID ${pcId} not found!`});
    } else {
        PC_DATA.splice(index, 1);
        res.json({ pcId: +(pcId) });
    }
  });

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
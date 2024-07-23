import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import { User, Character, SessionNote, Campaign} from './src/model.js'

const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }))

function loginRequired(req, res, next) {
    if (!req.session.userId) {
      res.status(401).json({ error: 'Unauthorized' });
    } else {
      next()
    }
  }

  app.post('/api/auth', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (user && user.password === password) {
        req.session.userId = user.userId;
        res.json({ success: true });
    }   else {
        res.json({ success: false })
    }
});

app.post('/api/logout', loginRequired, (req, res) => {
    req.session.destroy();
    res.json({ success: true })
    }
);

app.get('/api/party', async (req, res) => {
    const allParty = await Character.findAll()
    res.json(allParty);
});

app.get('/api/party/:pcId', async (req, res) => {
    const { pcId } = req.params;
    const character = await Character.findByPk(pcId);
    res.json(character);
  });

app.post('/api/party', loginRequired, async(req, res) => {
    const { pcId, pcImg, pcName, pcRace, pcClass, pcLevel, pcBackstory, pcAllies, pcGoals, pcExtras } = req.body;
    
    const newPC = await Character.create({
        // if no value is provided in req.body, use default values
        pcId: pcId,
        pcImg: pcImg || './images/img_default.jpg',
        pcName: pcName || '',
        pcRace: pcRace || '',
        pcClass: pcClass || '',
        pcLevel: +(pcLevel) || 0,
        pcBackstory: pcBackstory || '',
        pcAllies: pcAllies || '',
        pcGoals: pcGoals || '',
        pcExtras: pcExtras || ''
    });
    res.json(newPC);
});

app.put('/api/party/:pcId', loginRequired, async (req, res) => {
    const { pcId } = req.params;
    const { pcImg, pcName, pcRace, pcClass, pcLevel, pcBackstory, pcAllies, pcGoals, pcExtras } = req.body;

    
    const index = Character.findIndex((item) => item.pcId === +(pcId));
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

app.delete('/api/party/:pcId/delete', loginRequired, async (req, res) => {
    const { pcId } = req.params;
    
    const index = Character.findIndex((item) => item.pcId === +(pcId));
    if (index === -1) {
        res.status(404).json({ error: `Item with ID ${pcId} not found!`});
    } else {
        Character.splice(index, 1);
        res.json({ pcId: +(pcId) });
    }
});

app.get('/api/session_notes', loginRequired, async (req, res) => {
    const allNotes = await SessionNote.findAll()
    res.json(allNotes);
});

app.delete('/api/session_notes/:sesId/delete', loginRequired, async (req, res) => {
    const { sesId } = req.params;
    
    const index = SessionNote.findIndex((item) => item.sesId === +(sesId));
    if (index === -1) {
        res.status(404).json({ error: `Item with ID ${sesId} not found!`});
    } else {
        SessionNote.splice(index, 1);
        res.json({ sesId: +(sesId) });
    }
});

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));


// const USER_DATA = [
//     { userId: 0, email: 'scott@testemail.com', password: 'password', userName: 'Scott', isDM: true },
//     { userId: 1, email: 'player@testemail.com', password: 'password', userName: 'Player', isDM: false },
// ]

// const PC_DATA = [
//     { pcId: 0, pcName: 'Cawlin', pcImg: 'cawlin.png', pcRace: 'Kenku', pcClass: 'Rogue | Warlock - Hexblade', pcLevel: 7,
//         pcBackstory: 'Lots of words here',
//         pcAllies: 'Friendly Person', pcGoals: 'Do things, and stuff', pcExtras: 'Random stuff here' },
//     { pcId: 1, pcName: 'Garfield Beast Boy Logan', pcImg: 'beast_boy.png', pcRace: 'Goblin', pcClass: 'Druid - Moon', pcLevel: 7,
//         pcBackstory: 'Lots of words here',
//         pcAllies: 'Friendly Person', pcGoals: 'Do things, and stuff', pcExtras: 'Random stuff here' },
//     { pcId: 2, pcName: 'Bender Rodriguez', pcImg: 'bender.png', pcRace: 'Warforged', pcClass: 'Artificer - Armorer', pcLevel: 7,
//         pcBackstory: 'Lots of words here',
//         pcAllies: 'Friendly Person', pcGoals: 'Do things, and stuff', pcExtras: 'Random stuff here' },
//     { pcId: 3, pcName: 'Ahsoka Tano', pcImg: 'ahsoka.png', pcRace: 'Hobgoblin', pcClass: 'Fighter - Psi Warrior', pcLevel: 7,
//         pcBackstory: 'Lots of words here',
//         pcAllies: 'Friendly Person', pcGoals: 'Do things, and stuff', pcExtras: 'Random stuff here' },
// ]

// const SESSION_DATA = [
//     { sesId: 0, sesNumber: 0, sesDate: '2024-01-01', sesPartyLevel: 0, sesNotes: 'Session 0 notes here' },
//     { sesId: 1, sesNumber: 1, sesDate: '2024-01-08', sesPartyLevel: 1, sesNotes: 'Session 1 notes here' },
//     { sesId: 2, sesNumber: 2, sesDate: '2024-01-15', sesPartyLevel: 2, sesNotes: 'Session 2 notes here' },
//     { sesId: 3, sesNumber: 3, sesDate: '2024-01-22', sesPartyLevel: 2, sesNotes: 'Session 3 notes here' },
//     { sesId: 4, sesNumber: 4, sesDate: '2024-01-29', sesPartyLevel: 3, sesNotes: 'Session 4 notes here' }
// ]
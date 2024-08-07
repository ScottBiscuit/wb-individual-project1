import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import { User, Character, SessionNote, DMNote, Campaign} from './src/model.js'

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

app.get('/api/party', loginRequired, async (req, res) => {
    const allParty = await Character.findAll({order: [['pcName']]})
    res.json(allParty);
});

app.get('/api/party/:pcId', loginRequired, async (req, res) => {
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
 
    const editPC = await Character.findOne({ where: { pcId: +pcId}});
    if (editPC.pcId !== +pcId) {
        res.status(404).json({ error: `Item with ID ${pcId} not found!`});
    } else {

            // Only update the values that are provided in req.body
            editPC.pcImg = pcImg || editPC.pcImg,
            editPC.pcName = pcName || editPC.pcName,
            editPC.pcRace = pcRace || editPC.pcRace,
            editPC.pcClass = pcClass || editPC.pcClass,
            editPC.pcLevel = +(pcLevel) || editPC.pcLevel,
            editPC.pcBackstory = pcBackstory || editPC.pcBackstory,
            editPC.pcAllies = pcAllies || editPC.pcAllies,
            editPC.pcGoals = pcGoals || editPC.pcGoals,
            editPC.pcExtras = pcExtras || editPC.pcExtras,
            await editPC.save()
        res.json(editPC);
    }
});

app.delete('/api/party/:pcId/delete', loginRequired, async (req, res) => {
    const { pcId } = req.params;
    
    const deletePC = await Character.findOne({ where: { pcId: +pcId}});
    if (deletePC.pcId !== +pcId) {
        res.status(404).json({ error: `Item with ID ${pcId} not found!`});
    } else {
        await deletePC.destroy()
        res.json(deletePC);
    }
});

app.get('/api/sessionNotes', loginRequired, async (req, res) => {
    const allNotes = await SessionNote.findAll({order: [['sesNumber', 'DESC']]})
    res.json(allNotes);
});

app.get('/api/sessionNotes/:sesId', loginRequired, async (req, res) => {
    const { sesId } = req.params;
    const findSession = await SessionNote.findByPk(sesId);
    res.json(findSession);
  });

  app.post('/api/sessionNotes', loginRequired, async (req, res) => {
    const { sesId, sesNumber, sesDate, sesPartyLvl, sesNotes } = req.body;
    
    const newSes = await SessionNote.create({
        // if no value is provided in req.body, use default values
        sesId: sesId,
        sesNumber: sesNumber || '',
        sesDate: sesDate,
        sesPartyLvl: +(sesPartyLvl) || 0,
        sesNotes: sesNotes || '',

    });
    res.json(newSes);
});

app.put('/api/sessionNotes/:sesId', loginRequired, async (req, res) => {
    const { sesId } = req.params;
    const { sesNumber, sesDate, sesPartyLvl, sesNotes } = req.body;
 
    const editSes = await SessionNote.findOne({ where: { sesId: +sesId}});
    if (editSes.sesId !== +sesId) {
        res.status(404).json({ error: `Session Notes with ID ${sesId} not found!`});
    } else {

            // Only update the values that are provided in req.body
            editSes.sesNumber = sesNumber || editSes.sesNumber,
            editSes.sesDate = sesDate || editSes.sesDate,
            editSes.sesPartyLvl = sesPartyLvl || editSes.sesPartyLvl,
            editSes.sesNotes = sesNotes || editSes.sesNotes,
            
            await editSes.save()
        res.json(editSes);
    }
});

app.delete('/api/sessionNotes/:sesId/delete', loginRequired, async (req, res) => {
    const { sesId } = req.params;
    
    const deleteSes = await SessionNote.findOne({ where: { sesId: +sesId}});
    if (deleteSes.sesId !== +sesId) {
        res.status(404).json({ error: `Session Notes with ID ${sesId} not found!`});
    } else {
        await deleteSes.destroy()
        res.json(deleteSes);
    }
});

app.get('/api/dmNotes', loginRequired, async (req, res) => {
    const allNotes = await DMNote.findAll({order: [['dmNoteId', 'DESC']]})
    res.json(allNotes);
});

app.post('/api/dmNotes', loginRequired, async (req, res) => {
    const { dmNoteId, dmNoteIdeas } = req.body;
    
    const newDMNote = await DMNote.create({
        // if no value is provided in req.body, use default values
        dmNoteId: dmNoteId,
        dmNoteIdeas: dmNoteIdeas || '',
    });
    res.json(newDMNote);
});

app.put('/api/dmNotes/:dmNoteId', loginRequired, async (req, res) => {
    const { dmNoteId } = req.params;
    const { dmNoteIdeas } = req.body;
 
    const editDMNote = await DMNote.findOne({ where: { dmNoteId: +dmNoteId}});
    if (editDMNote.dmNoteId !== +dmNoteId) {
        res.status(404).json({ error: `Session Notes with ID ${dmNoteId} not found!`});
    } else {
            // Only update the values that are provided in req.body
            editDMNote.dmNoteIdeas = dmNoteIdeas || editDMNote.dmNoteIdeas,

            await editDMNote.save()
        res.json(editDMNote);
    }
});

app.delete('/api/dmNotes/:dmNoteId/delete', loginRequired, async (req, res) => {
    const { dmNoteId } = req.params;
    
    const deleteDMNote = await DMNote.findOne({ where: { dmNoteId: +dmNoteId}});
    if (deleteDMNote.dmNoteId !== +dmNoteId) {
        res.status(404).json({ error: `DM Notes with ID ${dmNoteId} not found!`});
    } else {
        await deleteDMNote.destroy()
        res.json(deleteDMNote);
    }
});

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));

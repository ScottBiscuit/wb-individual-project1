import { User, Character, SessionNote, Campaign, db } from '../src/model.js';

console.log('Synching database...')
await db.sync({ force: true })

console.log('Seeding database...')

Campaign.create()

const usersToCreate = [];
for (let i = 0; i < 5; i++){
    const email = `user${i}@test.com`
    usersToCreate.push(User.create({email, password: 'test', userRole: 'player'}))
}

const charactersToCreate = [];
for (let i = 0; i < 5; i++){
    const pcName = `character${i}`
    charactersToCreate.push(Character.create({pcName, pcRace: 'human', pcClass: 'wizard', pcLevel: 1, pcImg: './images/img_default.jpg', pcBackstory: `The backstory of ${pcName}`, pcAllies: `Possible allies of ${pcName}`, pcGoals: `Goals of ${pcName}`, pcExtras: `Random extra facts involving ${pcName}` }))
}

const sessionNotesToCreate = [];
for (let i = 0; i < 5; i++){
    const sesNumber = `${i}`
    sessionNotesToCreate.push(SessionNote.create({sesNumber, sesPartyLvl: 1, sesDate: '2024-01-01', sesNotes: 'Big long string of stuff blah blah blah' }))
}

// await db.close()
console.log('Finished seeding database!')
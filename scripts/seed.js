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

// const sessionNotesToCreate = [];
// for (let i = 0; i < 5; i++){
//     const sesNumber = `${i}`
//     sessionNotesToCreate.push(SessionNote.create({sesNumber, sesPartyLvl: 1, sesDate: '2024-01-01', sesNotes: 'Big long string of stuff blah blah blah' }))
// }


    SessionNote.create({ sesId: 0, sesNumber: 0, sesDate: '2024-01-01', sesPartyLvl: 1, sesNotes: 'Session Zero! We covered all of the expectations of players and DM for the upcoming campaign. A brief intro was given to the players as to the general world that the characters will be starting in along with information about the starting area and possible reasons that they would all meet to begin an adventure. We talked about all of the Races/Classes/Subclasses and possible homebrew creations that could be used to create a character.  All the players were given a brief outline of how they could prepare some backstory for their characters.  All players rolled dice for stats and picked their basic character info. Homework before next session is to come up with some possible allies or enemies in their backstory and some fun info that could help or hinder their futures.' })
    SessionNote.create({ sesId: 1, sesNumber: 1, sesDate: '2024-01-08', sesPartyLvl: 1, sesNotes: 'Session 1 notes here' })
    SessionNote.create({ sesId: 2, sesNumber: 2, sesDate: '2024-01-15', sesPartyLvl: 2, sesNotes: 'Session 2 notes here' })
    SessionNote.create({ sesId: 3, sesNumber: 3, sesDate: '2024-01-22', sesPartyLvl: 2, sesNotes: 'Session 3 notes here' })
    SessionNote.create({ sesId: 4, sesNumber: 4, sesDate: '2024-01-29', sesPartyLvl: 3, sesNotes: 'Session 4 notes here' })
   
// await db.close()
console.log('Finished seeding database!')
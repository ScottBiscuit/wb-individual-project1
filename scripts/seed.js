import { User, Character, SessionNote, Campaign, db } from '../src/model.js';

console.log('Synching database...')
await db.sync({ force: true })

console.log('Seeding database...')

Campaign.create()

const usersToCreate = [
    { email: 'gm@test.com', password: 'test', userName: 'Scott', userRole: 'gm' },
    { email: 'player@test.com', password: 'test', userName: 'Player', userRole: 'player' },
];
usersToCreate.forEach((user) => User.create(user))

const charactersToCreate = [
    { pcName: 'Cawlin', pcImg: './images/cawlin.png', pcRace: 'Kenku', pcClass: 'Warlock - Hexblade', pcLevel: 7,
        pcBackstory: 'Grew up on the street. Taken in by the local thieves guild.',
        pcAllies: 'Drow named Vect', pcGoals: 'Steal shiney things and protect the fam', pcExtras: 'Warlock Patron is the Matron of Ravens, or as he calls her, Mama bird' },
    { pcName: 'Beast Boy', pcImg: './images/beastBoy.png', pcRace: 'Goblin', pcClass: 'Druid - Moon', pcLevel: 7,
        pcBackstory: 'Parents were scientists developing reverse evolution. When Garfield, now known as Beast Boy, got sick with a rare illness, his parents conducted experiments on him when ended up giving him his animal shape powers.',
        pcAllies: 'Raven', pcGoals: 'Do cool green animal stuff and save the world', pcExtras: 'Wild shapes into various animals but always in a shade of green.' },
    { pcName: 'Bender Rodriguez', pcImg: './images/bender.png', pcRace: 'Warforged', pcClass: 'Artificer - Armorer', pcLevel: 7,
        pcBackstory: 'Created to bend metal in a factory. He was built without a backup unit, which is meant to help him back up data so that if his body were destroyed he could upload his data into another body if he wants. Without this unit, Bender was recognized as defective and in order not to tarnish Moms Company he would need to be destroyed. He escapes...our adventure begins.',
        pcAllies: 'Fry, Leela, Zoidberg', pcGoals: 'Whatever he feels like doing that day.', pcExtras: 'Has a Bag of Holding behind the hatch on the front of his body that he stores all kinds of random things in.' },
    { pcName: 'Ahsoka Tano', pcImg: './images/ahsoka.jpeg', pcRace: 'Hobgoblin', pcClass: 'Fighter - Psi Warrior', pcLevel: 7,
        pcBackstory: 'Was an apprentice in an order of Knights that protect the worlds. She was wrongly accused of something and thrown out. Even though the truth was later revealed to be someone elses doing, Ahsoka did not return as the trust was lost. She is following her own path now.',
        pcAllies: 'Captain Rex', pcGoals: 'Assist the Rebels in there Galaxy', pcExtras: 'Has awesome white lightsabers' },
];
charactersToCreate.forEach((character) => Character.create(character))

const sessionNotesToCreate = [
    { sesNumber: 1, sesDate: '2024-01-01', sesPartyLvl: 1, sesNotes: 'Usually referred to as Session Zero! We covered all of the expectations of players and DM for the upcoming campaign. A brief intro was given to the players as to the general world that the characters will be starting in along with information about the starting area and possible reasons that they would all meet to begin an adventure. We talked about all of the Races/Classes/Subclasses and possible homebrew creations that could be used to create a character.  All the players were given a brief outline of how they could prepare some backstory for their characters.  All players rolled dice for stats and picked their basic character info. Homework before next session is to come up with some possible allies or enemies in their backstory and some fun info that could help or hinder their futures.' },
    { sesNumber: 2, sesDate: '2024-01-08', sesPartyLvl: 1, sesNotes: 'Stuff happens!' },
    { sesNumber: 3, sesDate: '2024-01-15', sesPartyLvl: 2, sesNotes: 'Our party rescued a Gnome from a group of Goblins. The epic battle, followed by the return of Gilbert the Gnome back to town was enough to level them all up to 2!' },
    { sesNumber: 4, sesDate: '2024-01-22', sesPartyLvl: 2, sesNotes: 'Did we actually meet this week?' },
    { sesNumber: 5, sesDate: '2024-01-29', sesPartyLvl: 3, sesNotes: 'Session 4 notes here' }
];
sessionNotesToCreate.forEach((note) => SessionNote.create(note))
   
// await db.close()
console.log('Finished seeding database!')
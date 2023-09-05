import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
export const query1 = await Human.findByPk(2);

// Get the first animal whose species is "fish"
export const query2 = Animal.findOne({
    where: { species: 'fish' },
  });

// Get all animals belonging to the human with primary key 5
export const query3 = Animal.findAll({
    where: {
        humanId: 5
    }
});

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = Animal.findAll({
    where: {
        birthYear: {
            [Op.gt]:2015
        }
    }
});

// Get all the humans with first names that start with "J"
export const query5 = Human.findAll({
    where: {
        fname: {
            [Op.like]: 'J%'
        }
    }
});

// Get all the animals who don't have a birth year
export const query6 = Animal.findAll({
    where: {
        birthYear: {
            [Op.eq]: null
        }
    }
});

// export const query6 = Animal.findAll({
//     where: {
//          birthYear: null
//     }
// });

// Get all the animals with species "fish" OR "rabbit"
export const query7 = Animal.findAll({
    where: {
            species: {
                [Op.or]: [
                    'fish', 'rabbit'
                ]
        }
    }
});

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = Human.findAll({
    where: {
        email: {
            [Op.notLike]: '%gmail%'
        }
    }
});

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {
    const daPeeps = await Human.findAll()

    for(let i = 0; i < daPeeps.length; i++){
        console.log(daPeeps[i].getFullName())

        let pets = await daPeeps[i].getAnimals()

        for(let j = 0; j < pets.length; j++){
            console.log(`- ${pets[j].name}, ${pets[j].species}`)
        }
    }

}

// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {
    let humans = new Set()

    const pets = await Animal.findAll({
        where: {
            species: species
        }
    })


    for(let pet of pets){
        let asdf = await pet.getHuman()
        humans.add( asdf.getFullName())
    }

    return humans

}

const findTheOldest = function(people) {
    const peopleSortedByAge = people.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        const personAAge = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth;
        const personBAge = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth;
        console.log({personAAge})
        console.log({personBAge})
        return personAAge > personBAge ? 1 : -1;
    })
    return peopleSortedByAge.pop();
};

// Do not edit below this line
module.exports = findTheOldest;

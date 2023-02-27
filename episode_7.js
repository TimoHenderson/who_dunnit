let murderer = 'Professor Plum';

const changeMurderer = function () {
    murderer = 'Mr. Green';

    const plotTwist = function () {
        let murderer = 'Colonel Mustard';

        const unexpectedOutcome = function () {
            murderer = 'Miss Scarlet';
        }

        unexpectedOutcome();
    }

    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer is Mr. Green  
//- the plotTwist defines it's own block scoped murderer variable 
// so doesn't affect the one outside
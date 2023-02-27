let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The murderer is Professor Plum
// The if statement assigns a new block scoped murderer variable to Mrs. Peacock
// and doesn't affect the other murderer variable


let murderer = 'Professor Plum';

const declareMurderer = function () {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// First verdict Mrs. Peacock
// Second verdict is Prof. Plum  because Mrs. Peacock is in block scope 
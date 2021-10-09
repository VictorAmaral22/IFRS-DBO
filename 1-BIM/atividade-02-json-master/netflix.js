// netflix.js // 0.5 pts
console.log('netflix.js');

/* eslint max-len: ["error", { "ignoreStrings": true }]*/
const Netflix = { // deve sublinhar como erro, altere para const para consertar
    series: [
        {
            title: 'Daredevil',
            creators: 'Andrew Brion Hogan Goddard',
            agerating: '18',
            seasons: [
                { // SE 1
                    year: '2015',
                    descrip: 'Blinded as a young boy, Matt Murdock fights injustice by day as a lawyer and by night as the superhero Daredevil in Hell\'s Kitchen, New York City.',
                    episodes: [
                        { // EP 1
                            title: 'Into the Ring',
                            synopsis: 'Murdock\'s vigilante crime fighting and his new law practice find equally dangerous challenges in a murder case tied to a corporate crime syndicate.',
                            duration: '54'
                        },
                        { // EP 2
                            title: 'Cut Man',
                            synopsis: 'Murdock makes a near fatal error while trying to save a kidnapped boy, and finds an unlikely ally when he needs saving himself.',
                            duration: '53'
                        }
                    ]
                },
                { // SE 2
                    year: '2016',
                    descrip: 'Dark forces are tearing Hell\'s Kitchen apart once again, but this time Daredevil may have to choose between the city and his friends.',
                    episodes: [
                        { // EP 1
                            title: 'Bang',
                            synopsis: 'In the void left by Fisk\'s removal, a new threat to Hell\'s Kitchen emerges. Murdock and Foggy take on a client with a questionable past',
                            duration: '49'
                        },
                        { // EP 2
                            title: 'Dogs to a Gunfight',
                            synopsis: 'As Murdock recovers from an attack, Foggy and Karen fight to protect their new client from both the law and the Kitchen\'s newest vigilante.',
                            duration: '51'
                        }
                    ]
                }
            ]
        }
    ]
};
// title of the first TV serie
console.log(Netflix['series'][0]['title']); // any title
// there is a first season with at least one episode, must print true
console.log(Netflix['series'][0]['seasons'][0]['episodes'].length > 0);
console.log(Netflix[
    'series'][0][
    'seasons'][0][
    'episodes'][0][
    'title'] !== undefined); // must be true
// Add more test cases which should cover
// the assessment specification:

// First level tests
console.log(Netflix[
    'series'][0][
    'title']); // Daredevil
console.log(Netflix[
    'series'][0][
    'creators']); // Andrew Brion Hogan Goddard
console.log(Netflix[
    'series'][0][
    'agerating']); // 18

// SEASON 1
console.log(Netflix[
    'series'][0][
    'seasons'][0][
    'year']); // 2015
console.log(Netflix[
    'series'][0][
    'seasons'][0][
    'descrip']); // Blinded as a young boy, Matt Murdock fights injustice by day as a lawyer and by night as the superhero Daredevil in Hell's Kitchen, New York City.
// EP 1
console.log(Netflix[
    'series'][0][
    'seasons'][0][
    'episodes'][0]['title']); // Into the Ring
console.log(Netflix[
    'series'][0][
    'seasons'][0][
    'episodes'][0]['synopsis']); // Murdock's vigilante crime fighting and his new law practice find equally dangerous challenges in a murder case tied to a corporate crime syndicate.
console.log(Netflix[
    'series'][0][
    'seasons'][0][
    'episodes'][0]['duration']); // 54
// EP 2
console.log(Netflix[
    'series'][0][
    'seasons'][0][
    'episodes'][1]['title']); // Cut Man
console.log(Netflix[
    'series'][0][
    'seasons'][0][
    'episodes'][1]['synopsis']); // Murdock makes a near fatal error while trying to save a kidnapped boy, and finds an unlikely ally when he needs saving himself.
console.log(Netflix[
    'series'][0][
    'seasons'][0][
    'episodes'][1]['duration']); // 53

// SEASON 2
// EP 1
console.log(Netflix[
    'series'][0][
    'seasons'][1][
    'year']); // 2016
console.log(Netflix[
    'series'][0][
    'seasons'][1][
    'descrip']); // Dark forces are tearing Hell's Kitchen apart once again, but this time Daredevil may have to choose between the city and his friends.
console.log(Netflix[
    'series'][0][
    'seasons'][1][
    'episodes'][0]['title']); // Bang
console.log(Netflix[
    'series'][0][
    'seasons'][1][
    'episodes'][0]['synopsis']); // In the void left by Fisk's removal, a new threat to Hell's Kitchen emerges. Murdock and Foggy take on a client with a questionable past
console.log(Netflix[
    'series'][0][
    'seasons'][1][
    'episodes'][0]['duration']); // 49
// EP 2
console.log(Netflix[
    'series'][0][
    'seasons'][1][
    'episodes'][1]['title']); // Dogs to a Gunsfight
console.log(Netflix[
    'series'][0][
    'seasons'][1][
    'episodes'][1]['synopsis']); // As Murdock recovers from an attack, Foggy and Karen fight to protect their new client from both the law and the Kitchen's newest vigilante.
console.log(Netflix[
    'series'][0][
    'seasons'][1][
    'episodes'][1]['duration']); // 51

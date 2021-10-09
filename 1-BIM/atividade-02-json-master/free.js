// free.js (0.5 pts)
console.log('free.js');

/* eslint max-len: ["error", { "ignoreStrings": true }]*/
const Inventory = {
    weapons: [
        {
            class: 'Heavy',
            items: [
                {
                    name: 'Long-Sword',
                    damage: '100',
                    state: 'Good'
                },
                {
                    name: 'Northen Axe',
                    damage: '125',
                    state: 'Almost falling apart',
                    extra: {
                        runes: {
                            type: 'fire rune',
                            effect: '10% chance to cause enemy to burn'
                        }
                    }
                }
            ]
        },
        {
            class: 'Ligth',
            items: [
                {
                    name: 'Dagger',
                    damage: '55',
                    state: 'Good'
                }
            ]
        }
    ],
    health: [
        {
            type: 'food',
            items: [
                {
                    name: 'Bread',
                    total: '2'
                },
                {
                    name: 'Chicken meat',
                    total: '4'
                }
            ]
        },
        {
            type: 'potions',
            items: [
                {
                    name: 'Health potion',
                    total: '1',
                    effects: [
                        'Regenerates 10% of Health Pack',
                        'It\'s effect remains for 60s'
                    ]
                },
                {
                    name: 'Stamina enhancer',
                    total: '4',
                    effects: [
                        'Maintains stamina on MAX',
                        'It\'s effect remains for 60s'
                    ]
                }
            ]
        }
    ]
};

console.log(Inventory['weapons'][0]['class']); // Heavy
console.log(Inventory['weapons'][0]['items'][1]); // { name: 'Northen Axe', damage: '125', state: 'Almost falling apart', extra: { runes: { type: 'fire rune', effect: '10% chance to cause enemy to burn' } } }
console.log(Inventory['health'][1]['items'][0]['effects'][1]); // It' effect remains for 60s

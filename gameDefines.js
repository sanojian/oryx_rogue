window.GAME = {
	EQUIPMENT: {
		shirt: {
			classes: ['fighter'],
			defense: [3, 6, 12, 24, 48],
			offense: [0, 0, 0, 0, 0],
			slot: 0,
			z: 110
		},
		pants: {
			classes: ['fighter'],
			defense: [1, 2, 4, 8, 16],
			offense: [0, 0, 0, 0, 0],
			slot: 1,
			z: 110
		},
		helm: {
			classes: ['fighter'],
			defense: [1, 2, 4, 8, 16],
			offense: [0, 0, 0, 0, 0],
			slot: 2,
			z: 110
		},
		boots: {
			classes: ['fighter'],
			defense: [1, 2, 4, 8, 16],
			offense: [0, 0, 0, 0, 0],
			slot: 3,
			z: 110
		},
		shield: {
			classes: ['fighter'],
			defense: [4, 8, 16, 32, 64],
			offense: [0, 0, 0, 0, 0],
			slot: 4,
			z: 110
		},
		sword: {
			classes: ['fighter'],
			defense: [0, 0, 0, 0, 0],
			offense: [6, 12, 18, 30, 48],
			slot: 5,
			z: 90
		},
		robe: {
			classes: ['wizard'],
			defense: [2, 3, 5, 8, 12],
			offense: [0, 0, 0, 0, 0],
			slot: 0,
			z: 110
		},
		hat: {
			classes: ['wizard'],
			defense: [1, 2, 3, 4, 5],
			offense: [0, 0, 0, 0, 0],
			slot: 1,
			z: 110
		},
		staff: {
			classes: ['wizard'],
			defense: [0, 0, 0, 0, 0],
			offense: [1, 2, 3, 5, 8],
			slot: 2,
			z: 110
		}
	},
	SPELLS: {
		missle: {
			mana: 4,
			damage: 4
		},
		fireball: {
			mana: 8,
			damage: 3
		}
	},
	CHARLEVELS: {
		fighter: [
			{ health: 10, mana: 0 },
			{ health: 12, mana: 0 },
			{ health: 14, mana: 0 },
			{ health: 26, mana: 0 },
			{ health: 36, mana: 0 }
		],
		wizard: [
			{ health: 8, mana: 7 },
			{ health: 9, mana: 12 },
			{ health: 12, mana: 18 },
			{ health: 15, mana: 24 },
			{ health: 19, mana: 30 }
		]
	}



}
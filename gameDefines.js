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
		Missle: {
			mana: 4,
			damage: 5,
			speed: 5,
			range: 200,
			sound: 'missle'
		},
		Fireball: {
			mana: 8,
			damage: 3,
			speed: 4,
			range: 200,
			sound: 'fireball'
		},
		Arrow: {
			mana: 4,
			damage: 2,
			speed: 1,
			range: 120,
			sound: 'arrow'
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
	},
	DUNGEONLEVELS: [
		{
			name: 'The Entryway',
			spawnRate: 0.05,
			mobs: [ 
				{ sprite: 'rat_king', 	prob: 1,	type: 'fighter', 	level: 2, 	health: 22,	 	mana: 0, 	offense: 12, 	defense: 12		},
				{ sprite: 'rat', 		prob: 5,	type: 'fighter', 	level: 1, 	health: 9, 	mana: 0, 	offense: 6, 	defense: 6 		},
				{ sprite: 'bat', 		prob: 4,	type: 'fighter', 	level: 1, 	health: 9, 	mana: 0, 	offense: 6, 	defense: 6 		}
			]
		},
		{
			name: 'The Orc Kingdom',
			spawnRate: 0.05,
			mobs: [ 
				{ sprite: 'orc_chief', 	prob: 1,	type: 'fighter', 	level: 3, 	health: 26,	 	mana: 0, 	offense: 22, 	defense: 18		},
				{ sprite: 'orc', 		prob: 6,	type: 'fighter', 	level: 2, 	health: 14, 	mana: 0, 	offense: 12, 	defense: 12 	},
				{ sprite: 'orc_archer', prob: 3,	type: 'caster',		level: 2, 	health: 11, 	mana: 4, 	offense: 2, 	defense: 8,		spell: 'Arrow' }
			]
		},
		{
			name: 'The Skeleton Maze',
			spawnRate: 0.05,
			mobs: [ 
				{ sprite: 'skeleton_warrior', 	prob: 1,	type: 'fighter', 	level: 3, 	health: 26,	 	mana: 0, 	offense: 22, 	defense: 18		},
				{ sprite: 'skeleton_warrior', 	prob: 1,	type: 'fighter', 	level: 3, 	health: 26,	 	mana: 0, 	offense: 22, 	defense: 18		},
				{ sprite: 'skeleton_mage', 		prob: 7,	type: 'caster', 	level: 2, 	health: 14, 	mana: 4, 	offense: 5, 	defense: 12,	spell: 'Missle'	},
				{ sprite: 'skeleton_necro', 	prob: 1,	type: 'caster',		level: 2, 	health: 11, 	mana: 8, 	offense: 6, 	defense: 8,		spell: 'Fireball' }
			]
		},
	]



}
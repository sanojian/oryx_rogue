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
			offense: [0, 2, 4, 6, 8],
			slot: 0,
			z: 110
		},
		hat: {
			classes: ['wizard'],
			defense: [1, 2, 3, 4, 5],
			offense: [0, 1, 2, 3, 4],
			slot: 1,
			z: 110
		},
		staff: {
			classes: ['wizard'],
			defense: [0, 0, 0, 0, 0],
			offense: [1, 4, 8, 14, 18],
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
		Sleep: {
			mana: 17,
			damage: 0,
			speed: 8,
			range: 160,
			aoe: 2,
			sound: 'sleep'
		},
		Lightening: {
			mana: 20,
			damage: 12,
			speed: 8,
			range: 160,
			sound: 'lightening'
		},
		Arrow: {
			mana: 4,
			damage: 2,
			speed: 1,
			range: 180,
			sound: 'arrow'
		}
	},
	CHARLEVELS: {
		fighter: [
			{ health: 10, mana: 0 },
			{ health: 12, mana: 0 },
			{ health: 14, mana: 0 },
			{ health: 26, mana: 0 },
			{ health: 36, mana: 0 },
			{ health: 40, mana: 0 },
			{ health: 45, mana: 0 },
			{ health: 50, mana: 0 },
			{ health: 55, mana: 0 },
			{ health: 60, mana: 0 }
		],
		wizard: [
			{ health: 8, mana: 7 },
			{ health: 9, mana: 12 },
			{ health: 12, mana: 16 },
			{ health: 15, mana: 19 },
			{ health: 19, mana: 25 },
			{ health: 22, mana: 28 },
			{ health: 25, mana: 32 },
			{ health: 28, mana: 36 },
			{ health: 31, mana: 40 },
			{ health: 35, mana: 43 }
		]
	},
	DUNGEONLEVELS: [
		{
			name: 'The Entryway',
			spawnRate: 0.05,
			mobs: [ 
				{ sprite: 'rat_king', 	prob: 1,	type: 'fighter', 	level: 2, 	health: 22,	 	mana: 0, 	offense: 12, 	defense: 12		},
				{ sprite: 'rat', 		prob: 5,	type: 'fighter', 	level: 1, 	health: 9, 	mana: 0, 	offense: 4, 	defense: 4 		},
				{ sprite: 'bat', 		prob: 4,	type: 'fighter', 	level: 1, 	health: 9, 	mana: 0, 	offense: 4, 	defense: 4		}
			],
			graphics: {
				wall: 'wall_brick',
				ceiling: 'ceiling_brick',
				floor: 'floor_cracks'
			},
			song: 'DST-TheHauntedChapel',
			sceneInfo: {
				pic1: 'scene_entrance1',
				pic2: 'scene_graveyard',
				pic3: 'scene_entrance2',
				dialog: [
					{ speaker: 'fighter', text: 'We found it!' },
					{ speaker: 'wizard', text: 'I am not so sure about this.' }
				]
			}
		},
		{
			name: 'The Skeleton Maze',
			spawnRate: 0.05,
			mobs: [ 
				{ sprite: 'skeleton_magic',		prob: 1,	type: 'caster', 	level: 3, 	health: 24, 	mana: 4, 	offense: 2, 	defense: 12,	spell: 'Missle'	},
				{ sprite: 'skeleton', 			prob: 6,	type: 'fighter', 	level: 2, 	health: 14,	 	mana: 0, 	offense: 8, 	defense: 8		},
				{ sprite: 'skeleton_archer', 	prob: 3,	type: 'caster', 	level: 2, 	health: 11,	 	mana: 4, 	offense: 2, 	defense: 8,		spell: 'Arrow' }
			],
			graphics: {
				wall: 'wall_mud',
				ceiling: 'ceiling_mud',
				floor: 'floor_cracks'
			},
			song: 'DST-ClockTower',
			sceneInfo: {
				pic1: 'scene_catacombs1',
				pic2: 'scene_catacombs2',
				pic3: 'scene_catacombs3',
				dialog: [
					{ speaker: 'wizard', text: 'Undead here.' },
					{ speaker: 'wizard', text: 'We need a plan.' },
					{ speaker: 'fighter', text: 'Let\'s bash em!' },
					{ speaker: 'wizard', text: 'We should think this through.' },
					{ speaker: 'fighter', text: 'And then bash em!' }
				]
			}
		},
		{
			name: 'The Orc Kingdom',
			spawnRate: 0.05,
			mobs: [ 
				{ sprite: 'orc_chief', 	prob: 1,	type: 'fighter', 	level: 4, 	health: 26,	 	mana: 0, 	offense: 22, 	defense: 18		},
				{ sprite: 'orc', 		prob: 6,	type: 'fighter', 	level: 3, 	health: 14, 	mana: 0, 	offense: 22, 	defense: 18 	},
				{ sprite: 'orc_archer', prob: 3,	type: 'caster',		level: 3, 	health: 11, 	mana: 4, 	offense: 7, 	defense: 10,	spell: 'Arrow' }
			],
			graphics: {
				wall: 'wall_brick',
				ceiling: 'ceiling_brick',
				floor: 'floor_cracks'
			},
			song: 'DST-Azum',
			sceneInfo: {
				pic1: 'scene_castle1',
				pic2: 'scene_castle2',
				pic3: 'scene_castle3',
				dialog: [
					{ speaker: 'wizard', text: 'I think I smell orcs.' },
					{ speaker: 'fighter', text: '...' },
					{ speaker: 'fighter', text: 'err...' },
					{ speaker: 'fighter', text: 'Sorry that was me.' },
					{ speaker: 'wizard', text: '*sigh*' }
				]
			}
		},
		{
			name: 'Revenge of the Arch Mage',
			spawnRate: 0.05,
			mobs: [ 
				{ sprite: 'skeleton_boss', 		prob: 1,	type: 'fighter', 	level: 5, 	health: 32,	 	mana: 0, 	offense: 32, 	defense: 32		},
				{ sprite: 'skeleton_warrior', 	prob: 4,	type: 'fighter', 	level: 4, 	health: 26,	 	mana: 0, 	offense: 26, 	defense: 18		},
				{ sprite: 'skeleton_mage', 		prob: 3,	type: 'caster', 	level: 4, 	health: 14, 	mana: 4, 	offense: 9, 	defense: 12,	spell: 'Missle'	},
				{ sprite: 'skeleton_necro', 	prob: 2,	type: 'caster',		level: 4, 	health: 11, 	mana: 12, 	offense: 9, 	defense: 8,		spell: 'Fireball' }
			],
			graphics: {
				wall: 'wall_mud',
				ceiling: 'ceiling_mud',
				floor: 'floor_cracks'
			},
			song: 'DST-WaterTemple-I',
			sceneInfo: {
				pic1: 'scene_catacombs1',
				pic2: 'scene_catacombs3',
				pic3: 'scene_catacombs2',
				dialog: [
					{ speaker: 'fighter', text: 'Skeletons again?' },
					{ speaker: 'wizard', text: 'They look angry this time.' }
				]
			}
		},
		{
			name: 'Realm of the Necromancer',
			spawnRate: 0.05,
			mobs: [ 
				{ sprite: 'necromancer',	prob: 1,	type: 'caster', 	level: 5, 	health: 26,	 	mana: 24, 	offense: 22, 	defense: 18,	spell: 'Fireball'	},
				{ sprite: 'death_knight', 	prob: 4,	type: 'fighter', 	level: 5, 	health: 26,	 	mana: 0, 	offense: 22, 	defense: 18		},
				{ sprite: 'imp', 			prob: 2,	type: 'caster', 	level: 5, 	health: 14, 	mana: 18, 	offense: 17, 	defense: 12,	spell: 'Fireball'	},
				{ sprite: 'death_mage', 	prob: 3,	type: 'caster', 	level: 5, 	health: 14, 	mana: 30, 	offense: 18, 	defense: 12,	spell: 'Lightening'	}
			],
			graphics: {
				wall: 'wall_brick',
				ceiling: 'ceiling_brick',
				floor: 'floor_cracks'
			},
			song: 'DST-Alters',
			sceneInfo: {
				pic1: 'scene_temple1',
				pic2: 'scene_temple2',
				pic3: 'scene_temple3',
				dialog: [
					{ speaker: 'wizard', text: 'This looks dangerous.' },
					{ speaker: 'fighter', text: 'For once I agree.' },
					{ speaker: 'wizard', text: 'If I don\'t make it' },
					{ speaker: 'wizard', text: 'you can have my robe' },
					{ speaker: 'wizard', text: 'and wizard hat.' },
					{ speaker: 'fighter', text: 'Its a deal!' }
				]
			}
		},
		{
			name: 'You Saved the Kingdom!',
			song: 'DST-TheHauntedChapel',
			sceneInfo: {
				pic1: 'scene_landmark1',
				dialog: [
					{ speaker: 'wizard', text: 'We saved the Kingdom!' },
					{ speaker: 'fighter', text: '...' },
					{ speaker: 'fighter', text: 'Which Kingdom?' },
					{ speaker: 'wizard', text: 'You know, your leige?' },
					{ speaker: 'wizard', text: 'Your royal highness, and court?' },
					{ speaker: 'fighter', text: '...' },
					{ speaker: 'wizard', text: 'Well good job anyway.' },
					{ speaker: 'fighter', text: 'Thanks!  You too.' }
				]
			}
		}
	]



}
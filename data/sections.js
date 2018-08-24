export default [
	{
		id: 0,
		name: 'my schedule & biddings',
		categories: [
			{
				parentId: 0,
				id: 0,
				name: 'my schedule',
				pages: []
			},
			{
				parentId: 0,
				id: 1,
				name: 'my biddings',
				pages: []
			}
		],
		icon: 'fas fa-calendar-alt'
	},
	{
		id: 1,
		name: 'safety',
		categories: [
			{
				parentId: 1,
				id: 0,
				name: 'reporting',
				pages: [
					{
						grandparentId: 1,
						parentId: 0,
						id: 0,
						name: '1-21 injury reporting'
					},
					{
						grandparentId: 1,
						parentId: 0,
						id: 1,
						name: 'ASAP reporting'
					},
					{
						grandparentId: 1,
						parentId: 0,
						id: 2,
						name: 'general ASAP information'
					},
					{
						grandparentId: 1,
						parentId: 0,
						id: 3,
						name: 'flight attendant incident report'
					}
				]
			},
			{
				parentId: 1,
				id: 1,
				name: 'agriculture and customs',
				pages: [
					{
						grandparentId: 1,
						parentId: 1,
						id: 0,
						name: 'meats'
					},
					{
						grandparentId: 1,
						parentId: 1,
						id: 1,
						name: 'fruits and vegetables'
					},
					{
						grandparentId: 1,
						parentId: 1,
						id: 2,
						name: 'alcohol'
					}
				]
			},
			{
				parentId: 1,
				id: 2,
				name: 'known crewmember',
				pages: []
			},
			{
				parentId: 1,
				id: 3,
				name: 'product safety data search',
				pages: []
			}
		],
		icon: 'fas fa-lock'
	},
	{ id: 2, name: 'training', categories: [], icon: 'fas fa-dumbbell' },
	{
		id: 3,
		name: 'administration',
		categories: [1, 2, 3, 4],
		icon: 'fas fa-user-tie'
	},
	{
		id: 4,
		name: 'catering & brand',
		categories: [1, 2, 3, 4],
		icon: 'fas fa-utensils'
	},
	{ id: 5, name: 'hotels', categories: [], icon: 'fas fa-hotel' },
	{ id: 6, name: 'my base', categories: [], icon: 'fas fa-home' },
	{ id: 7, name: 'recognition', categories: [], icon: 'fas fa-brain' },
	{
		id: 8,
		name: 'my leadership team',
		categories: [],
		icon: 'fas fa-users'
	}
]

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
		categories: [
			{
				parentId: 3,
				id: 0,
				name: 'OJI and leaves',
				pages: [
					{
						grandparentId: 3,
						parentId: 0,
						id: 0,
						name: '1-21 injury reporting'
					},
					{
						grandparentId: 3,
						parentId: 0,
						id: 1,
						name: 'ASAP reporting'
					},
					{
						grandparentId: 3,
						parentId: 0,
						id: 2,
						name: 'general ASAP information'
					},
					{
						grandparentId: 3,
						parentId: 0,
						id: 3,
						name: 'flight attendant incident report'
					}
				]
			},
			{
				parentId: 3,
				id: 1,
				name: 'Pay and Benefits',
				pages: [
					{
						grandparentId: 3,
						parentId: 1,
						id: 0,
						name: 'pay'
					},
					{
						grandparentId: 3,
						parentId: 1,
						id: 1,
						name: 'benefits'
					}
				]
			},
			{
				parentId: 3,
				id: 2,
				name: 'preformance',
				pages: [
					{
						grandparentId: 3,
						parentId: 2,
						id: 0,
						name: 'good'
					},
					{
						grandparentId: 3,
						parentId: 2,
						id: 1,
						name: 'bad'
					}
				]
			},
			{
				parentId: 3,
				id: 3,
				name: 'inflight resource directory',
				pages: []
			},
			{
				parentId: 3,
				id: 4,
				name: 'mobile & web',
				pages: [
					{
						grandparentId: 3,
						parentId: 4,
						id: 0,
						name: 'mobile'
					},
					{
						grandparentId: 3,
						parentId: 4,
						id: 1,
						name: 'web'
					}
				]
			},
			{
				parentId: 3,
				id: 5,
				name: 'AFA',
				pages: []
			}
		],
		icon: 'fas fa-user-tie'
	},
	{
		id: 4,
		name: 'catering & brand',
		categories: [
			{
				parentId: 4,
				id: 0,
				name: 'catering',
				pages: [
					{
						grandparentId: 4,
						parentId: 0,
						id: 0,
						name: 'food'
					},
					{
						grandparentId: 4,
						parentId: 0,
						id: 1,
						name: 'drink'
					},
					{
						grandparentId: 4,
						parentId: 0,
						id: 2,
						name: 'alcohol'
					}
				]
			},
			{
				parentId: 4,
				id: 1,
				name: 'brand',
				pages: [
					{
						grandparentId: 4,
						parentId: 1,
						id: 0,
						name: 'company colors'
					},
					{
						grandparentId: 4,
						parentId: 1,
						id: 1,
						name: 'uniforms'
					},
					{
						grandparentId: 4,
						parentId: 1,
						id: 2,
						name: 'vision'
					}
				]
			}
		],
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

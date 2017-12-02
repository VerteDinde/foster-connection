const data = [
  {
    name: 'New Avenues for Youth',
    shopUrl: 'http://newavenues.org/',
    description: 'New Avenues for Youth provides resources for young people leaving the foster care system.',
    latitude: 45.549731,
    longitude: -122.676024,
    street: '909 N Beech St.',
    city: 'Portland',
    state: 'OR',
    zip: '97227',
    country: 'USA',
    category: 'Resource'
  },
  {
    name: 'Project Lemonade',
    shopUrl: 'http://www.projectlemonadepdx.org',
    description: 'Project Lemonade provides foster youth with a back-to-school shopping experience and offers support to inspire self-esteem and promote success. Store is open annually in August, pre-registration required in July.',
    latitude: 45.531623,
    longitude: -122.654583,
    street: '1006 Lloyd Center',
    city: 'Portland',
    state: 'OR',
    zip: '97232',
    country: 'USA',
    category: 'Resource, Youth, Family'
  },
  {
    name: 'Bridge Meadows',
    shopUrl: 'https://www.bridgemeadows.org/',
    description: 'Bridge Meadows develops and sustains intergenerational neighborhoods for adoptive families of youth formerly in foster care that promote permanency, community and caring relationships while offering safety and meaningful purpose in the daily lives of older adults. Youth coming from foster care find loving adoptive parents, honorary grandparents and valued mentors.',
    latitude: 45.584409,
    longitude: -122.710917,
    street: '8502 N. Wayland Ave.',
    city: 'Portland',
    state: 'OR',
    zip: '97203',
    country: 'USA',
    category: 'Family, Housing'
  },
  {
    name: 'Bridge Meadows',
    shopUrl: 'http://www.bridgemeadowsbeavertonapts.com/',
    description: 'Bridge Meadows develops and sustains intergenerational neighborhoods for adoptive families of youth formerly in foster care that promote permanency, community and caring relationships while offering safety and meaningful purpose in the daily lives of older adults. Youth coming from foster care find loving adoptive parents, honorary grandparents and valued mentors.',
    latitude: 45.476578,
    longitude: -122.817166,
    street: '5995 SW Menlo Drive',
    city: 'Beaverton',
    state: 'OR',
    zip: '97005',
    country: 'USA',
    category: 'Family, Housing'
  },
  {
    name: 'Q Center',
    shopUrl: 'http://www.pdxqcenter.org/resources/',
    description: 'Q Center provides a safe space to support and celebrate LGBTQ diversity, equity, visibility and community building. Q Center is a 501c3 non-profit organization which offers multi-generational programs and services in four core areas: Arts & Culture; Education & Training; Health & Wellness and Advocacy. There are dozens of events and groups that meet here, some focused on specific topics (like coming out or gender identity) and others aimed at fun social interactions (like sing-along piano cabarets or craft nights). Entry to most of these is sliding-scale and run by dedicated volunteers, keeping Q Center truly community-driven and accessible. In addition to our programmatic offerings, our 5,000 sq/ft facility is also a safe and friendly place to spend an afternoon. With our monthly art exhibits, extensive library collection, Resource Wall, and free WiFi access, there’s always something to see and learn here at Q Center.',
    latitude: 45.553654,
    longitude: -122.675832,
    street: '4115 N. Mississippi Ave.',
    city: 'Portland',
    state: 'OR',
    zip: '97217',
    country: 'USA',
    category: 'Family, Youth, LGBTQ'
  },
  {
    name: 'Pivot Job Corps',
    shopUrl: 'https://pivot.jobcorps.gov/',
    description: 'Partners in Vocational Opportunity Training (PIVOT) Job Corps Center is a great place for young people to complete an education, learn a marketable trade, make lifetime friends, and graduate with a good job in hand. Through our Career Development Services System (CDSS), we provide our students with the skills you need to succeed in today’s workforce—at no cost to you or your family. If you are looking for a better quality of life and are willing to dedicate yourself to our life changing program, Partners in Vocational Opportunity Training (PIVOT) Job Corps Center is the place for you!',
    latitude: 45.537530,
    longitude: -122.707810,
    street: '2701 NW Vaughn St #151',
    city: 'Portland',
    state: 'Oregon',
    zip: '97210',
    country: 'USA',
    category: 'Job services, Education, Youth'
  },
  {
    name: 'Office of Student Access and Completion',
    shopUrl: 'https://oregonstudentaid.gov/finaid-foster-youth.aspx',
    description: 'If you have been involved in the foster care system and have financial need, OSAC can help you navigate the process of planning and paying for college. Find information on tuition waivers, financial aid, and more. They also offer a variety of topical podcasts.',
    category: 'Education, Youth'
  },
  {
    name: 'PCC Fostering Success',
    shopUrl: 'https://www.pcc.edu/fostering-success/',
    description: 'Our program provides a support network and individual coaching to enable students who have experienced foster care to successfully complete career and educational goals.',
    category: 'Education, Youth'
  },
  {
    name: 'Morrison Child & Family Services Foster Family Care Network',
    shopUrl: 'http://www.morrisonkids.org/foster-parent-recruitment/',
    description: 'The FFCN recruits, trains and supports foster and respite care providers for Morrison’s foster care programs. Morrison’s Foster Family Care Network embraces diversity of all kinds in our foster parents. What all of our foster homes have in common is a desire to learn how to care for kids with trauma, a willingness to share their life experience and home, and a desire to be part of a healing team for a child or teen. Morrison provides its foster parents with excellent training, superior support, generous tax free-monthly stipends and the appreciation of a professional therapeutic team.',
    category: 'Foster family support'
  },
  {
    name: 'Boys and Girls Aid',
    shopUrl: 'https://www.boysandgirlsaid.org/fostercare',
    description: 'We believe in our foster parents and we want them to succeed in every way. We offer training, support and paid time off to ensure youth are placed with the best possible foster parents. As a foster parent, you will receive: -Extensive training on how to be successful as a foster parent and understand the needs of children in foster care. -24 hour support to answer questions, provide guidance and assist with emergencies so foster parents never feel alone. -A community of other like-minded foster parents where people can share ideas, advice and expertise with one another.',
    category: 'Training, Foster family support'
  },
  {
    name: 'Child Welfare Information Gateway Foster Parent Inservice Training)',
    shopUrl: 'https://www.childwelfare.gov/topics/management/training/curricula/foster/foster/',
    description: 'Resources address online curricula and materials offering inservice training to foster families on topics such as behavior management, sibling issues, independent living, and more.',
    category: 'Training'
  },
  {
    name: 'FosterClub Foster Parent Online Training',
    shopUrl: 'https://www.fosterclub.com/foster-parent-training',
    description: 'Our online training pairs information from leading child welfare experts with authentic youth perspective. FosterClub training is trauma-informed, includes a forum where foster parents can learn from each other, provides access to exlusive FosterClub tools and is low-cost and convenient. Course is $24.95 for 1 year subscription per parent (unlimited access to courses for one year).',
    category: 'Training'
  },
];

export default data;

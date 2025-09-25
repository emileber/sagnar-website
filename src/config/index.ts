export const siteConfig = {
  name: 'SAGNAR',
  description: 'Independent French Canadian enduro mountain bike team',
  url: 'https://sagnar.com',
  social: {
    instagram: 'https://www.instagram.com/sagnar_mtb/',
    facebook: '#',
    twitter: '#'
  },
  team: {
    location: 'Quebec, Canada',
    email: 'info@sagnar.com',
    phone: '+1 (418) 555-0123'
  },
  members: [
    {
      id: 'emile-bergeron',
      name: 'Émile J. Bergeron',
      role: 'Team Manager & Founder',
      image: '/images/A7400086_Edited.jpg',
      description: 'As team manager, Émile coordinates race schedules, manages logistics, and ensures the team operates smoothly. His passion for enduro racing and organizational skills keep SAGNAR competitive at the highest level.',
      social: {
        instagram: '#'
      }
    },
    {
      id: 'marc-olivier-levesque',
      name: 'Marc-Olivier Lévesque',
      role: 'Elite Rider',
      image: '/images/A7400135_Edited-2.jpg',
      description: 'Our elite level rider, Marc-Olivier brings years of competitive experience to SAGNAR. Known for his technical skills and fearless approach to challenging terrain, he represents the team\'s racing spirit.',
      social: {
        instagram: '#'
      }
    }
  ]
} as const;
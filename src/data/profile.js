export const PROFILE = {
  name: 'Maritetta Katsarou',
  targetRole: 'Design Engineer',
  location: 'Athens / Syros, Greece',
  email: 'maritettakatsarou@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/maritettakatsarou/',
  resumeFile: 'Maritetta-Katsarou-Resume.pdf',
}

export const PROFILE_LINKS = {
  email: `mailto:${PROFILE.email}`,
  linkedin: PROFILE.linkedinUrl,
  resume: `${import.meta.env.BASE_URL}${PROFILE.resumeFile}`,
}

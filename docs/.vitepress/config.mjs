import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  sitemap: {
    hostname: 'http://dev.inotech-pk.com', // my domain
    lastmodDateOnly: false,
  },
  title: "Amaan",
  description: "Project Documentation",
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Summary', link: '/intro' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Brief Summary', link: '/intro' },
          { text: 'Work Experience', link: '/work-xp' },
        ]
      },
      {
        text: 'Projects',
        items: [
          { text: 'VS Code Extension', link: '/projects/codejumpstart' }, 
        ]
      },
      {
        text: ' ',
        items: [
          { text: 'Contact', link: '/contact' }, 
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/amaan-igs' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/amaanulhaqsiddiqui/' }
    ]
  }
})

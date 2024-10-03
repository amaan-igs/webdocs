import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  sitemap: {
    hostname: 'https://dev.inotech-pk.com', // Updated to HTTPS
    lastmodDateOnly: false,
  },
  title: "Amaan",
  description: "Project Documentation",
  
  // head property here
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
    ['meta', { name: 'google-site-verification', content: process.env.CONSOLE_KEY }],
    // Added Apple Touch Icon for better compatibility
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],
  
  themeConfig: {
    logo: '/LOGO-NOTEXT-BG-N.png',  // Use a separate logo file
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

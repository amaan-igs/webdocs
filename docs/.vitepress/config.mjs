import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Amaan",
  description: "Project Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
          { text: 'Runtime API Examples', link: '/projects/api-examples' }    
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

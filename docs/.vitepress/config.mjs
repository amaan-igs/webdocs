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
      { text: 'Summary', link: '/Intro' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Brief Summary', link: '/Intro' },
          { text: 'Work Experience', link: '/work-xp' },
        ]
      },
      {
        text: 'Projects',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/amaan-igs' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/amaanulhaqsiddiqui/' }    ]
  }
})

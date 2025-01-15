import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind({
      
      config: { mode: 'jit' }
    }), 
    react(), 
    mdx({
      // Add MDX configuration options here
      remarkPlugins: [],
      rehypePlugins: [],
      // Enable GitHub-flavored Markdown
      gfm: true,
      extendDefaultPlugins: true
    })
  ],
  // Add markdown configuration
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [],
    rehypePlugins: [],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
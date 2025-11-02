// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'

// Markdown-It plugins
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItAttrs from 'markdown-it-attrs'
import MarkdownItTaskLists from 'markdown-it-task-lists'
import MarkdownItPrism from 'markdown-it-prism'
import MarkdownItTable from 'markdown-it-multimd-table'

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown({
      frontmatter: true,      
      wrapperClasses: 'markdown-body',
      markdownItSetup(md) {
        // Headings with anchors (# -> linkable)
        md.use(MarkdownItAnchor, {
          permalink: MarkdownItAnchor.permalink.ariaHidden({}),
        })

        // GitHub-style task lists
        md.use(MarkdownItTaskLists, { enabled: true })

        // Syntax highlighting
        md.use(MarkdownItPrism)

        // Tables with colspan/rowspan and alignments
        md.use(MarkdownItTable)

        // Allow classes/IDs on Markdown elements
        md.use(MarkdownItAttrs)

        // Open external links in new tab with security attributes
        md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
          const aIndex = tokens[idx].attrIndex('target')
          if (aIndex < 0) tokens[idx].attrPush(['target', '_blank'])
          else tokens[idx].attrs[aIndex][1] = '_blank'

          const relIndex = tokens[idx].attrIndex('rel')
          if (relIndex < 0) tokens[idx].attrPush(['rel', 'noopener noreferrer'])
          else tokens[idx].attrs[relIndex][1] = 'noopener noreferrer'

          return self.renderToken(tokens, idx, options)
        }
      },
      
    }),
  ],
})

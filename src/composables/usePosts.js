export function usePosts() {
  const modules = import.meta.glob('../posts/*.md', { eager: true }) 

  const posts = Object.entries(modules).map(([path, mod]) => {
    const slug = path.split('/').pop().replace('.md', '')
    return {
      slug,
      frontmatter: mod,
      component: mod.default, 
    }
  })

  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  return posts
}
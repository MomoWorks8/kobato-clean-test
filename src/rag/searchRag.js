import Fuse from 'fuse.js'
import knowledge from './knowledge.json'

const fuse = new Fuse(knowledge, {
  keys: ['title', 'content'],
  threshold: 0.4
})

export function searchKnowledge(query) {
  const results = fuse.search(query)
  return results.map((r) => r.item)
}

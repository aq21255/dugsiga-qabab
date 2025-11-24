import fs from 'fs/promises'
import path from 'path'
import crypto from 'crypto'

const DATA_DIR = path.join(process.cwd(), 'public', 'data')
const DATA_FILE = path.join(DATA_DIR, 'news-data.json')

export type NewsItem = {
  id: string
  title: string
  description: string
  mediaType: 'image' | 'video'
  mediaUrl: string
  createdAt: string
}

async function ensureFile() {
  try {
    await fs.access(DATA_FILE)
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
    await fs.writeFile(DATA_FILE, JSON.stringify([]))
  }
}

export async function readNews(): Promise<NewsItem[]> {
  await ensureFile()
  const raw = await fs.readFile(DATA_FILE, 'utf-8')
  const items: NewsItem[] = JSON.parse(raw)
  return items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function appendNews(item: Omit<NewsItem, 'id' | 'createdAt'>) {
  const list = await readNews()
  const newItem: NewsItem = {
    ...item,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }
  list.unshift(newItem)
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2))
  return newItem
}


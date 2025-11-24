import { NextRequest, NextResponse } from 'next/server'
import { appendNews, readNews } from '@/data/newsStore'

const ADMIN_TOKEN = process.env.NEWS_ADMIN_TOKEN

export async function GET() {
  try {
    const news = await readNews()
    return NextResponse.json({ success: true, data: news })
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json({ success: false, message: 'Failed to load news' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    let authorized = false
    if (!ADMIN_TOKEN) {
      authorized = true
    } else {
      const headerToken = request.headers.get('x-admin-token')
      if (headerToken === ADMIN_TOKEN) {
        authorized = true
      }
    }

    if (!authorized) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, description, mediaType, mediaUrl } = body

    if (!title || !description || !mediaType || !mediaUrl) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 })
    }

    const newItem = await appendNews({
      title,
      description,
      mediaType,
      mediaUrl,
    })

    return NextResponse.json({ success: true, data: newItem }, { status: 201 })
  } catch (error) {
    console.error('Error saving news:', error)
    return NextResponse.json({ success: false, message: 'Failed to save news' }, { status: 500 })
  }
}


'use client'

import { useEffect, useState } from 'react'
import RichTextEditor from '@/components/RichTextEditor'

type NewsItem = {
  id: string
  title: string
  description: string
  mediaType: 'image' | 'video'
  mediaUrl: string
  contentHtml?: string
  createdAt: string
}

const defaultForm = {
  title: '',
  description: '',
  mediaType: 'image',
  mediaUrl: '',
  contentHtml: '',
  adminToken: '',
}

export default function AdminPage() {
  const [form, setForm] = useState(defaultForm)
  const [news, setNews] = useState<NewsItem[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [isUploading, setIsUploading] = useState(false)

  const loadNews = async () => {
    const res = await fetch('/api/news')
    const data = await res.json()
    if (data.success) setNews(data.data)
  }

  useEffect(() => {
    const checkSession = async () => {
      const res = await fetch('/api/auth/session')
      const data = await res.json()
      setIsAuthenticated(data.authenticated)
      if (data.authenticated) {
        loadNews()
      }
    }
    checkSession()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Login failed')
      setIsAuthenticated(true)
      setMessage('Waad gashay. Waxaad bilaabi kartaa gelinta xogta.')
      loadNews()
    } catch (error: any) {
      setMessage(error.message || 'Login failed')
    }
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    setIsAuthenticated(false)
    setNews([])
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setIsUploading(true)
    setMessage(null)
    try {
      const data = new FormData()
      data.append('file', file)
      const res = await fetch('/api/uploads', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.message || 'Upload failed')
      setForm((prev) => ({ ...prev, mediaUrl: json.url }))
      setMessage('Faylka ayaa la raray oo diyaar buu u yahay in la daabaco.')
    } catch (error: any) {
      setMessage(error.message || 'Upload failed')
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(form.adminToken ? { 'x-admin-token': form.adminToken } : {}),
        },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          mediaType: form.mediaType,
          mediaUrl: form.mediaUrl,
          contentHtml: form.contentHtml,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.message || 'Failed to save')
      }

      setMessage('Wax cusub waa la keydiyay oo webka ayaa tusaya.')
      setForm((prev) => ({ ...defaultForm, adminToken: prev.adminToken }))
      await loadNews()
    } catch (error: any) {
      setMessage(error.message || 'Error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Admin Login</h1>
          {message && <p className="text-center text-sm text-red-600 mb-4">{message}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
              <input
                type="text"
                required
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Gal Nidaamka
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-green-50 min-h-screen py-16">
      <div className="container-max px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-green-100 p-8 md:p-12">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-wide text-green-600 font-semibold mb-2">Admin Portal</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Maamulka Waxyaabaha Cusub</h1>
            <p className="text-gray-600">Ku dar qoraallo, sawirro, ama fiidiyowyo si ay isla markiiba uga muuqdaan bogga waxyaabaha cusub.</p>
            <button onClick={handleLogout} className="text-sm text-red-500 underline mt-4">
              Ka bax
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Cinwaan *</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nooca Warbaahinta *</label>
                <select
                  value={form.mediaType}
                  onChange={(e) => setForm({ ...form, mediaType: e.target.value as 'image' | 'video' })}
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="image">Sawir</option>
                  <option value="video">Fiidiyow (YouTube/Vimeo link)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Sharaxaad *</label>
              <textarea
                required
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 min-h-[120px]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Faahfaahin Rich Text *</label>
              <div className="rounded-xl border-2 border-gray-200 overflow-hidden">
                <RichTextEditor value={form.contentHtml} onChange={(value) => setForm({ ...form, contentHtml: value })} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">URL (Sawirka ama Fiidiyowga) *</label>
              <input
                type="url"
                required
                value={form.mediaUrl}
                onChange={(e) => setForm({ ...form, mediaUrl: e.target.value })}
                placeholder={form.mediaType === 'video' ? 'https://www.youtube.com/embed/...' : 'https://.../image.jpg'}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ama ku soo rar fayl (sawir/video)</label>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileUpload}
                className="w-full rounded-xl border-2 border-dashed border-gray-300 px-4 py-3 text-sm"
              />
              {isUploading && <p className="text-xs text-gray-500 mt-1">Faylka waa la rarayaa...</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Admin Token (ikhtiyaari)</label>
              <input
                type="password"
                value={form.adminToken}
                onChange={(e) => setForm({ ...form, adminToken: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <p className="text-xs text-gray-500 mt-1">Haddii aad dejisay NEWS_ADMIN_TOKEN env, geli halkan.</p>
            </div>

            {message && (
              <div className="rounded-xl border border-green-200 bg-green-50 text-green-700 px-4 py-3">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full md:w-auto inline-flex items-center justify-center"
            >
              {isSubmitting ? 'Waxaa la diiwaangelinayaa…' : 'Ku dar Wax Cusub'}
            </button>
          </form>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Waxyaabaha la qoray</h2>
            <span className="text-sm text-gray-500">{news.length} entries</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {news.map((item) => (
              <div key={item.id} className="card p-6">
                <p className="text-xs text-gray-400 mb-2">{new Date(item.createdAt).toLocaleString()}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <p className="text-sm text-gray-500">Nooca: {item.mediaType === 'image' ? 'Sawir' : 'Fiidiyow'}</p>
                <a
                  href={item.mediaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-700 font-semibold text-sm hover:underline mt-2 inline-block"
                >
                  Daawo link-ga →
                </a>
              </div>
            ))}
            {news.length === 0 && (
              <div className="col-span-full text-center text-gray-500">Weli wax lama gelin.</div>
            )}
          </div>
        </div>

        <div className="mt-16 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Mu'asasadda Khabab Binu Arrati — Admin Panel</p>
        </div>
      </div>
    </div>
  )
}


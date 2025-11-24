'use client'

import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

type Props = {
  value: string
  onChange: (value: string) => void
}

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'strike', { color: [] }, { background: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['link', 'clean'],
]

export default function RichTextEditor({ value, onChange }: Props) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      placeholder="Qor faahfaahinta, isticmaal bold/italic/midab..."
      modules={{ toolbar: toolbarOptions }}
    />
  )
}


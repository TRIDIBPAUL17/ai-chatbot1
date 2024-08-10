'use client'

import { FC, memo } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { IconCheck, IconCopy, IconDownload } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'

interface Props {
  language: string
  value: string
}

interface LanguageMap {
  [key: string]: string | undefined
}

export const programmingLanguages: LanguageMap = {
  javascript: '.js',
  python: '.py',
  java: '.java',
  c: '.c',
  cpp: '.cpp',
  'c++': '.cpp',
  'c#': '.cs',
  ruby: '.rb',
  php: '.php',
  swift: '.swift',
  'objective-c': '.m',
  kotlin: '.kt',
  typescript: '.ts',
  go: '.go',
  perl: '.pl',
  rust: '.rs',
  scala: '.scala',
  haskell: '.hs',
  lua: '.lua',
  shell: '.sh',
  sql: '.sql',
  html: '.html',
  css: '.css'
  // Add more file extensions here
}

export const generateRandomString = (length: number, lowercase = false) => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXY3456789' // Excluding similar looking characters
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return lowercase ? result.toLowerCase() : result
}

const CodeBlock: FC<Props> = memo(({ language, value }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })

  const downloadAsFile = () => {
    if (typeof window === 'undefined') {
      return
    }
    const fileExtension = programmingLanguages[language] || '.txt'
    const suggestedFileName = `file-${generateRandomString(3, true)}${fileExtension}`
    const fileName = window.prompt('Enter file name', suggestedFileName)

    if (!fileName) {
      return
    }

    const blob = new Blob([value], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = fileName
    link.href = url
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const onCopy = () => {
    if (isCopied) return
    copyToClipboard(value)
  }

  return (
    <div className="relative w-full font-sans codeblock bg-zinc-950 rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-zinc-100 border-b border-zinc-700">
        <span className="text-xs font-medium uppercase">{language}</span>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            className="hover:bg-zinc-700 focus-visible:ring-1 focus-visible:ring-slate-600"
            onClick={downloadAsFile}
            size="icon"
          >
            <IconDownload />
            <span className="sr-only">Download</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-xs hover:bg-zinc-700 focus-visible:ring-1 focus-visible:ring-slate-600"
            onClick={onCopy}
          >
            {isCopied ? <IconCheck /> : <IconCopy />}
            <span className="sr-only">Copy code</span>
          </Button>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        PreTag="div"
        showLineNumbers
        customStyle={{
          margin: 0,
          width: '100%',
          background: 'transparent',
          padding: '1.5rem 1rem',
          borderRadius: '0 0 0.5rem 0.5rem',
        }}
        lineNumberStyle={{
          userSelect: 'none',
        }}
        codeTagProps={{
          style: {
            fontSize: '0.9rem',
            fontFamily: 'var(--font-mono)',
          },
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
})
CodeBlock.displayName = 'CodeBlock'

export { CodeBlock }

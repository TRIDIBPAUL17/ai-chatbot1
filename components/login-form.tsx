'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '@/app/login/actions'
import Link from 'next/link'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { IconSpinner } from './ui/icons'
import { getMessageFromCode } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const [result, dispatch] = useFormState(authenticate, undefined)

  useEffect(() => {
    if (result) {
      if (result.type === 'error') {
        toast.error(getMessageFromCode(result.resultCode))
      } else {
        toast.success(getMessageFromCode(result.resultCode))
        router.refresh()
      }
    }
  }, [result, router])

  return (
    <form
      action={dispatch}
      className="flex flex-col items-center gap-4 space-y-3"
    >
      <div className="w-full flex-1 rounded-lg border bg-white px-6 pb-4 pt-8 shadow-lg md:w-96 dark:bg-zinc-950 dark:border-zinc-800">
        <h1 className="mb-3 text-2xl font-bold text-center">Please log in to continue.</h1>
        <div className="w-full">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-zinc-600 dark:text-zinc-400"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="peer block w-full rounded-md border bg-zinc-50 px-3 py-2 text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:placeholder:text-zinc-400"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-zinc-600 dark:text-zinc-400"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="peer block w-full rounded-md border bg-zinc-50 px-3 py-2 text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:placeholder:text-zinc-400"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              minLength={6}
            />
          </div>
        </div>
        <LoginButton />
      </div>

      <Link
        href="/signup"
        className="text-sm text-zinc-600 dark:text-zinc-400 hover:underline"
      >
        No account yet? <span className="font-semibold">Sign up</span>
      </Link>
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className="my-4 flex h-10 w-full items-center justify-center rounded-md bg-zinc-900 p-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      aria-disabled={pending}
    >
      {pending ? <IconSpinner className="animate-spin" /> : 'Log in'}
    </button>
  )
}

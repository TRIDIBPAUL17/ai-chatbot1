import { auth } from '@/auth'
import SignupForm from '@/components/signup-form'
import { Session } from '@/lib/types'
import { redirect } from 'next/navigation'

export default async function SignupPage() {
  try {
    const session = await auth() as Session

    if (session) {
      redirect('/')
      return null // Ensure function completes after redirect
    }

    return (
      <main className="flex flex-col p-4">
        <SignupForm />
      </main>
    )
  } catch (error) {
    console.error('Error during signup page load:', error)
    // Handle or display error as needed
    return (
      <main className="flex flex-col p-4">
        <div className="text-red-500">An error occurred while loading the signup page. Please try again later.</div>
      </main>
    )
  }
}

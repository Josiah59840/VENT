import { VentLogo } from "@/components/vent-logo"
import Link from "next/link"

export default function MoodPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <VentLogo />
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/chat" className="text-sm font-medium">
              Chat
            </Link>
            <Link href="/mood" className="text-sm font-medium">
              Mood
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Mood Tracking</h1>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-5 gap-4 mb-8">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                className="p-4 border rounded-lg text-center hover:bg-primary/5"
              >
                {value}
              </button>
            ))}
          </div>
          <div className="mb-4">
            <textarea
              placeholder="How are you feeling? (optional)"
              className="w-full p-2 border rounded-lg"
              rows={4}
            />
          </div>
          <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg">
            Save Mood
          </button>
        </div>
      </main>
    </div>
  )
} 
import { VentLogo } from "@/components/vent-logo"
import Link from "next/link"

export default function MoodPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <VentLogo />
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/chat" className="text-sm font-medium">
              Chat
            </Link>
            <Link href="/mood" className="text-sm font-medium">
              Mood
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Mood Tracking</h1>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-5 gap-4 mb-8">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                className="p-4 border rounded-lg text-center hover:bg-primary/5"
              >
                {value}
              </button>
            ))}
          </div>
          <div className="mb-4">
            <textarea
              placeholder="How are you feeling? (optional)"
              className="w-full p-2 border rounded-lg"
              rows={4}
            />
          </div>
          <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg">
            Save Mood
          </button>
        </div>
      </main>
    </div>
  )
} 
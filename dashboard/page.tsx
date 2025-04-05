"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, FileText, User, LogOut, Heart, TrendingUp, Clock } from "lucide-react"
import { VentLogo } from "@/components/vent-logo"
import { MoodEmojiSelector } from "@/components/MoodEmojiSelector"

// Mock data for mood tracking
const moodData = [
  { date: "Apr 1", value: 7, note: "Feeling good today" },
  { date: "Apr 2", value: 6, note: "Slightly anxious about work" },
  { date: "Apr 3", value: 8, note: "Great day, spent time with friends" },
  { date: "Apr 4", value: 5, note: "Stressed about deadline" },
  { date: "Apr 5", value: 7, note: "Better after meditation" },
  { date: "Apr 6", value: 8, note: "Weekend relaxation" },
  { date: "Apr 7", value: 9, note: "Feeling very positive" },
]

// Mock data for recent conversations
const recentConversations = [
  {
    id: 1,
    preview: "I've been feeling anxious about my upcoming presentation...",
    date: "Today, 2:30 PM",
  },
  {
    id: 2,
    preview: "I had trouble sleeping last night and I'm not sure why...",
    date: "Yesterday, 8:15 PM",
  },
  {
    id: 3,
    preview: "I'm feeling much better after trying the breathing exercises...",
    date: "Mar 31, 11:20 AM",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood)
    // In a real app, you would save this mood to the user's profile
    console.log(`Selected mood: ${mood}`)
  }

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
        <h1 className="text-3xl font-bold mb-8">Welcome to Vent</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Conversations</h2>
            <p className="text-muted-foreground">No recent conversations</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Mood Tracking</h2>
            <p className="text-muted-foreground">No mood data yet</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary hover:underline">
                  Crisis Helpline
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  Find a Therapist
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  Self-Help Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
} 
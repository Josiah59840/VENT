"use client"

import React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Send, Bot, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { VentLogo } from "@/components/vent-logo"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm your AI mental health companion. How are you feeling today? You can share anything that's on your mind, and I'm here to listen and help.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (input.trim() === "") return

    const userMessage: Message = {
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Simulate AI response
      setTimeout(() => {
        const aiMessage: Message = {
          role: "assistant",
          content: "I understand how you're feeling. Would you like to talk more about it?",
        }
        setMessages((prev) => [...prev, aiMessage])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error generating response:", error)
      const errorMessage: Message = {
        role: "assistant",
        content: "I'm sorry, I'm having trouble responding right now. Please try again in a moment.",
      }
      setMessages((prev) => [...prev, errorMessage])
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
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
        <div className="max-w-4xl mx-auto">
          <div className="border rounded-lg p-4 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm">AI</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">AI Assistant</p>
                <p>Hello! How are you feeling today?</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg"
            />
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  )
} 
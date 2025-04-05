"use client"

import React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface MoodEmojiSelectorProps {
  onSelect: (mood: string) => void
  className?: string
}

const moods = [
  { id: "happy", emoji: "😊", label: "Happy" },
  { id: "sad", emoji: "😢", label: "Sad" },
  { id: "angry", emoji: "😠", label: "Angry" },
  { id: "anxious", emoji: "😰", label: "Anxious" },
  { id: "neutral", emoji: "😐", label: "Neutral" },
]

export function MoodEmojiSelector({ onSelect, className }: MoodEmojiSelectorProps) {
  return (
    <div className={cn("flex flex-wrap gap-4 justify-center", className)}>
      {moods.map((mood) => (
        <button
          key={mood.id}
          onClick={() => onSelect(mood.id)}
          className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-teal-50 transition-colors"
          aria-label={`Select ${mood.label} mood`}
        >
          <span className="text-4xl">{mood.emoji}</span>
          <span className="text-sm text-gray-600">{mood.label}</span>
        </button>
      ))}
    </div>
  )
} 
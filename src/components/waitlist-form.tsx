"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState("")
  const [twitter, setTwitter] = useState("")
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const formData = new FormData()
      formData.append("email", email)
      formData.append("twitter", twitter)

      const response = await fetch("/api/waitlist", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ text: "You've been added to our waitlist.", type: "success" })
        setEmail("")
        setTwitter("")
      } else {
        setMessage({
          text: data.message || "Something went wrong. Please try again.",
          type: "error",
        })
      }
    } catch (error: unknown) {
      setMessage({
        text: error instanceof Error ? error.message : "Failed to submit. Please try again later.",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="space-y-2">
          <Input
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            placeholder="Your Twitter/X handle (optional)"
            aria-label="Twitter handle"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#001f3f] font-bold mt-2"
        >
          {isSubmitting ? "Processing..." : "Get Early Access"}
        </Button>
      </form>
    </div>
  )
}

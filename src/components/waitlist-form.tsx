import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function WaitlistForm() {
  return (
    <form action="/api/waitlist" method="POST" className="flex flex-col space-y-4">
      <div className="space-y-2">
        <Input type="email" name="email" placeholder="Enter your email" required />
      </div>

      <div className="space-y-2">
        <Input type="text" name="twitter" placeholder="Your Twitter/X handle (optional)" aria-label="Twitter handle" />
      </div>

      <Button type="submit" className="w-full h-12 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#001f3f] font-bold mt-2">
        Get Early Access
      </Button>
    </form>
  )
}
"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "@RealInfluencerX",
    role: "Early Adopter",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "As an influencer, I was tired of bots claiming my giveaways. With $urge, I can finally reward my real fans!",
    rating: 5,
  },
  {
    id: 2,
    name: "@BrandManager_Y",
    role: "Early Adopter",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "$urge saved me money by ensuring only my top supporters received rewards. Love the automation!",
    rating: 5,
  },
  {
    id: 3,
    name: "@ContentCreator_Z",
    role: "Early Adopter",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Finally a platform that understands the importance of rewarding genuine engagement. Can't wait for the full launch!",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden">
      <div className="relative h-full w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <div className="mx-auto max-w-2xl rounded-lg border border-[#C0C0C0]/20 bg-white p-8 shadow-sm">
                <div className="mb-4 flex justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="mb-6 text-center font-opensans text-lg text-gray-700">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex flex-col items-center">
                  <div className="mb-3 h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="font-montserrat text-lg font-bold text-[#001f3f]">{testimonial.name}</h4>
                  <p className="font-opensans text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-all hover:bg-white"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-[#001f3f]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-all hover:bg-white"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-[#001f3f]" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              activeIndex === index ? "bg-[#FFD700] w-6" : "bg-[#C0C0C0]"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


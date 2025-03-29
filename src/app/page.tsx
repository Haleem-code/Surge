import { Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { WaitlistForm } from "@/components/waitlist-form"
import FeatureCard from "@/components/feature-card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FaqSection from "@/components/faq-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#C0C0C0]/20 bg-[#001f3f]/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white"><span className="text-2xl font-bold text-[#FFD700]">$</span>urge</span>
          </div>
          <nav className="hidden md:flex">
        <ul className="flex items-center gap-8">
          <li>
            <Link href="#why" className="text-sm font-medium text-white hover:text-[#FFD700] transition-colors">
          Why $urge
            </Link>
          </li>
          <li>
            <Link
          href="#features"
          className="text-sm font-medium text-white hover:text-[#FFD700] transition-colors"
            >
          Features
            </Link>
          </li>
          <li>
            <Link
          href="#testimonials"
          className="text-sm font-medium text-white hover:text-[#FFD700] transition-colors"
            >
          Testimonials
            </Link>
          </li>
          <li>
            <Link href="#faq" className="text-sm font-medium text-white hover:text-[#FFD700] transition-colors">
          FAQ
            </Link>
          </li>
        </ul>
          </nav>
          <Link
        href="#waitlist"
        className="inline-flex h-10 items-center justify-center rounded-md bg-[#007BFF] px-6 text-sm font-medium uppercase text-white shadow-sm transition-all hover:bg-[#007BFF]/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          >
        Join Waitlist
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative overflow-hidden bg-gradient-to-br from-[#001f3f] to-[#003366] py-20 md:py-32"
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="mb-6 font-montserrat text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Powering Rewards for Your <span className="text-[#FFD700]">True Audience</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl font-poppins text-lg text-[#C0C0C0] md:text-xl">
              Take control of your giveaways and reward only your most engaged fans.
            </p>
            <div className="mx-auto max-w-md">
              <WaitlistForm />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#001f3f] to-transparent"></div>
        </section>

        {/* Why $urge Section */}
        <section id="why" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-3 font-montserrat text-3xl font-bold text-[#001f3f] md:text-4xl">
                Why Choose <span className="text-[#FFD700]">$urge</span>?
              </h2>
              <p className="mx-auto max-w-2xl font-poppins text-lg text-gray-600">
                Reward your most loyal fans without wasting your budget on bots and fake engagement.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <FeatureCard
                icon="rocket"
                title="Maximize Real Engagement"
                description="Automatically reward only those who truly support your content."
              />
              <FeatureCard
                icon="shield"
                title="Protect Your Budget"
                description="Eliminate giveaways that are wasted on bots and inactive accounts."
              />
              <FeatureCard
                icon="zap"
                title="Automated Rewards"
                description="Set your budget and let $urge handle the rest."
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-[#f8f9fa] py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-montserrat text-3xl font-bold text-[#001f3f] md:text-4xl">
              What Makes <span className="text-[#FFD700]">$urge</span> Different?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon="activity"
                title="Real-time Engagement Tracking"
                description="Track your followers' interactions and identify true fans instantly."
                variant="small"
              />
              <FeatureCard
                icon="gift"
                title="Automated Rewards Distribution"
                description="Set up your reward budget and let $urge do the rest, distributing rewards to your most engaged fans."
                variant="small"
              />
              <FeatureCard
                icon="shield"
                title="Bot Detection & Filtering"
                description="Keep your rewards safe from fake accounts with advanced filtering systems."
                variant="small"
              />
              <FeatureCard
                icon="globe"
                title="Platform Expansion"
                description="Currently integrated with X (Twitter), with Instagram, TikTok, and YouTube on the roadmap."
                variant="small"
              />
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="testimonials" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-montserrat text-3xl font-bold text-[#001f3f] md:text-4xl">
              Hear from <span className="text-[#FFD700]">Early Adopters</span>
            </h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-[#f8f9fa] py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-montserrat text-3xl font-bold text-[#001f3f] md:text-4xl">
              Frequently Asked <span className="text-[#FFD700]">Questions</span>
            </h2>
            <FaqSection />
          </div>
        </section>

        {/* CTA Section */}
        <section id="waitlist" className="bg-gradient-to-br from-[#001f3f] to-[#003366] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 font-montserrat text-3xl font-bold text-white md:text-4xl">
              Ready to <span className="text-[#FFD700]">Revolutionize</span> Your Audience Rewards?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl font-poppins text-lg text-[#C0C0C0]">
              Join the waitlist now and be part of the future of social engagement.
            </p>
            <div className="mx-auto max-w-md">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#001f3f] py-10 text-[#C0C0C0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#FFD700]">$</span>
              <span className="text-2xl font-bold text-white">urge</span>
            </div>
            <div className="flex gap-6">
              <Link href="https://x.com/surge_rewards" className="text-white hover:text-[#FFD700]" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
              <div className="flex items-center gap-1 text-[#C0C0C0]/70">
                <Instagram size={20} />
                <span className="text-xs">Coming Soon</span>
              </div>
              <div className="flex items-center gap-1 text-[#C0C0C0]/70">
                <Youtube size={20} />
                <span className="text-xs">Coming Soon</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2025 $urge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


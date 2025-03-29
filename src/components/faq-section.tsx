"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does $urge track engagement?",
    answer:
      "We use real-time integration with X (Twitter) to analyze interactions and identify your most active followers.",
  },
  {
    question: "Can I use $urge with other social media platforms?",
    answer: "Currently, we support X (Twitter), but we plan to expand to Instagram, TikTok, and YouTube.",
  },
  {
    question: "How much does it cost?",
    answer: "We offer flexible subscription plans tailored to influencers and brands. Get early access to learn more!",
  },
  {
    question: "How do I get started with $urge?",
    answer:
      "Join our waitlist to be among the first to access $urge when we launch. You'll receive exclusive updates and early access opportunities.",
  },
  {
    question: "Can I set specific criteria for rewards?",
    answer:
      "Yes! $urge allows you to customize your reward criteria based on engagement metrics like comments, likes, shares, and more.",
  },
]

export default function FaqSection() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#C0C0C0]/30">
            <AccordionTrigger className="text-left font-montserrat text-lg font-medium text-[#001f3f] hover:text-[#001f3f]/80 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="font-opensans text-gray-600">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}


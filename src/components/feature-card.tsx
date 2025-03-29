import { Activity, Gift, Globe, Rocket, Shield, Zap } from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  variant?: "default" | "small"
}

export default function FeatureCard({ icon, title, description, variant = "default" }: FeatureCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "rocket":
        return <Rocket className="h-8 w-8" />
      case "shield":
        return <Shield className="h-8 w-8" />
      case "zap":
        return <Zap className="h-8 w-8" />
      case "activity":
        return <Activity className="h-8 w-8" />
      case "gift":
        return <Gift className="h-8 w-8" />
      case "globe":
        return <Globe className="h-8 w-8" />
      default:
        return <Rocket className="h-8 w-8" />
    }
  }

  if (variant === "small") {
    return (
      <div className="group flex flex-col rounded-lg border border-[#C0C0C0]/20 bg-white p-6 shadow-sm transition-all hover:border-[#FFD700]/50 hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#001f3f]/5 text-[#001f3f] group-hover:bg-[#001f3f]/10">
          {getIcon()}
        </div>
        <h3 className="mb-2 font-montserrat text-lg font-bold text-[#001f3f]">{title}</h3>
        <p className="font-opensans text-sm text-gray-600">{description}</p>
      </div>
    )
  }

  return (
    <div className="group flex flex-col items-center rounded-lg border border-[#C0C0C0]/20 bg-white p-8 text-center shadow-sm transition-all hover:border-[#FFD700]/50 hover:shadow-md">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#001f3f]/5 text-[#001f3f] group-hover:bg-[#001f3f]/10">
        {getIcon()}
      </div>
      <h3 className="mb-3 font-montserrat text-xl font-bold text-[#001f3f]">{title}</h3>
      <p className="font-opensans text-gray-600">{description}</p>
    </div>
  )
}


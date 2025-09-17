import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

export default function Pricing() {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[400px]">
      {/* Pricing Header */}
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Pricing
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10">
          Flexible plans{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            for every team
          </span>
        </h2>
      </div>

      {/* Pricing Options */}
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <div className="p-8 rounded-2xl border border-neutral-700 bg-neutral-900 shadow-lg">
              {/* Plan Title */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {option.title}
              </h3>

              {/* Plan Price */}
              <p className="text-4xl font-bold text-orange-500 mb-6">
                {option.price}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-neutral-300">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-700 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { CheckCircle2 } from "lucide-react"
import codeImg from "../assets/code.jpg"
import { checklistItems } from "../constants"

export default function WorkflowSection() {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[400px]">
      {/* Workflow Header */}
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Workflow
        </span>
    
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10">
          Streamline your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            virtual collaboration
          </span>
        </h2>
      </div>

      {/* Workflow Content */}
      <div className="flex flex-wrap justify-center items-center mt-16">
        {/* Left side - Image */}
        <div className="p-2 w-full lg:w-1/2">
          <img
            src={codeImg}
            alt="workflow illustration"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right side - Checklist */}
        <div className="p-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start mb-12">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="h-6 w-6 text-orange-500" />
              </div>

              {/* Text Content */}
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-neutral-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

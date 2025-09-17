import { testimonials } from '../constants';

export default function Testimonials() {
  return (
    <>
      {/* Testimonials Header */}
      <div className="text-center mt-20">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Testimonials
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10">
          Know what People{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            are saying about us 💭
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 py-2"
            >
              <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin shadow-md hover:shadow-lg transition-shadow duration-300">
                
                {/* Testimonial Text */}
                <p className="text-neutral-300 italic">
                  {testimonial.text}
                </p>

                {/* User Info */}
                <div className="flex mt-8 items-center">
                  {/* Gradient Border Around Image */}
                  <div className="p-[2px] rounded-full bg-gradient-to-r from-orange-500 to-orange-700">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.user}
                    />
                  </div>
                  <div className="ml-4 text-left">
                    <h6 className="text-white font-medium">{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-500">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

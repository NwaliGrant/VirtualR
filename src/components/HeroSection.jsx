import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center mt-6 lg:mt-20 px-4">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide max-w-5xl">
        VirtualR builds immersive virtual reality experiences for{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
          businesses and individuals.
        </span>
      </h1>

      {/* Sub text */}
      <p className="mt-8 max-w-3xl text-center text-lg text-gray-600">
        Empower your brand with cutting-edge VR solutions that captivate and
        engage your audience. Get started today and transform your vision into
        reality.
      </p>

      {/* Buttons */}
      <div className="flex justify-center my-10 space-x-4">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-700 py-3 px-6 rounded-md text-white text-lg font-medium shadow-lg hover:from-orange-600 hover:to-orange-800 transition-colors"
        >
          Get Started
        </a>
        <a
          href="#"
          className="py-3 px-6 rounded-md border border-orange-500 text-gray-700 hover:border-orange-700 hover:text-orange-700 transition-colors"
        >
          Documentation
        </a>
      </div>

      {/* Videos */}
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-6 w-full max-w-6xl">
        <video
          src={video1}
          className="rounded-lg shadow-lg w-full md:w-1/2 border border-orange-700 transition-transform duration-300 hover:scale-105"
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          src={video2}
          className="rounded-lg shadow-lg w-full md:w-1/2 border border-orange-700 transition-transform duration-300 hover:scale-105"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  )
}

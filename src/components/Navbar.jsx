import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import logo from "../assets/logo.png"
import { navItems } from "../constants"

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  // Lock/unlock body scroll when drawer opens
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [mobileDrawerOpen])

  // Toggle the mobile drawer open/close
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center flex-shrink-0 space-x-2">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <span className="text-xl font-semibold tracking-tight">
              VirtualR
            </span>
          </div>

          {/* Desktop navigation links */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop action buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#"
              className="hover:text-orange-500 transition-colors border py-2 px-4 rounded-md"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-4 rounded-md text-white"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile hamburger (visible only on small screens) */}
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-200 hover:text-orange-500 focus:outline-none"
            >
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay behind drawer */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleNavbar}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {/* Close button inside drawer */}
          <button
            onClick={toggleNavbar}
            className="self-end text-gray-200 hover:text-orange-500"
          >
            <X size={28} />
          </button>

          {/* Mobile nav links */}
          <ul className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <li key={index} className="text-lg">
                <a
                  href={item.href}
                  className="hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile action buttons */}
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="hover:text-orange-500 transition-colors border py-2 px-4 rounded-md text-center"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-4 rounded-md text-white text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

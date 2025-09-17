import { resourcesLinks, platformLinks, communityLinks } from '../constants';

export default function Footer() { 
  return (
    <footer className="mt-20 border-t border-neutral-800 pt-10 pb-5 text-neutral-400 text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Resources */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom centered text */}
        <div className="mt-10 text-center text-neutral-500">
          © {new Date().getFullYear()} Nwali Grant for VirtualR. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

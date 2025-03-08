import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
type FooterProps = {
  className?: string;
};
const Footer = ({
  className
}: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    quickLinks: [{
      name: 'About Us',
      href: '/about'
    }, {
      name: 'Solutions',
      href: '/solutions'
    }, {
      name: 'Our Labs',
      href: '/labs'
    }, {
      name: 'Resources',
      href: '/resources'
    }, {
      name: 'Contact',
      href: '/contact'
    }],
    resources: [{
      name: 'Case Studies',
      href: '#'
    }, {
      name: 'Blog',
      href: '#'
    }, {
      name: 'Whitepapers',
      href: '#'
    }, {
      name: 'Research',
      href: '#'
    }, {
      name: 'Events',
      href: '#'
    }],
    legal: [{
      name: 'Privacy Policy',
      href: '#'
    }, {
      name: 'Terms of Service',
      href: '#'
    }, {
      name: 'Cookie Policy',
      href: '#'
    }]
  };
  const contactInfo = {
    email: 'info@faei.org',
    phone: '+1 (234) 567-890',
    address: '123 Research Avenue, Suite 456, New York, NY 10001'
  };
  return <footer className={cn("bg-rich-black text-white py-12", className)}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">FAEI</h3>
            <p className="text-white/70 mb-4">
              Bridging theory and practice through innovative research and actionable insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm5.838 3.294c.009-.392.109-.87.301-1.195.192-.325.473-.579.798-.74.325-.163.703-.245 1.067-.182.365.063.701.242.963.506.262.265.437.603.496.969.06.365-.026.744-.192 1.067-.166.323-.422.6-.75.788-.327.188-.808.282-1.201.282-.653-.004-1.286-.259-1.75-.723-.464-.465-.716-1.099-.716-1.753 0-.013.105.017.105.017.391-.008.869.104 1.197.294.327.19.584.467.748.79.164.323.25.695.189 1.061-.06.366-.237.703-.502.964-.265.262-.601.438-.968.497-.366.06-.746-.025-1.069-.193-.324-.167-.602-.423-.792-.75-.19-.327-.287-.807-.287-1.201.003-.653.261-1.286.724-1.75.463-.465 1.097-.72 1.75-.72h.007zm-5.838 1.556c.651 0 1.296.135 1.894.4.598.263 1.137.65 1.586 1.137.45.487.801 1.061 1.03 1.674.23.614.32 1.264.26 1.916-.06.651-.262 1.295-.593 1.897-.331.601-.809 1.125-1.376 1.553-.567.427-1.221.745-1.943.913-.722.168-1.489.18-2.178.032-1.423-.406-2.704-1.307-3.543-2.488-.839-1.181-1.186-2.619-1.091-4.069.095-1.449.757-2.805 1.831-3.777.989-.857 2.276-1.383 3.659-1.383.289 0 .577.025.863.065 1.152.173 2.243.637 3.149 1.294.905.657 1.646 1.529 2.139 2.515.494.987.729 2.059.68 3.148-.049 1.09-.356 2.15-.897 3.107-.53.952-1.342 1.769-2.309 2.307-.968.539-2.108.784-3.223.7-1.115-.085-2.186-.54-3.054-1.288-.868-.749-1.479-1.785-1.742-2.942-.263-1.157-.158-2.404.301-3.521.459-1.117 1.277-2.095 2.322-2.776.813-.478 1.762-.752 2.728-.766z" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => <li key={index}>
                  <Link to={link.href} className="text-white/70 hover:text-white">{link.name}</Link>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white">{link.name}</a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-white/70 mr-2">Email:</span>
                <a href={`mailto:${contactInfo.email}`} className="text-white/70 hover:text-white">{contactInfo.email}</a>
              </li>
              <li className="flex items-start">
                <span className="text-white/70 mr-2">Phone:</span>
                <a href={`tel:${contactInfo.phone}`} className="text-white/70 hover:text-white">{contactInfo.phone}</a>
              </li>
              <li className="flex items-start">
                <span className="text-white/70 mr-2">Address:</span>
                <span className="text-white/70">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">© 2025 The Functional Areas Enablement Institute, all rights reserved.</p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => <a key={index} href={link.href} className="text-white/70 hover:text-white text-sm">{link.name}</a>)}
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
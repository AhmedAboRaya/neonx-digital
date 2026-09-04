import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import nav from "../assets/NavImage/NavIcon.png";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const menuItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "techStack", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "faqs", label: "FAQs" },
  ];

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const contactLinks = [
    {
      id: "phone",
      label: "+20 10 61871919",
      href: "tel:+201061871919",
      icon: FaPhoneAlt,
      hoverBorder: "hover:border-[#00F0FF]/50",
      hoverBg: "hover:bg-[#00F0FF]/10",
      hoverText: "hover:text-[#00F0FF]",
      hoverShadow: "hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/201061871919",
      icon: FaWhatsapp,
      hoverBorder: "hover:border-[#25D366]/50",
      hoverBg: "hover:bg-[#25D366]/10",
      hoverText: "hover:text-[#25D366]",
      hoverShadow: "hover:shadow-[0_0_15px_rgba(37,211,102,0.25)]",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/share/1FCrh3rjSR/?mibextid=wwXIfr",
      icon: FaFacebookF,
      hoverBorder: "hover:border-[#1877F2]/50",
      hoverBg: "hover:bg-[#1877F2]/10",
      hoverText: "hover:text-[#1877F2]",
      hoverShadow: "hover:shadow-[0_0_15px_rgba(24,119,242,0.25)]",
    },
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#06080D]/90 backdrop-blur-md relative border-t border-white/5"
    >
      <div className="h-px top-0 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-50" />
      
      <div className="container py-10 px-6 mx-auto">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Logo & Brand Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <a href="/" className="flex items-center gap-3 group">
              <img
                src={nav}
                alt="Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.45)] group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-urbanist font-bold text-lg tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                  NEON<span className="text-[#C026D3]">X</span> DIGITAL
                </span>
                <span className="text-xs text-gray-400 font-urbanist tracking-widest uppercase">
                  Innovation in Digital Solutions
                </span>
              </div>
            </a>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm"
          >
            {menuItems.map((item) => (
              <li key={item.id} className="list-none">
                <span
                  onClick={() => handleClick(item.id)}
                  className="text-gray-400 hover:text-[#00F0FF] transition-colors cursor-pointer font-urbanist font-medium"
                >
                  {item.label}
                </span>
              </li>
            ))}
          </motion.nav>
        </div>

        {/* Contact & Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Social / Contact Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 ${item.hoverBorder} ${item.hoverBg} text-gray-300 ${item.hoverText} ${item.hoverShadow} transition-all duration-300 backdrop-blur-sm`}
              >
                <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-urbanist text-xs sm:text-sm font-medium">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-xs sm:text-sm font-urbanist text-center md:text-right">
            © 2025 NeonX Digital. All rights reserved.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

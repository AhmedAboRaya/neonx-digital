import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import nav from "../assets/NavImage/NavIcon.png";
import { Button } from "./ui/button.jsx";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [scrollY, setScrollY] = useState(0);

    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > scrollY && currentScrollY < 600) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }

        setScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);

    const menuItems = [
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "techStack", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "faqs", label: "FAQs" },
    ];

    const handleClick = (id) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.header
                ref={ref}
                className="fixed top-0 left-0 right-0 z-20 bg-[#080B11]/75 backdrop-blur-md border-b border-white/5"
                initial={{ y: "-100%" }}
                animate={showNavbar ? { y: 0 } : { y: "-100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3">
                        <motion.div
                            className="w-12 h-12 md:w-14 md:h-14 relative drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] cursor-pointer hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, scale: 0.9, x: -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            onClick={() => handleClick("home")}
                        >
                            <img src={nav} alt="Logo" className="w-full h-full object-contain" />
                        </motion.div>
                        <nav className="hidden md:block">
                            <motion.ul
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex space-x-8 bg-white/5 border border-white/10 rounded-full px-8 py-2 backdrop-blur-sm"
                            >
                                {menuItems.map((item, index) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.3 }}
                                    >
                                        <span
                                            onClick={() => handleClick(item.id)}
                                            className="text-muted hover:text-[#00F0FF] font-urbanist font-thin duration-300 cursor-pointer"
                                        >
                                            {item.label}
                                        </span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </nav>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            className="hidden md:block"
                        >
                            <Button
                                onClick={() => handleClick("contact")}
                                className="bg-primary text-[#080B11] font-urbanist font-semibold hover:bg-[#00D2FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] rounded-full transition-all duration-300"
                            >
                                Contact
                            </Button>
                        </motion.div>
                        <button className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
                            {isMenuOpen ? "" : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-60"></div>
            </motion.header>

            {/* Mobile menu */}
            <motion.div
                className="fixed inset-0 z-20 bg-[#080B11]/95 backdrop-blur-lg md:hidden"
                initial={{ opacity: 0, x: "100%" }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <X size={24} onClick={toggleMenu} className="absolute top-5 right-5 text-white cursor-pointer" />
                <div className="flex flex-col items-center justify-center h-full">
                    <nav>
                        <ul className="flex flex-col space-y-6 text-center">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <span
                                        className="text-2xl text-muted hover:text-[#00F0FF] font-urbanist font-thin cursor-pointer"
                                        onClick={() => {
                                            handleClick(item.id);
                                            closeMenu();
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                    <Button
                        onClick={() => {
                            handleClick("contact");
                            closeMenu();
                        }}
                        className="bg-primary text-[#080B11] hover:bg-[#00D2FF] mt-8 rounded-full font-urbanist font-medium"
                    >
                        Contact
                    </Button>
                </div>
            </motion.div>
        </>
    );
}

export default Navbar;

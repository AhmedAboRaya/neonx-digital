import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";
import bg from "@/assets/ContactUs/BGImage2.jpg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  const [designService, setDesignService] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Clear error message after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  // Clear success message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setError("");

    // Validate design service field
    if (!designService.trim()) {
      setError("Design service is required.");
      return;
    }

    // Validate email field
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    // if (!validateEmail(email)) {
    //   setError("Please enter a valid email address.");
    //   return;
    // }

    setLoading(true);

    try {
      const templateParams = {
        design_service: designService,
        email: email,
      };

      // Replace with your EmailJS service ID, template ID, and user ID
      await emailjs.send(
        "service_2d25cum",
        "template_oq33mr9",
        templateParams,
        "5eR8XMsDN1mBxKRpk"
      );

      setMessage("Message sent successfully!");
      setDesignService("");
      setEmail("");
    } catch (error) {
      setMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-3xl w-full h-full min-h-[400px] text-white flex flex-col items-center justify-center px-10 py-10 mb-20"
      >
        <img
          src={bg}
          className="opacity-90 rounded-3xl w-full absolute h-full top-0 left-0 z-[-1]"
          alt=""
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-center text-3xl md:text-4xl max-w-3xl lg:text-5xl mb-8"
        >
          Boost Your Digital Presence with Custom Software
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-center text-muted text-lg mb-10 max-w-2xl mx-auto font-urbanist"
        >
          We build high-performance, user-friendly web applications designed for
          innovation and efficiency.
        </motion.p>

        {/* Error Message */}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-red-500 text-lg mb-4"
          >
            {error}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="bg-[#0D131F]/90 backdrop-blur-md rounded-xl flex w-full max-w-md py-2 px-3 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] mb-5"
        >
          <Input
            type="text"
            placeholder="Enter design services"
            value={designService}
            onChange={(e) => setDesignService(e.target.value)}
            className="bg-transparent border-none ring-transparent outline-none text-muted rounded-l-full px-2 md:px-6 py-3 flex-grow font-urbanist tracking-wide"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="bg-[#0D131F]/90 backdrop-blur-md rounded-xl flex w-full max-w-md py-2 px-3 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          <Input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-none ring-transparent outline-none text-muted rounded-l-full px-2 md:px-6 py-3 flex-grow font-urbanist tracking-wide"
          />
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-primary text-[#080B11] font-semibold hover:bg-[#00D2FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] rounded-lg px-6 py-3 font-urbanist hidden md:block duration-300"
          >
            {loading ? "Sending..." : "Submit Now"}
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-primary text-[#080B11] hover:bg-[#00D2FF] rounded-lg p-3 font-urbanist md:hidden block duration-300"
          >
            <ArrowRight className={`${loading && "-rotate-90"} duration-300`} />
          </Button>
        </motion.div>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-green-500 text-lg mt-4"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default ContactUs;

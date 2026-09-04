import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import hero from "../assets/HeroImage/HeroImg.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ArrowRight } from "lucide-react";

export default function HeroPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [value, setValue] = useState(0);
  const [textValue, setTextValue] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error and success messages
    setError("");
    setSuccess("");

    // Validate email
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        design_service: "Hello, I would like to get in touch with you!",
        email: email,
      };

      await emailjs.send(
        "service_2d25cum",
        "template_oq33mr9",
        templateParams,
        "5eR8XMsDN1mBxKRpk"
      );

      setSuccess("Message sent successfully!");
      setEmail("");
    } catch (error) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
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
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setValue(window.scrollY * 0.4);
      setTextValue(window.scrollY * 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine delay based on screen width
  const getDelay = (baseDelay) => {
    return screenWidth < 767 ? baseDelay * 0.5 : baseDelay;
  };

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div
      id="home"
      className="min-h-screen relative bg-[#080B11] text-white overflow-hidden"
    >
      <img
        src={hero}
        alt="Background"
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ transform: `scale(${1 + value / 500})` }}
      />
      <div className={`relative z-10`}>
        <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-5">
          <div ref={ref} className="max-w-4xl w-full relative px-4 md:px-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-10 relative z-10 font-urbanist"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: getDelay(0.3),
              }}
              style={{ translateY: `${textValue}px` }}
            >
              <span className="font-semibold leading-relaxed">
                Innovation in Every Pixel,
              </span>
              <br />
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                Efficiency in Every Line of Code
              </span>
            </motion.h1>
            <motion.p
              className="text-muted  sm:text-lg mb-10 max-w-2xl mx-auto font-urbanist"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: getDelay(0.6),
                ease: "easeOut",
              }}
              style={{ translateY: `${textValue}px` }}
            >
              Welcome to NeonX Digital, where technology meets artistry. We're
              not just developers, we're digital architects, crafting seamless,
              high-performance experiences that command attention.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: getDelay(0.9),
                ease: "easeOut",
              }}
              style={{ translateY: `${textValue}px` }}
            >
              <Button onClick={() => handleClick("contact")} className="bg-primary text-[#080B11] hover:bg-[#00D2FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] rounded-full px-6 py-3 font-urbanist font-medium block md:hidden duration-300">
                Contact Now
              </Button>
              <form
                onSubmit={handleSubmit}
                className="bg-[#0D131F]/80 backdrop-blur-sm rounded-full hidden md:flex w-full max-w-md py-2 px-3 border border-white/10 shadow-[0_0_20px_rgba(0,240,255,0.07)]"
              >
                <Input
                  type="email"
                  placeholder="neonx.digital11@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none ring-transparent outline-none text-muted rounded-l-full px-6 py-3 flex-grow font-urbanist tracking-wide"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-[#080B11] hover:bg-[#00D2FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] rounded-full px-6 py-3 font-urbanist font-medium hidden md:block duration-300"
                >
                  {loading ? "Sending..." : "Submit Now"}
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-[#080B11] hover:bg-[#00D2FF] rounded-full p-3 font-urbanist md:hidden block duration-300"
                >
                  <ArrowRight
                    className={`${loading && "-rotate-90"} duration-300`}
                  />
                </Button>
              </form>
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center text-red-500 text-lg mt-4"
              >
                {error}
              </motion.p>
            )}

            {/* Success Message */}
            {success && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center text-green-500 text-lg mt-4"
              >
                {success}
              </motion.p>
            )}
          </div>
          <div className="bg-gradient-to-b from-transparent via-[#080B11]/80 to-[#080B11] h-20 sm:h-44 absolute bottom-0 left-0 w-full z-10" />
        </main>
      </div>
    </div>
  );
}

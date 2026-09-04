import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { Button } from "@/Components/ui/button";
import MotionWrapper from "./MotionWrapper";

export default function FAQSection() {
  const faqItems = [
    {
      id: "01",
      question: "How long does a project typically take?",
      answer:
        "Most projects take around 4-8 weeks to complete. The timeline depends on the project's complexity.",
    },
    {
      id: "02",
      question: "Can I request a custom design?",
      answer:
        "Yes, we offer custom design services tailored to your specific needs and brand requirements.",
    },
    {
      id: "03",
      question: "Do you provide website maintenance?",
      answer:
        "We offer comprehensive website maintenance packages to keep your site running smoothly.",
    },
    {
      id: "04",
      question: "What industries do you specialize in?",
      answer:
        "We work across various industries including technology, healthcare, retail, and professional services.",
    },
    {
      id: "05",
      question: "How do I get started?",
      answer:
        "Contact our team to schedule an initial consultation where we'll discuss your project requirements.",
    },
  ];

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="faqs"
      className="min-h-screen container bg-gradient-to-br text-white pt-24"
    >
      <div className="flex flex-col justify-center items-center mx-auto mt-22">
        <MotionWrapper animationType="slideUp" threshold={0.5}>
          <h1 className="px-5 py-2 w-fit text-primary border border-[#00F0FF]/30 bg-[#080B11]/80 font-urbanist rounded-full text-md tracking-wide font-thin shadow-[0_0_10px_rgba(0,240,255,0.15)]">
            FAQs
          </h1>
        </MotionWrapper>
        <MotionWrapper animationType="slideUp" threshold={0.5} delay={0.3}>
          <p className="text-center text-[#CCCCCC] font-urbanist text-xl md:text-3xl lg:text-4xl max-w-xl mt-7">
            Your Guide to Common Questions
          </p>
        </MotionWrapper>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">
          <div className="space-y-6">
            <MotionWrapper animationType="slideRight" threshold={0.5}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Got questions? We've got answers.
              </h1>
            </MotionWrapper>
            <MotionWrapper
              animationType="slideRight"
              threshold={0.5}
              delay={0.5}
            >
              <p className="text-lg md:text-xl text-gray-400 max-w-lg">
                Unlock the power of seamless digital experiences. Get answers to
                common queries and take your brand to the next level.
              </p>
            </MotionWrapper>
            <MotionWrapper
              animationType="slideRight"
              threshold={0.5}
              delay={0.8}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-[#00D2FF] text-[#080B11] hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] rounded-full group font-urbanist font-semibold text-md transition-all duration-300"
                onClick={() => handleClick("contact")}
              >
                Get Started
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:rotate-[140deg] duration-500" />
              </Button>
            </MotionWrapper>
          </div>

          {/* FAQ Section with Animations */}
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => {
              const { ref, inView } = useInView({
                threshold: 0.6,
                triggerOnce: true,
              });

              return (
                <motion.div
                  key={item.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <MotionWrapper
                    animationType="slideLeft"
                    threshold={0.4}
                    delay={item.id * 0.2}
                  >
                    <AccordionItem
                      value={item.id}
                      className="mb-4 rounded-xl border border-white/10 bg-[#0D131F]/50 backdrop-blur-sm data-[state=open]:border-[#00F0FF]/40 data-[state=open]:shadow-[0_0_15px_rgba(0,240,255,0.2)] data-[state=open]:bg-gradient-to-r data-[state=open]:from-[#00f0ff15] data-[state=open]:to-transparent transition-all duration-300"
                    >
                      <AccordionTrigger className="px-6 hover:no-underline group">
                        <div className="flex items-center gap-4 text-left">
                          <span className="text-2xl font-medium text-primary">
                            {item.id}
                          </span>
                          <span className="text-lg font-medium">
                            {item.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-400">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </MotionWrapper>
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

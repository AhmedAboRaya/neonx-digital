import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectModal({ isOpen, onClose, project, images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-secondary p-6 text-left align-middle shadow-xl transition-all relative">
                  {/* Close X button */}
                  <button
                      onClick={onClose}
                      className="absolute top-3 right-3 z-10 text-gray-300 hover:text-white transition-colors"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <Dialog.Title as="h3" className="text-xl font-medium text-center leading-6 text-white pr-10 font-urbanist">
                    {project.title}
                  </Dialog.Title>

                  <div className="mt-4 relative">
                    {images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                          <button
                              onClick={handlePrev}
                              className="z-10 p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors"
                          >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                              onClick={handleNext}
                              className="z-10 p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors"
                          >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                      <motion.img
                          key={currentImageIndex}
                          src={images[currentImageIndex]?.image}
                          alt={project.title}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.2 }}
                          className="w-full rounded-lg"
                      />
                    </AnimatePresence>
                  </div>

                  <div className="mt-4">
                    <p className="text-lg text-gray-300 font-urbanist">{project.description}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-300">Tags: {project.tags.join(", ")}</p>
                  </div>

                  {/* Right-aligned Visit Website link */}
                  <div className="mt-4 text-right">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:scale-105 transition ease-in font-urbanist"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  );
}
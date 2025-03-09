import React, { useState, useRef, useEffect } from 'react';
import { Star, Quote, Plus, X, Upload, Camera } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import useMeasure from 'react-use-measure';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: "Dr. Sarah Chen",
      role: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
      quote: "HeartCureAI has revolutionized how we approach preventive cardiology. The accuracy of predictions is remarkable.",
      rating: 5
    },
    {
      id: '2',
      name: "Michael Roberts",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
      quote: "Thanks to early detection by HeartCureAI, I was able to make lifestyle changes that significantly improved my heart health.",
      rating: 5
    },
    {
      id: '3',
      name: "Dr. James Wilson",
      role: "Healthcare Director",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
      quote: "The integration of AI in healthcare has never been more seamless. HeartCureAI sets the standard for medical technology.",
      rating: 5
    }
  ]);

  const [newTestimonial, setNewTestimonial] = useState<Partial<Testimonial>>({
    rating: 5
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [ref, bounds] = useMeasure();
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    if (!isHovered && autoScrollEnabled) {
      controls.start({
        x: -bounds.width,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity
        }
      });
    } else {
      controls.stop();
    }
  }, [isHovered, bounds.width, autoScrollEnabled, controls]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setNewTestimonial(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTestimonial.name && newTestimonial.role && newTestimonial.quote) {
      const newId = Math.random().toString(36).substr(2, 9);
      setTestimonials(prev => [...prev, {
        ...newTestimonial,
        id: newId,
        image: imagePreview || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300&h=300",
        rating: newTestimonial.rating || 5
      } as Testimonial]);
      setIsModalOpen(false);
      setNewTestimonial({ rating: 5 });
      setImagePreview(null);
    }
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real stories from healthcare professionals and patients who trust HeartCureAI
            </p>
          </motion.div>

          {/* Add Story Button - Centered in section */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            <span>Share Your Story</span>
          </motion.button>
        </div>

        {/* Infinite Scroll Testimonials */}
        <div className="overflow-hidden">
          <motion.div
            ref={ref}
            animate={controls}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-8"
            style={{ width: 'fit-content' }}
          >
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="w-[350px] flex-shrink-0 group relative bg-gradient-to-br from-gray-800/30 via-blue-900/10 to-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
                }}
              >
                <Quote className="w-8 h-8 text-blue-400 mb-6 opacity-50" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Add Testimonial Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl p-6 max-w-lg w-full border border-gray-700/50 shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Share Your Experience</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Image Upload */}
                <div className="relative group">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full h-40 bg-gray-700/30 rounded-lg border-2 border-dashed border-gray-600/50 flex flex-col items-center justify-center cursor-pointer group-hover:border-blue-500/50 transition-colors"
                  >
                    {imagePreview ? (
                      <div className="relative w-full h-full">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-400">Click to upload your photo</p>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={newTestimonial.name || ''}
                    onChange={(e) => setNewTestimonial(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                  <input
                    type="text"
                    value={newTestimonial.role || ''}
                    onChange={(e) => setNewTestimonial(prev => ({ ...prev, role: e.target.value }))}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Experience</label>
                  <textarea
                    value={newTestimonial.quote || ''}
                    onChange={(e) => setNewTestimonial(prev => ({ ...prev, quote: e.target.value }))}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 h-32"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setNewTestimonial(prev => ({ ...prev, rating }))}
                        className="focus:outline-none transform hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            (newTestimonial.rating || 5) >= rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
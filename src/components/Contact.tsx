"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // Simulating API request (Formspree or EmailJS)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative px-6">
      {/* Background Gradients */}
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-montserrat font-extrabold text-white mt-2">
            Get In Touch
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glassmorphism p-8 rounded-3xl border border-slate-800 space-y-6">
              <h4 className="text-xl font-poppins font-bold text-white">
                Contact Information
              </h4>
              <p className="text-slate-400 text-sm font-inter leading-relaxed">
                Feel free to reach out for internship opportunities, job openings, project collaborations, or tech queries! I am happy to connect.
              </p>

              <div className="space-y-4 pt-4">
                {/* Email */}
                <a
                  href="mailto:piyushbaskar4@gmail.com"
                  className="flex items-center space-x-4 p-3 bg-slate-900/50 border border-slate-850 hover:border-cyan-400/30 rounded-2xl group transition-all"
                >
                  <div className="p-3 bg-slate-800 text-cyan-400 rounded-xl group-hover:scale-105 transition-transform duration-200">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-widest">Email Me</span>
                    <span className="text-slate-200 text-sm font-semibold font-mono block mt-0.5 group-hover:text-white">
                      piyushbaskar4@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+917048941184"
                  className="flex items-center space-x-4 p-3 bg-slate-900/50 border border-slate-850 hover:border-cyan-400/30 rounded-2xl group transition-all"
                >
                  <div className="p-3 bg-slate-800 text-cyan-400 rounded-xl group-hover:scale-105 transition-transform duration-200">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-widest">Call Me</span>
                    <span className="text-slate-200 text-sm font-semibold font-mono block mt-0.5 group-hover:text-white">
                      +91-7048941184
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-4 p-3 bg-slate-900/50 border border-slate-850 rounded-2xl">
                  <div className="p-3 bg-slate-800 text-cyan-400 rounded-xl">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-widest">Location</span>
                    <span className="text-slate-200 text-sm font-semibold font-mono block mt-0.5">
                      Faridabad, Haryana, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-850">
                <a
                  href="https://github.com/piyushkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-850 text-slate-400 hover:text-white border border-slate-800 hover:border-cyan-400/40 rounded-xl transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/piyushkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-850 text-slate-400 hover:text-white border border-slate-800 hover:border-cyan-400/40 rounded-xl transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Google Map Placeholder clearly marked */}
            <div className="border border-dashed border-slate-800 bg-slate-900/40 p-6 rounded-3xl text-center relative overflow-hidden flex flex-col items-center justify-center space-y-2 h-[200px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/5 to-transparent pointer-events-none" />
              <MapPin size={24} className="text-slate-600 animate-bounce" />
              <span className="font-semibold text-white text-xs">Google Map Visual Placeholder</span>
              <span className="text-[9px] text-slate-400">Faridabad, Haryana (28.4089° N, 77.3178° E)</span>
              <span className="text-[9px] text-cyan-400 font-mono bg-cyan-950/40 px-2 py-0.5 border border-cyan-500/20 rounded mt-2">
                Placeholder - Embed your API Key / Map iframe
              </span>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphism p-8 rounded-3xl border border-slate-800 space-y-6">
              <h4 className="text-xl font-poppins font-bold text-white">
                Send a Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-slate-900/80 border ${
                        errors.name ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"
                      } focus:outline-none rounded-xl px-4 py-3 text-sm text-white transition-colors`}
                      placeholder="Your Name"
                    />
                    {errors.name && <span className="text-xs text-red-400 font-medium">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-slate-900/80 border ${
                        errors.email ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"
                      } focus:outline-none rounded-xl px-4 py-3 text-sm text-white transition-colors`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <span className="text-xs text-red-400 font-medium">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-slate-900/80 border ${
                      errors.subject ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"
                    } focus:outline-none rounded-xl px-4 py-3 text-sm text-white transition-colors`}
                    placeholder="Project Inquiry / Job Opening"
                  />
                  {errors.subject && <span className="text-xs text-red-400 font-medium">{errors.subject}</span>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-slate-900/80 border ${
                      errors.message ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-400"
                    } focus:outline-none rounded-xl px-4 py-3 text-sm text-white transition-colors resize-none`}
                    placeholder="Tell me about the opportunity or project details..."
                  />
                  {errors.message && <span className="text-xs text-red-400 font-medium">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3.5 px-6 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 hover:brightness-110 disabled:opacity-50 transition-all cursor-pointer shadow-lg shadow-primary/10"
                >
                  {status === "sending" ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>

                {/* Form feedback status alerts */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-400 border border-green-500/20 p-3 rounded-xl bg-green-950/20 text-xs font-semibold"
                  >
                    <CheckCircle size={16} />
                    <span>Message sent! Thank you for reaching out. (Mock Success)</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 border border-red-500/20 p-3 rounded-xl bg-red-950/20 text-xs font-semibold"
                  >
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please check fields and try again.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import WindowWrapper from "../Hooks/HOC/WindowWrapper";
import WindowController from "../WindowController";

import {
  FiMail,
  FiPhone,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiBriefcase,
  FiGlobe,
  FiCpu,
  FiUserCheck,
  FiCoffee,
  FiTwitter,
} from "react-icons/fi";
import { SiFreelancer } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const availabilityTags = [
  {
    label: "Open to Work",
    icon: FiUserCheck,
    color: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    label: "Remote",
    icon: FiGlobe,
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    label: "Freelancing",
    icon: SiFreelancer,
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    label: "Internship",
    icon: FiBriefcase,
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    label: "Collaboration",
    icon: FiCpu,
    color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  },
  {
    label: "Paid Work",
    icon: FiCoffee,
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
];

const contactLinks = [
  {
    id: "email",
    name: "Email Me",
    value: "gamerpandeyharsh@gmail.com",
    icon: FiMail,
    href: "mailto:your.gamerpandeyharsh@gmail.com",
    className:
      "col-span-2 row-span-1 bg-gradient-to-br from-emerald-600 to-sky-600 text-white",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    value: "@201Harsh",
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/201harsh/",
    className: "col-span-1 row-span-1 bg-[#0077b5] text-white",
  },
  {
    id: "github",
    name: "GitHub",
    value: "@201Harsh",
    icon: FiGithub,
    href: "https://github.com/201Harsh",
    className: "col-span-1 row-span-1 bg-[#24292e] text-white",
  },
  {
    id: "instagram",
    name: "Instagram",
    value: "@201harshs",
    icon: FiInstagram,
    href: "https://www.instagram.com/201harshs",
    className:
      "col-span-1 row-span-1 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 text-white",
  },
  {
    id: "twitter",
    name: "Twitter",
    value: "@codexharsh",
    icon: FiTwitter,
    href: "https://www.instagram.com/harsh.devx/",
    className:
      "col-span-1 row-span-1 bg-gradient-to-tr from-black-500 via-white-500 to-cyan-600 text-white",
  },
  {
    id: "phone",
    name: "Phone",
    value: "+91 9411378054",
    icon: FiPhone,
    href: "tel:+91 9411378054",
    className:
      "col-span-2 row-span-1 bg-gray-800 border border-white/10 text-gray-300",
  },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Contact = () => {
  useGSAP(() => {
    gsap.to("#animate-contact", {
      opacity: 1,
      duration: 0.5,
      ease: "circ.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div
      id="animate-contact"
      className="bg-[#121212]/95 opacity-0 backdrop-blur-2xl rounded-xl shadow-2xl flex flex-col overflow-hidden border border-white/10 ring-1 ring-white/5 font-sans"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-white/5 select-none z-10">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-red-500/10 rounded-md">
            <FiMail className="text-red-500 text-sm" />
          </div>
          <span className="font-semibold text-xs tracking-wide text-gray-200">
            Contact Me
          </span>
        </div>
        <WindowController windowKey="contact" />
      </div>

      <motion.div
        className="flex-1 overflow-y-auto p-6 custom-scrollbar"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500 to-purple-500 blur-lg opacity-50 animate-pulse"></div>
              <Image
                src="/images/gallery/3.png"
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="rounded-full object-cover border-2 border-white/10 relative z-10"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                Let's Work Together
              </h1>
              <p className="text-gray-400 text-sm md:text-base max-w-md">
                Have a project in mind or just want to say hi? I'm always open
                to discussing new ideas and opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">
              Current Status
            </h3>
            <div className="flex flex-wrap gap-2">
              {availabilityTags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${tag.color} transition-transform hover:scale-105 cursor-default`}
                >
                  <tag.icon />
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">
              Connect
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-75">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group p-5 rounded-2xl flex flex-col justify-between overflow-hidden transition-all shadow-lg ${link.className}`}
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="absolute -right-4 -bottom-4 text-8xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
                      <link.icon className="text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-tight">
                        {link.name}
                      </p>
                      <p className="text-xs opacity-70 mt-1 truncate">
                        {link.value}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const ContactWrapper = WindowWrapper(Contact, "contact");

export default ContactWrapper;

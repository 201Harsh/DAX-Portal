"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiGlobe,
  FiUserCheck,
  FiTwitter,
  FiArrowUpRight,
} from "react-icons/fi";
import MobileWindowWrapper from "../Hooks/MobileWindowWrapper";
import { SiFreelancer } from "react-icons/si";
import clsx from "clsx";

const MobileContact = () => {
  const availabilityTags = [
    {
      label: "Open to Work",
      icon: FiUserCheck,
      color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      label: "Remote",
      icon: FiGlobe,
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      label: "Freelance",
      icon: SiFreelancer,
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
  ];

  const contactLinks = [
    {
      id: "email",
      name: "Email Me",
      value: "gamerpandeyharsh@gmail.com",
      icon: FiMail,
      href: "mailto:gamerpandeyharsh@gmail.com",
      className:
        "col-span-2 bg-gradient-to-r from-emerald-900/80 to-emerald-600/20 border-emerald-500/30 text-emerald-100",
      accent: "text-emerald-400",
    },
    {
      id: "phone",
      name: "Call Me",
      value: "+91 9411378054",
      icon: FiPhone,
      href: "tel:+919411378054",
      className:
        "col-span-2 bg-gradient-to-r from-blue-900/80 to-blue-600/20 border-blue-500/30 text-blue-100",
      accent: "text-blue-400",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      value: "Connect",
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/201harsh/",
      className: "col-span-1 bg-[#0077b5]/20 border-[#0077b5]/50 text-blue-100",
      accent: "text-blue-400",
    },
    {
      id: "github",
      name: "GitHub",
      value: "Follow",
      icon: FiGithub,
      href: "https://github.com/201Harsh",
      className: "col-span-1 bg-[#24292e]/40 border-white/20 text-gray-200",
      accent: "text-white",
    },
    {
      id: "instagram",
      name: "Insta",
      value: "DM Me",
      icon: FiInstagram,
      href: "https://www.instagram.com/201harshs",
      className:
        "col-span-1 bg-gradient-to-br from-purple-500/20 to-orange-500/20 border-pink-500/30 text-pink-100",
      accent: "text-pink-400",
    },
    {
      id: "twitter",
      name: "X / Twitter",
      value: "Follow",
      icon: FiTwitter,
      href: "https://www.instagram.com/harsh.devx/",
      className: "col-span-1 bg-white/5 border-white/10 text-gray-300",
      accent: "text-gray-400",
    },
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <div className="bg-[#050505] w-full h-full flex flex-col relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[30%] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[30%] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="flex-1 overflow-y-auto p-5 custom-scrollbar relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-md mx-auto space-y-8 pb-10">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center mt-4"
          >
            <div className="relative w-28 h-28 mb-4">
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500 to-emerald-500 blur-lg opacity-60 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full p-0.5 bg-linear-to-tr from-blue-400 to-emerald-400">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-black">
                  <Image
                    src="/images/gallery/1.png" 
                    alt="Profile"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
              Let's Build <br />{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
                Something Great
              </span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[80%]">
              Open for collaborations, freelance projects, and full-time
              opportunities.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2"
          >
            {availabilityTags.map((tag, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border bg-opacity-10 backdrop-blur-sm ${tag.color}`}
              >
                <tag.icon className="text-xs" />
                <span className="text-[11px] font-semibold uppercase tracking-wide">
                  {tag.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-center gap-2 px-1">
              <div className="h-px bg-white/10 flex-1"></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Direct Lines
              </span>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.96 }}
                  className={clsx(
                    "relative group p-4 rounded-2xl border backdrop-blur-md overflow-hidden flex flex-col justify-between min-h-25",
                    link.className
                  )}
                >
                  <link.icon className="absolute -right-3 -bottom-3 text-7xl opacity-5 group-hover:scale-110 transition-transform duration-500" />

                  <div className="flex justify-between items-start relative z-10">
                    <div
                      className={`p-2 rounded-lg bg-white/10 backdrop-blur-md ${link.accent}`}
                    >
                      <link.icon className="text-lg" />
                    </div>
                    <FiArrowUpRight className="text-white/30" />
                  </div>

                  <div className="relative z-10 mt-3">
                    <h3 className="font-bold text-base text-white leading-none mb-1">
                      {link.name}
                    </h3>
                    <p className="text-[11px] font-mono opacity-70 truncate">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center pt-4 pb-8">
            <p className="text-[10px] text-gray-600">
              Local Time:{" "}
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              • India
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const MobileContactWrapper = MobileWindowWrapper(MobileContact, "contact");
export default MobileContactWrapper;

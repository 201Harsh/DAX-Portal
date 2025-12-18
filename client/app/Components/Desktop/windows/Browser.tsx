import {
  FiArrowLeft,
  FiArrowRight,
  FiHome,
  FiRefreshCw,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import WindowWrapper from "../Hooks/HOC/WindowWrapper";
import WindowController from "../WindowController";
import { BsFillShieldLockFill, BsLightningChargeFill } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";

const Browser = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#0f0f0f] text-white w-full h-full rounded-xl font-mono text-sm shadow-2xl flex flex-col overflow-hidden border border-[#333] relative group"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-[#333] z-10">
        <div className="flex items-center gap-4 opacity-70 transition-opacity hover:opacity-100">
          <div className="flex gap-3 text-white">
            <FiArrowLeft className="h-4 w-4 cursor-pointer transition-colors" />
            <FiArrowRight className="h-4 w-4 cursor-pointer transition-colors" />
            <FiRefreshCw className="h-3.5 w-3.5 mt-px0 cursor-pointer transition-colors" />
          </div>

          <FiHome className="h-4 w-4 cursor-pointer transition-colors" />
          <div className="bg-[#0a0a0a] border border-[#333] px-4 py-1.5 rounded-full flex items-center gap-3 min-w-75 group-hover:border-[#444] transition-colors shadow-inner">
            <BsFillShieldLockFill className="h-3 w-3 text-emerald-500" />
            <span className="text-xs text-gray-500 selection:bg-emerald-500/30">
              <span className="text-gray-400">dax@root://</span>
              <span className="text-emerald-400">root/system/protocol</span>
              /identify/desk/about/201Harsh
            </span>
          </div>
        </div>
        <WindowController windowKey="browser" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 overflow-y-auto p-8 relative z-0 flex flex-col justify-center items-center"
      >
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-64 h-64 mb-6 group/img">
              <div className="absolute -inset-1 bg-linear-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover/img:opacity-75 transition duration-1000 group-hover/img:duration-200" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[#444] bg-[#111]">
                <Image
                  width={500}
                  height={500}
                  src="/images/dev.jpeg"
                  alt="Harsh Pandey"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                  priority
                />
              </div>

              <div className="absolute -bottom-3 right-4 bg-[#1a1a1a] border border-[#333] px-3 py-1 rounded-full flex items-center gap-2 shadow-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                  Online
                </span>
              </div>
            </div>

            <div className="flex gap-4 text-gray-500">
              <a href="https://github.com/201Harsh" target="_blank">
                <FiGithub className="hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/201harsh/" target="_blank">
                <FiLinkedin className="hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/harsh.devx/" target="_blank">
                <FiInstagram className="hover:text-pink-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </motion.div>

          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <motion.div variants={itemVariants}>
              <h2 className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Developer Identity
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                Harsh{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-violet-500">
                  Pandey
                </span>
              </h1>
              <p className="text-gray-400 text-lg flex items-center justify-center md:justify-start gap-2">
                <BsLightningChargeFill className="text-yellow-400 text-sm" />{" "}
                Full Stack Developer
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#1a1a1a]/50 p-6 rounded-xl border border-[#333] backdrop-blur-sm relative overflow-hidden group/card"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-pink-500 to-purple-500" />
              <p className="text-gray-300 leading-relaxed relative z-10">
                Engineering complete web systems — from precision UI to scalable
                backend logic and autonomous AI agents. Focused on{" "}
                <span className="text-white font-semibold">
                  original products, not replicas
                </span>
                .
              </p>

              <span className="absolute -right-4 -bottom-8 text-9xl text-[#222] font-serif opacity-50 select-none z-0">
                ”
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <button className="bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 cursor-pointer group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-[#111] font-mono rounded-lg focus:outline-none ring-offset-2 focus:ring-2 ring-pink-500">
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-linear-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative flex items-center gap-3">
                  INITIATE_DEEP_DIVE_SEQUENCE
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="py-2 px-4 bg-[#111] border-t border-[#333] flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
        <span>Memory: 64%</span>
        <span>Secured via TLS 1.3</span>
      </div>
    </motion.div>
  );
};

const BrowserWrapper = WindowWrapper(Browser, "browser");

export default BrowserWrapper;

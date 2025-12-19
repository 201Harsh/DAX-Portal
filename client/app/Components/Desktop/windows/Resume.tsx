"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FiDownload, FiFileText } from "react-icons/fi";
import WindowWrapper from "../Hooks/HOC/WindowWrapper";
import WindowController from "../WindowController";
import { motion } from "framer-motion";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full text-gray-500 animate-pulse">
        Initializing PDF Engine...
      </div>
    ),
  }
);

const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState<any>(1);
  const [scale] = useState(1.0);
  const [isWorkerLoaded, setIsWorkerLoaded] = useState(false);

  useEffect(() => {
    import("react-pdf").then((module) => {
      const pdfjs = module.pdfjs;
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      setIsWorkerLoaded(true);
    });
  }, []);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#1e1e1e] w-full h-full rounded-xl font-mono text-sm shadow-2xl flex flex-col overflow-hidden border border-[#333] relative"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d]/90 backdrop-blur-md border-b border-black z-10 select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] rounded-lg border border-[#444]">
            <FiFileText className="text-pink-400" />
            <span className="font-semibold text-xs text-gray-300 tracking-wide">
              Resume.pdf
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/files/Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-md transition-all shadow-lg hover:shadow-blue-500/20 font-medium"
          >
            <span>Download</span>
            <FiDownload />
          </a>
          <WindowController windowKey="resume" />
        </div>
      </div>

      {isWorkerLoaded && (
        <Document
          file="/files/Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-96 w-full text-emerald-400">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-400 mr-3"></div>
              Loading Document...
            </div>
          }
          error={
            <div className="text-red-400 p-10 bg-[#222] rounded-xl border border-red-900/50">
              Failed to load PDF. File might be missing.
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={true}
            renderTextLayer={true}
            scale={scale}
            className="shadow-2xl border border-[#333]"
          />
        </Document>
      )}
    </motion.div>
  );
};

const ResumeWrapper = WindowWrapper(Resume, "resume");

export default ResumeWrapper;

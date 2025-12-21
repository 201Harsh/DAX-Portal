"use client";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import WindowWrapper from "../Hooks/HOC/WindowWrapper";
import WindowController from "../WindowController";
import clsx from "clsx";

import { FiSearch, FiX } from "react-icons/fi";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscSettingsGear,
  VscAccount,
  VscChevronRight,
  VscChevronDown,
} from "react-icons/vsc";
import {
  SiCss3,
  SiHtml5,
  SiReact,
  SiPython,
  SiJson,
  SiTypescript,
} from "react-icons/si";

const INITIAL_FILES = [
  {
    id: "1",
    name: "app.tsx",
    language: "typescript",
    icon: <SiReact className="text-blue-400" />,
    content: `import React from 'react';\n\nconst App = () => {\n  return (\n    <div className="app">\n      <h1>Hello World from DAX-OS!</h1>\n    </div>\n  );\n};\n\nexport default App;`,
  },
  {
    id: "2",
    name: "globals.css",
    language: "css",
    icon: <SiCss3 className="text-blue-500" />,
    content: `body {\n  background-color: #1e1e1e;\n  color: #ffffff;\n  font-family: 'Inter', sans-serif;\n}`,
  },
  {
    id: "3",
    name: "utils.ts",
    language: "typescript",
    icon: <SiTypescript className="text-blue-600" />,
    content: `export const formatDate = (date: Date) => {\n  return new Intl.DateTimeFormat('en-US').format(date);\n};`,
  },
  {
    id: "4",
    name: "index.html",
    language: "html",
    icon: <SiHtml5 className="text-orange-500" />,
    content: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>Dax OS</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>`,
  },
  {
    id: "5",
    name: "script.py",
    language: "python",
    icon: <SiPython className="text-yellow-400" />,
    content: `def main():\n    print("Hello from Python!")\n\nif __name__ == "__main__":\n    main()`,
  },
  {
    id: "6",
    name: "package.json",
    language: "json",
    icon: <SiJson className="text-yellow-200" />,
    content: `{\n  "name": "dax-os",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0"\n  }\n}`,
  },
];

const DaxCode = () => {
  // Initialize state with a COPY of the files so we can edit them
  const [openFiles, setOpenFiles] = useState<any[]>([INITIAL_FILES[0]]); 
  const [activeFileId, setActiveFileId] = useState<string>("1");
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  // Derive the active file from the STATE, not the constant
  const activeFile = openFiles.find((f) => f.id === activeFileId);

  // --- Handlers ---
  const handleOpenFile = (file: any) => {
    // Check if file is already open in our state
    const existingFile = openFiles.find((f) => f.id === file.id);
    
    if (!existingFile) {
      // If not open, add it to state
      setOpenFiles([...openFiles, file]);
    }
    // Set active ID (whether it was new or existing)
    setActiveFileId(file.id);
  };

  const handleCloseFile = (e: React.MouseEvent, fileId: string) => {
    e.stopPropagation(); // Prevent clicking the tab behind the X
    const newFiles = openFiles.filter((f) => f.id !== fileId);
    setOpenFiles(newFiles);

    // If we closed the active file, switch to the last one available
    if (activeFileId === fileId && newFiles.length > 0) {
      setActiveFileId(newFiles[newFiles.length - 1].id);
    }
  };

  // --- EDITOR TYPING HANDLER ---
  const handleEditorChange = (value: string | undefined) => {
    // Update the content of the currently active file in the state
    setOpenFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === activeFileId ? { ...file, content: value || "" } : file
      )
    );
  };

  return (
    <div className="bg-[#1e1e1e] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-white/10 ring-1 ring-white/5 font-sans h-full w-full">
      
      <div className="flex items-center justify-between px-4 py-2 bg-[#181818] border-b border-black select-none z-20 shrink-0 h-10">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 text-blue-500">
            <VscFiles />
          </div>
          <span className="font-medium text-xs text-gray-400">
            Dax Code - {activeFile ? activeFile.name : "Untitled"}
          </span>
        </div>

        <div className="flex-1 max-w-md mx-4 hidden md:flex justify-center">
          <div className="bg-[#2d2d2d] text-gray-400 text-[10px] px-3 py-1 rounded w-64 flex items-center gap-2 border border-white/5">
            <FiSearch /> dax-code project
          </div>
        </div>

        <WindowController windowKey="daxcode" />
      </div>

      {/* --- 2. MAIN WORKSPACE --- */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* A. ACTIVITY BAR */}
        <div className="w-12 bg-[#181818] flex flex-col items-center py-4 gap-6 border-r border-white/5 shrink-0 z-10 text-gray-500">
          <ActivityIcon icon={<VscFiles />} active />
          <ActivityIcon icon={<VscSearch />} />
          <ActivityIcon icon={<VscSourceControl />} />
          <ActivityIcon icon={<VscDebugAlt />} />
          <ActivityIcon icon={<VscExtensions />} />
          <div className="mt-auto flex flex-col gap-6">
            <ActivityIcon icon={<VscAccount />} />
            <ActivityIcon icon={<VscSettingsGear />} />
          </div>
        </div>

        <div className="w-56 bg-[#181818] flex flex-col border-r border-black shrink-0">
          <div className="h-9 px-4 flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Explorer
          </div>

          <div
            className="px-2 py-1 flex items-center gap-1 text-gray-300 font-bold text-xs cursor-pointer hover:bg-white/5"
            onClick={() => setIsExplorerOpen(!isExplorerOpen)}
          >
            {isExplorerOpen ? <VscChevronDown /> : <VscChevronRight />}
            <span>DAX-PROJECT</span>
          </div>

          {isExplorerOpen && (
            <div className="flex-1 overflow-y-auto mt-1 custom-scrollbar">
              {INITIAL_FILES.map((file) => (
                <div
                  key={file.id}
                  onClick={() => handleOpenFile(file)}
                  className={clsx(
                    "flex items-center gap-2 px-6 py-1 cursor-pointer text-sm hover:bg-[#2a2d2e] transition-colors border-l-2",
                    activeFileId === file.id
                      ? "bg-[#37373d] text-white border-blue-500"
                      : "text-gray-400 border-transparent"
                  )}
                >
                  <span className="shrink-0">{file.icon}</span>
                  <span className="truncate">{file.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden relative">
          
          {openFiles.length > 0 ? (
            <div className="flex bg-[#181818] overflow-x-auto border-b border-black scrollbar-hide">
              {openFiles.map((file) => (
                <div
                  key={file.id}
                  onClick={() => setActiveFileId(file.id)}
                  className={clsx(
                    "group flex items-center gap-2 px-3 py-2 min-w-fit max-w-50 text-xs cursor-pointer border-r border-white/5 select-none",
                    activeFileId === file.id
                      ? "bg-[#1e1e1e] text-white border-t-2 border-t-blue-500"
                      : "bg-[#2d2d2d] text-gray-500 hover:bg-[#1e1e1e]"
                  )}
                >
                  <span className="text-[14px]">{file.icon}</span>
                  <span className="truncate">{file.name}</span>
                  <span
                    onClick={(e) => handleCloseFile(e, file.id)}
                    className="opacity-0 group-hover:opacity-100 hover:bg-gray-600 rounded p-0.5 transition-all"
                  >
                    <FiX />
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-9 bg-[#181818] border-b border-black"></div>
          )}

          {/* Monaco Editor */}
          <div className="flex-1 relative">
            {activeFile ? (
              <Editor
                height="100%"
                width="100%"
                path={activeFile.name} 
                language={activeFile.language}
                value={activeFile.content}
                onChange={handleEditorChange} 
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  padding: { top: 16 },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  wordWrap: "on",
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-600">
                <div className="text-6xl mb-4 opacity-20">
                  <VscFiles />
                </div>
                <p>Select a file to start coding</p>
                <p className="text-xs mt-2">Ctrl+Shift+P to search files</p>
              </div>
            )}
          </div>

          <div className="h-6 bg-[#007acc] text-white text-[10px] flex items-center px-3 justify-between select-none">
            <div className="flex gap-4">
              <span className="flex items-center gap-1">
                <VscSourceControl className="text-xs" /> main*
              </span>
              <span>0 errors, 0 warnings</span>
            </div>
            <div className="flex gap-4">
              {activeFile && (
                <>
                  <span>Ln 12, Col 34</span>
                  <span>UTF-8</span>
                  <span className="uppercase">{activeFile.language}</span>
                </>
              )}
              <span className="hover:bg-white/20 px-1 cursor-pointer">
                Prettier
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityIcon = ({ icon, active }: { icon: any; active?: boolean }) => (
  <div
    className={clsx(
      "w-12 h-12 flex items-center justify-center text-xl cursor-pointer border-l-2 transition-colors hover:text-white",
      active ? "text-white border-white" : "text-gray-500 border-transparent"
    )}
  >
    {icon}
  </div>
);

const DaxcodeWrapper = WindowWrapper(DaxCode, "daxcode");
export default DaxcodeWrapper;
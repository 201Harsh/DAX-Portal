import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFolderPlus, FiImage, FiTerminal } from "react-icons/fi";
import { CgBrowser } from "react-icons/cg";
import useWindowsStore from "./Hooks/WindowsStore";
import { FcContacts } from "react-icons/fc";

interface DropDownMenuProps {
  x: number;
  y: number;
  visible: boolean;
  onClose?: () => void;
}

const MenuItems = [
  {
    icon: FiImage,
    label: "Change Wallpaper",
    kind: "browser",
  },
  {
    icon: CgBrowser,
    label: "Browser",
    kind: "browser",
  },
  {
    icon: FiTerminal,
    label: "Terminal",
    kind: "terminal",
  },
  {
    icon: FiFolderPlus,
    label: "File Manager",
    kind: "finder",
    hasSubMenu: true,
  },
  {
    icon: FcContacts,
    label: "Contacts",
    kind: "contact",
  },
];

const DropDownMenu = ({ x, y, visible }: DropDownMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="absolute w-52 bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden z-9999 py-1.5"
          style={{
            top: y,
            left: x,
            transform: "translate(0, 0)",
          }}
          onClick={(e) => e.stopPropagation()}
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Menu Items */}
          <div className="flex flex-col text-sm gap-3 text-gray-200 font-medium px-2 py-1">
            {MenuItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={<item.icon className="h-4 w-4" />}
                label={item.label}
                hasSubMenu={item.hasSubMenu}
                kind={item.kind}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MenuItem = ({ icon, label, hasSubMenu, kind }: any) => {
  const { openWindow } = useWindowsStore();

  return (
    <div
      onClick={() => openWindow(kind)}
      className="group relative flex items-center justify-between px-3 py-1.5 mx-1 rounded-md hover:bg-red-500/20 cursor-default transition-colors"
    >
      <div className="flex items-center gap-2.5">
        <span className="text-gray-400 group-hover:text-white text-sm">
          {icon}
        </span>
        <span>{label}</span>
      </div>
      {hasSubMenu && (
        <span className="text-xs text-gray-500 group-hover:text-white">▶</span>
      )}
    </div>
  );
};

export default DropDownMenu;

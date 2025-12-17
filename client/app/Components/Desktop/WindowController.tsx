import { VscChromeMaximize, VscChromeClose } from "react-icons/vsc";
import useWindowsStore from "./Hooks/WindowsStore";

const WindowController = ({ windowKey }: { windowKey: string }) => {
  const { closeWindow } = useWindowsStore();
  return (
    <div className="flex items-center gap-3">
      <div className="group cursor-pointer p-1 rounded hover:bg-gray-900 transition-colors">
        <VscChromeMaximize
          className="text-gray-400 group-hover:text-white"
          size={16}
        />
      </div>

      <div className="group cursor-pointer p-1 rounded hover:bg-red-600 transition-colors">
        <VscChromeClose
          onClick={() => {
            closeWindow(windowKey);
          }}
          className="text-gray-400 group-hover:text-white"
          size={16}
        />
      </div>
    </div>
  );
};

export default WindowController;

import {
  VscChromeClose,
  VscChromeMinimize,
} from "react-icons/vsc";
import useWindowsStore from "./Hooks/WindowsStore";

const WindowController = ({ windowKey }: { windowKey: string }) => {
  const { closeWindow } = useWindowsStore();

  return (
    <div className="flex items-center gap-2">
      <div
        onClick={() => {
          closeWindow(windowKey);
        }}
        className="group cursor-pointer p-1 rounded hover:bg-green-700 transition-colors"
        title="Minimize"
      >
        <VscChromeMinimize
          className="text-gray-400 group-hover:text-white"
          size={18}
        />
      </div>

      <div
        onClick={() => closeWindow(windowKey)}
        className="group cursor-pointer p-1 rounded hover:bg-red-600 transition-colors"
        title="Close"
      >
        <VscChromeClose
          className="text-gray-400 group-hover:text-white"
          size={18}
        />
      </div>
    </div>
  );
};

export default WindowController;

import { useRef } from "react";
import useWindowsStore from "../WindowsStore";

const WindowWrapper = (Componet: any, windowKey: string) => {
  const Wrapped = (props: any) => {
    const { focusWindow, windows } = useWindowsStore();
    const { isOpen, zIndex } = windows[windowKey];
    const Ref = useRef<HTMLDivElement | null>(null);

    if (!isOpen) return null;

    return (
      <section id={windowKey} ref={Ref} style={{ zIndex }} className="absolute">
        <Componet {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Componet.displayName || Componet.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;

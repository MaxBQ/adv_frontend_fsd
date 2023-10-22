import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children?: React.ReactNode;
  wrapperId?: string;
}
function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.getElementById("app").appendChild(wrapperElement);
  return wrapperElement;
}

export const Portal = (props: PortalProps) => {
  const { children, wrapperId = "react-portal-wrapper" } = props;
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

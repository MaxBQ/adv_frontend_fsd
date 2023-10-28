import { createPortal } from "react-dom";

interface PortalProps {
  children?: React.ReactNode;
  element?: HTMLElement;
}
// function createWrapperAndAppendToBody(wrapperId: string) {
//   const wrapperElement = document.createElement("div");
//   wrapperElement.setAttribute("id", wrapperId);
//   document.getElementById("app").appendChild(wrapperElement);
//   return wrapperElement;
// }

export const Portal = (props: PortalProps) => {
  const { children, element = document.body } = props;

  // useLayoutEffect(() => {
  //   let element = document.getElementById(wrapperId);
  //   let systemCreated = false;
  //   if (!element) {
  //     systemCreated = true;
  //     element = createWrapperAndAppendToBody(wrapperId);
  //   }
  //   setWrapperElement(element);
  //   return () => {
  //     if (systemCreated && element.parentNode) {
  //       element.parentNode.removeChild(element);
  //     }
  //   };
  // }, [wrapperId]);

  // if (wrapperElement === null) return null;

  return createPortal(children, element);
};

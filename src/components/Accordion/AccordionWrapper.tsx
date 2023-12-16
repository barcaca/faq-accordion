import { ReactNode } from "react";

interface AccordionWrapperProps {
  children: ReactNode;
}

export function AccordionWrapper({ children }: AccordionWrapperProps) {
  return (
    <details
      className="group border-b border-purple-950 py-5 "
      role="presentation"
    >
      {children}
    </details>
  );
}

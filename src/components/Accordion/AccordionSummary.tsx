import { ReactNode } from "react";

interface AccordionSummaryProps {
  title: string;
  children: ReactNode;
}

export function AccordionSummary({ title, children }: AccordionSummaryProps) {
  return (
    <summary
      className="flex items-center justify-between gap-1 font-semibold "
      aria-label="details"
    >
      <p className=" flex-1 cursor-pointer text-purple-950 hover:text-purple-600">
        {title}
      </p>
      {children}
    </summary>
  );
}

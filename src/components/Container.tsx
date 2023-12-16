import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto grid h-screen max-w-lg grid-rows-[1fr_80px] items-center p-6 md:justify-center">
      {children}
    </div>
  );
}

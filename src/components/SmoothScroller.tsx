"use client";
import useLenis from "@/hooks/useLenis";
import type { ReactNode } from "react";

interface SmoothScrollerProps {
  children: ReactNode;
}

const SmoothScroller = ({ children }: SmoothScrollerProps) => {
  useLenis();
  return <>{children}</>;
};

export default SmoothScroller;

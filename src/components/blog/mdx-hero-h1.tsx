"use client";

import React, { useContext, useEffect, useRef } from "react";
import { HeroContentContext } from "./hero-context";

// Helper to extract plain text from React children
const childrenToText = (node: React.ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(childrenToText).join("");
  if (React.isValidElement(node)) {
    const el = node as React.ReactElement<any, any>;
    return childrenToText(el.props.children);
  }
  return "";
};

export default function HeroH1({ children }: { children: React.ReactNode }) {
  const { setTitle } = useContext(HeroContentContext);
  const didSetRef = useRef(false);

  useEffect(() => {
    if (setTitle && !didSetRef.current) {
      setTitle(childrenToText(children).trim());
      didSetRef.current = true;
    }
  }, [children, setTitle]);

  // Do not render duplicate title in body
  return null;
} 
"use client";

import React, { useContext, useEffect, useRef } from "react";
import { HeroContentContext } from "./hero-context";

const childrenToText = (node: React.ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(childrenToText).join("");
  if (React.isValidElement(node)) {
    const el = node as React.ReactElement<any, any>;
    return childrenToText(el.props.children);
  }
  return "";
};

export default function HeroBlockquote({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  const { setDescription } = useContext(HeroContentContext);
  const didSetRef = useRef(false);

  useEffect(() => {
    if (setDescription && !didSetRef.current) {
      setDescription(childrenToText(children).trim());
      didSetRef.current = true;
    }
  }, [children, setDescription]);

  // Render nothing for the first (hero) description
  if (!didSetRef.current) {
    return null;
  }

  return (
    <blockquote className="border-l-4 border-accent1 pl-4 italic text-fg2 mb-6" {...props}>
      {children}
    </blockquote>
  );
} 
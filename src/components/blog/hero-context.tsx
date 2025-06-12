+"use client";

export interface HeroContentSetter {
  setTitle?: (title: string) => void;
  setDescription?: (desc: string) => void;
}

import { createContext } from "react";

export const HeroContentContext = createContext<HeroContentSetter>({}); 
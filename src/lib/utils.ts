// Utility to concatenate class names, ignoring falsy values.
export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ")
} 
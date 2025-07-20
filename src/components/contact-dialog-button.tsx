"use client";

import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Button } from "./ui/button";
import { ArrowRight } from "@carbon/icons-react";

const LazyContactDialog = dynamic(() => import("./contact-dialog").then((m) => m.ContactDialog), {
  ssr: false,
});

interface ContactDialogButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  label?: string;
}

export function ContactDialogButton({ label = "CONTACT US", onClick: externalOnClick, ...props }: ContactDialogButtonProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    externalOnClick?.(e);
    setOpen(true);
  }, [externalOnClick]);

  return (
    <>
      <Button {...props} onClick={handleOpen}>
        {label} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      {open && (
        <LazyContactDialog open={open} onOpenChange={setOpen} />
      )}
    </>
  );
} 
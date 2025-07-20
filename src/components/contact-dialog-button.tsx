'use client'

import { Button } from './ui/button'
import { ArrowRight } from '@carbon/icons-react'
import dynamic from 'next/dynamic'

// Lazy-load the dialog so Radix UI code isn’t in the main bundle
const ContactDialog = dynamic(() => import('./contact-dialog').then(m => m.ContactDialog), {
  ssr: false,
})

interface ContactDialogButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  label?: string
}

export function ContactDialogButton({ label = 'CONTACT US', ...props }: ContactDialogButtonProps) {
  return (
    <ContactDialog>
      <Button {...props}>
        {label} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </ContactDialog>
  )
} 
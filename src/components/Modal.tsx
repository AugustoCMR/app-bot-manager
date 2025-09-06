"use client"

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export default function Component({open, onOpenChange, children} : Props) {


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}


import { useId } from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type LoginModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function LoginModal({ open = true, onOpenChange }: LoginModalProps) {
  const id = useId();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <svg
              className="stroke-zinc-800 dark:stroke-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
            </svg>
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">Bem-vindo!</DialogTitle>
            <DialogDescription className="sm:text-center">
              Insira suas credenciais para acessar sua conta.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-name`}>Usuário</Label>
              <Input
                id={`${id}-name`}
                placeholder="Insira seu usuário"
                type="email"
                required
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-password`}>Senha</Label>
              <Input
                id={`${id}-password`}
                placeholder="Insira sua senha"
                type="password"
                required
              />
            </div>
          </div>
          <Button type="button" className="w-full cursor-pointer">
            Entrar
          </Button>
        </form>

        <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
          <span className="text-muted-foreground text-xs">Ou</span>
        </div>

        <Button variant="outline" className="cursor-pointer">Criar sua conta</Button>
      </DialogContent>
    </Dialog>
  );
}

import React from "react";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";

export default function CredenzaPopUp({
  open,
  onOpenChange,
  title,
  children,
}: {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Credenza open={open} onOpenChange={onOpenChange}>
      <CredenzaTrigger asChild>
        <></>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle className="text-start">{title}</CredenzaTitle>
        </CredenzaHeader>
        <CredenzaBody>
          <>{children}</>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
}

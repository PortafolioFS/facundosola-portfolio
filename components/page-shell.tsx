import { ReactNode } from "react";

import { BackgroundFx } from "@/components/background-fx";
import { CommandPalette } from "@/components/command-palette";
import { CursorTrail } from "@/components/cursor-trail";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type Props = {
  children: ReactNode;
};

export function PageShell({ children }: Props) {
  return (
    <>
      <Navbar />
      <BackgroundFx />
      <CursorTrail />
      {children}
      <Footer />
      <CommandPalette />
    </>
  );
}

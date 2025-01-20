"use client";

import { Button } from "@/components/ui/button";
import { IconPalette, IconPaletteOff } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="size-12 text-white hover:text-white hover:bg-white/10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <IconPalette className="size-4 text-white dark:hidden" />
      <IconPaletteOff className="hidden size-4 text-white dark:block" />
    </Button>
  );
}

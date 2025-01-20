"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/personal-details";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";
import { useTheme } from "next-themes";


export default function Navbar() {
  const theme = useTheme();
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full"></div>
      <ShineBorder 
        borderRadius={50} 
        borderWidth={5}
        color={[
          "rgb(253 224 71)",
          "rgb(134 239 172)", 
          "rgb(249 168 212)",
          "rgb(147 197 253)"
        ]}
        className="z-30 pointer-events-auto relative mx-auto"
      >
        <Dock className="min-h-full h-full items-center px-1 bg-[rgb(23,23,23)] transform-gpu border border-[rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 text-white hover:text-white hover:bg-white/10"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full bg-white/20" />
          {Object.entries(DATA.contact.social)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 text-white hover:text-white hover:bg-white/10"
                      )}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          <Separator orientation="vertical" className="h-full py-2 bg-white/20" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="text-white">
                  <ModeToggle />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Color Mode</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </ShineBorder>
    </div>
  );
}

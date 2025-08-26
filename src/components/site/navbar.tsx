"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto max-w-5xl flex items-center justify-between h-14 px-4">
        <Link href="#home" className="font-semibold tracking-tight">
          Cherokee Cordero
        </Link>
        <nav className="hidden md:flex items-center gap-3">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="default" size="sm">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

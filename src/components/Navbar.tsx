import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "My Work" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "relative py-1 text-sm font-medium transition-colors hover:text-foreground",
    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100",
    isActive ? "text-foreground after:scale-x-100 after:origin-bottom-left" : "text-muted-foreground"
  );

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="font-display text-xl font-semibold tracking-tight text-foreground">
          Alex Morgan
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="font-display text-lg">Navigation</SheetTitle>
            <nav className="mt-8 flex flex-col gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-lg font-medium transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CoinPulseIcon from "@/public/coinpulseicon.png";
import { Link003 } from "@/components/ui/css-link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Nav1Props {
  logoSrc?: string;
  logoAlt?: string;
  logoText?: string;
  logoLinkHref?: string;
  navigation?: { name: string; href: string }[];
  loginHref?: string;
  loginText?: string;
  getStartedHref?: string;
  getStartedText?: string;
}

export function Nav1({
  logoAlt,
  logoText,
  logoLinkHref,
  navigation,
  loginHref,
  loginText,
  getStartedHref,
  getStartedText,
}: Nav1Props) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const defaultLogoAlt = "CoinPulse Logo";
  const defaultLogoText = "CoinPulse";
  const defaultLogoLinkHref = "/";
  const defaultNavigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Estadísticas", href: "/statistic" },
    { name: "Wishlist", href: "/wishlist" },
  ];
  const defaultLoginHref = "/login";
  const defaultLoginText = "Iniciar Sesión";
  const defaultGetStartedHref = "/get-started";
  const defaultGetStartedText = "Comenzar";

  const currentLogoAlt = logoAlt ?? defaultLogoAlt;
  const currentLogoText = logoText ?? defaultLogoText;
  const currentLogoLinkHref = logoLinkHref ?? defaultLogoLinkHref;
  const currentNavigation = navigation ?? defaultNavigation;
  const currentLoginHref = loginHref ?? defaultLoginHref;
  const currentLoginText = loginText ?? defaultLoginText;
  const currentGetStartedHref = getStartedHref ?? defaultGetStartedHref;
  const currentGetStartedText = getStartedText ?? defaultGetStartedText;

  return (
    <header className="border-b bg-background w-full flex justify-center">
      {/* CAMBIO: Se añade justify-between para distribuir los 3 elementos principales. */}
      <nav className="flex h-16 w-full items-center justify-between px-4">
        {/* CAMBIO: Se elimina md:flex-1. El ancho será el de su contenido. */}
        <div className="flex justify-start">
          <a href={currentLogoLinkHref} className="flex items-center gap-2">
            <Image
              src={CoinPulseIcon}
              alt={currentLogoAlt}
              width={64}
              height={64}
              className="dark:invert"
            />
            <span className="text-xl font-semibold">{currentLogoText}</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {currentNavigation.map((item) => (
            <Link003
              key={item.name}
              href={item.href}
              className="text-sm transition-colors hover:text-foreground"
            >
              {item.name}
            </Link003>
          ))}
        </div>

        {/* CAMBIO: Se elimina flex-1. El ancho será el de su contenido. */}
        <div className="flex items-center justify-end gap-4">
          {/* Botones de Desktop */}
          <div className="hidden items-center md:flex lg:gap-4">
            <AnimatedThemeToggler />
            <Button variant="ghost" asChild>
              <Link href={currentLoginHref}>{currentLoginText}</Link>
            </Button>
            <Button asChild>
              <Link href={currentGetStartedHref}>{currentGetStartedText}</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobile ? (
            <Sheet>
              <div className="flex gap-4">
                <AnimatedThemeToggler></AnimatedThemeToggler>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="size-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <SheetContent side="right">
                <VisuallyHidden>
                  <SheetTitle>Menú de navegación</SheetTitle>
                </VisuallyHidden>
                <div className="mt-8 flex flex-col gap-4 p-4">
                  {currentNavigation.map((item) => (
                    <div key={item.name} className="text-center">
                      <Link
                        href={item.href}
                        className="text-sm transition-colors hover:text-foreground"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                  <hr className="my-4" />
                  <Button variant="ghost" asChild className="justify-start">
                    <Link href={currentLoginHref}>{currentLoginText}</Link>
                  </Button>
                  <Button asChild>
                    <Link href={currentGetStartedHref}>
                      {currentGetStartedText}
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

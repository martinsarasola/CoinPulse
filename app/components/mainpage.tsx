"use client";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { motion } from "framer-motion";
import { IconCloudBlock } from "./iconcloudblock";
import { FlowButton } from "@/components/ui/flow-button";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MainPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  console.log(isMobile);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden border">
      <GlowCard customSize={true} glowColor="blue" className="w-auto">
        <div className="flex flex-col items-center justify-center gap-2 md:px-4 pt-4">
          <div className="text-3xl md:text-5xl font-bold text-white text-center">
            LA BRUJULA DE TUS ACTIVOS DIGITALES
          </div>
          <div className="font-extralight text-base md:text-2xl text-white py-4 text-center">
            Mantente informado, toma mejores decisiones.
          </div>

          <Link href="/dashboard">
            <FlowButton text="Comenzar"></FlowButton>
          </Link>

          <IconCloudBlock></IconCloudBlock>
        </div>
      </GlowCard>
    </div>
  );
}

"use client";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { motion } from "framer-motion";
import { IconCloudBlock } from "./iconcloudblock";
import { Button } from "@/components/ui/button";
import { FlowButton } from "@/components/ui/flow-button";
import Link from "next/link";

export default function MainPage() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden border">
      <ShaderAnimation />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute flex flex-col gap-4 items-center justify-center px-4 max-w-8/12"
      >
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
      </motion.div>
    </div>
  );
}

import { IconCloud } from "@/components/ui/icon-cloud";
import { useCryptoData } from "@/app/hooks/useCryptoData";
import type { Criptomoneda } from "@/app/types/crypto";

export const IconCloudBlock = () => {
  const { data, isLoading } = useCryptoData();

  const imagenes =
    data?.slice(0, 20).map((coin: Criptomoneda) => coin.imagen) ?? [];

  if (isLoading) return null;

  return <IconCloud images={imagenes}></IconCloud>;
};

import type { Metadata } from "next";
import { PillarChildRoute, pillarChildMetadata, pillarChildStaticParams } from "@/lib/pillarChildRoute";

const PILLAR = "public-place-accident-claims-scotland";

export const dynamicParams = false;

export function generateStaticParams() {
  return pillarChildStaticParams(PILLAR);
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return pillarChildMetadata(PILLAR, params);
}

export default function PublicPlaceChildPage({ params }: { params: Promise<{ slug: string }> }) {
  return <PillarChildRoute pillar={PILLAR} params={params} />;
}

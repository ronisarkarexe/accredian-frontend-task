import HeaderComponent from "@/components/header";
import HeroComponent from "@/components/hero.component";
import ReferComponent from "@/components/refer.component";
import TopHeader from "@/components/top-header";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <HeaderComponent />
      <HeroComponent />
      <ReferComponent />
    </div>
  );
}

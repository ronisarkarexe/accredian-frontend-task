import HeaderComponent from "@/components/header";
import HeroComponent from "@/components/hero.component";
import TopHeader from "@/components/top-header";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <HeaderComponent />
      <HeroComponent />
    </div>
  );
}

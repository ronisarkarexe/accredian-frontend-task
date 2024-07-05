import GetInTouchComponent from "@/components/get.in.touch.component";
import HeaderComponent from "@/components/header";
import HeroComponent from "@/components/hero.component";
import QuestionComponent from "@/components/question.component";
import ReferComponent from "@/components/refer.component";
import ReferralComponent from "@/components/referral.component";
import TopHeader from "@/components/top-header";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <HeaderComponent />
      <HeroComponent />
      <ReferComponent />
      <ReferralComponent />
      <QuestionComponent />
      <GetInTouchComponent />
    </div>
  );
}

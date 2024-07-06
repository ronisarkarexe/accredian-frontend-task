import FooterComponent from "@/components/footer.component";
import GetInTouchComponent from "@/components/get.in.touch.component";
import HeaderComponent from "@/components/header";
import HeroComponent from "@/components/hero.component";
import QuestionComponent from "@/components/question.component";
import ReferComponent from "@/components/refer.component";
import ReferralComponent from "@/components/referral.component";
import TopHeader from "@/components/top-header";

export default function Home() {
  return (
    <div style={{ maxWidth: "1332px" }}>
      <TopHeader />
      <HeaderComponent />
      <HeroComponent />
      <div className="hidden lg:block">
        <ReferComponent />
      </div>
      <ReferralComponent />
      <QuestionComponent />
      <GetInTouchComponent />
      <FooterComponent />
    </div>
  );
}

import { Button } from "../ui/button";
import Navbar from "./Navbar";
import hero_bg from "/hero_bg.jpg";

type HeroProps = {
  introText: string;
  title: string;
  subTitle: string;
  btnAffirmText?: string;
  btnNoAffirmText?: string;
};
const Hero = ({
  introText,
  title,
  subTitle,
  btnAffirmText,
  btnNoAffirmText,
}: HeroProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${hero_bg})` }}
      className="w-full h-[90vh] bg-center bg-no-repeat bg-cover rounded-b-xxl "
    >
      <div className="bg-primary/5 h-full backdrop-blur-xs rounded-b-xxl relative pt-20">
        <div className="fixed top-0 w-full">
          <Navbar />
        </div>
        <div className="text-center p-5">
          <Button className="bg-accent/15 hover:bg-accent/10 cursor-pointer rounded-full">
            {introText}
          </Button>

          <p className="text-lg font-semibold text-primary-foreground mt-7">
            {title}
          </p>
          <p className="mt-5 text-primary-foreground text-sm">{subTitle}</p>

          <div className="mt-20 flex flex-col gap-y-3">
            <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground cursor-pointer">
              {btnAffirmText}
            </Button>
            <Button className="bg-accent/20 border border-accent hover:bg-accent/20 cursor-pointer">
              {btnNoAffirmText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { Button } from "../ui/button";
import Navbar from "./navbar/Navbar";
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
      className="w-full h-[90vh] bg-center bg-no-repeat bg-cover rounded-b-xxl 
      lg:h-[95vh]"
    >
      <div className="bg-black/40 h-full  rounded-b-xxl lg:h-[95vh]">
        <Navbar />

        <div
          className="text-center p-5 mt-5
        lg:mt-10"
        >
          <Button
            className="bg-accent/15 hover:bg-accent/10 cursor-pointer rounded-full
          lg:font-semibold"
          >
            {introText}
          </Button>

          <p
            className="text-2xl font-semibold text-primary-foreground mt-7
          lg:text-6xl lg:w-[50%] lg:mx-auto"
          >
            {title}
          </p>
          <p
            className="mt-5 text-primary-foreground text-base
          lg:text-xl lg:w-[50%] lg:mx-auto"
          >
            {subTitle}
          </p>

          <div className="mt-20 flex flex-row justify-center gap-x-5">
            <Button
              className="  bg-accent-foreground text-accent hover:bg-accent-foreground cursor-pointer font-semibold
            lg:w-50 lg:h-11"
            >
              {btnAffirmText}
            </Button>
            <Button
              className="bg-accent/20 border border-accent hover:bg-accent/20 cursor-pointer font-semibold
            lg:w-50 lg:h-11"
            >
              {btnNoAffirmText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

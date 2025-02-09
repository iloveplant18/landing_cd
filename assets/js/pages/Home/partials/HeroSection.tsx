import { FC } from "react";
import PrimaryButton from "../../../components/PrimaryButton.tsx";

const HeroSection: FC = () => {
  return (
    <section className="overflow-hidden" id="hero">
      <div className="pt-7 sm:layout-grid lg:items-center container">
        <div className="relative z-10 sm:col-span-4 lg:col-span-5">
          <h2 className="title-big text-dark">Hey, I’m Nick</h2>
          <span className="mt-1">Frontend developer</span>
          <div className="mt-9 w-6 h-[3px] bg-accent rounded-full"></div>
          <p className="mt-6">
            Help you to create high-quality digital products that your clients
            will love and let your business thrive
          </p>
          <PrimaryButton
            className="mt-6 sm:mt-11"
            isLink={true}
            href="#form"
            hasIcon={true}
          >
            Get in touch
          </PrimaryButton>
        </div>
        <div className="relative z-0 -mt-10 flex h-[304px] sm:h-[440px] sm:m-0 lg:col-span-7 lg:h-[700px]">
          <img
            className="h-[365px] absolute right-[-200px] max-w-none ml-auto sm:-bottom-12 sm:right-[-370px] sm:h-[100%] md:right-[-300px]"
            src="/images/nick.png"
            alt="Nick - smiling red-haired young man with beard"
          />
          <div className="absolute -z-10 w-[600px] top-5 -right-80 sm:w-[700px] sm:right-[-500px] sm:top-20 md:w-[800px] md:top-5 md:right-[-500px] lg:top-0 lg:w-[1200px] max-w-[1600px] aspect-[1.53] bg-dark [background-image:url('/images/gradient.png')] bg-cover [mask-image:url('/images/background-mobile.png')] sm:[mask-image:url('/images/background-tablet.png')] lg:[mask-image:url('/images/background.png')] [mask-size:auto_100%] [mask-repeat:no-repeat]">
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

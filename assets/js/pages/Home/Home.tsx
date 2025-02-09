import { FC } from "react";
import HeroSection from "./partials/HeroSection.tsx";
import AboutSection from "./partials/AboutSection.tsx";
import FormSection from "./partials/FormSection.tsx";

const Home: FC = () => {
  return (
    <>
      <h1 className="sr-only">Frontend developer website</h1>
      <HeroSection />
      <AboutSection />
      <FormSection />
    </>
  );
};

export default Home;

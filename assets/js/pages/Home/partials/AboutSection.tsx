import { FC } from "react";
import PrimaryButton from "../../../components/PrimaryButton.tsx";

const AboutSection: FC = () => {
  return (
    <section
      className="mt-12 sm:mt-20 lg:mt-[100px] container lg:layout-grid"
      id="about"
    >
      <h2 className="subtitle-mobile title-medium text-dark lg:col-span-full">
        About me
      </h2>
      <div className="mt-9 sm:mt-20 sm:flex sm:items-center sm:gap-x-11 lg:gap-0 lg:grid lg:col-span-full lg:justify-items-start lg:grid-cols-subgrid">
        <div className="p-4 max-w-[412px] mx-auto rounded-full  bg-[url('/images/gradient.png')] bg-cover bg-center shrink-0 sm:w-[290px] lg:mx-0 lg:col-span-6 lg:w-full">
          <img
            className="w-full"
            src="./images/nick-about.png"
            alt="Nick trying to look cool"
          />
        </div>
        <div className="lg:col-span-6">
          <div className="max-sm:mt-9 w-6 h-[3px] bg-accent rounded-full"></div>
          <p className="mt-6">
            <span className="subtitle-small sm:subtitle text-dark">
              Nick Richardson
            </span>{" "}
            - specialist in Frontend development. Clear code is my passion.
            Solving issues through negotiations
          </p>
          <PrimaryButton className="hidden sm:inline-flex mt-11" hasIcon={true}>
            Get in touch
          </PrimaryButton>
        </div>
      </div>
      <div className="contents lg:grid lg:grid-cols-subgrid lg:mt-20 lg:col-span-full">
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6">
          <h3 className="subtitle-mobile title-small text-dark">
            Interests
          </h3>
          <ul className="mt-6 grid gap-y-1  gap-x-2 grid-cols-[auto_1fr] sm:mt-11 sm:gap-y-11 sm:gap-x-4">
            <li className="grid grid-rows-subgrid grid-cols-subgrid row-span-2 col-span-full items-center gap-y-1 sm:gap-y-2">
              <img
                className="row-span-2 sm:w-[60px]"
                src="./images/interests/music.svg"
                width="44"
                height="44"
                alt=""
              />
              <h4 className="max-sm:subtitle-small subtitle text-dark">
                Music
              </h4>
              <span>Indie rock | Reggae</span>
            </li>
            <li className="grid grid-rows-subgrid grid-cols-subgrid row-span-2 col-span-full items-center gap-y-1 sm:gap-y-2">
              <img
                className="row-span-2 sm:w-[60px]"
                src="./images/interests/art.svg"
                width="44"
                height="44"
                alt=""
              />
              <h4 className="max-sm:subtitle-small subtitle text-dark">Art</h4>
              <span>Edvard Munch | Frida Kahlo</span>
            </li>
            <li className="grid grid-rows-subgrid grid-cols-subgrid row-span-2 col-span-full items-center gap-y-1 sm:gap-y-2">
              <img
                className="row-span-2 sm:w-[60px]"
                src="./images/interests/photography.svg"
                width="44"
                height="44"
                alt=""
              />
              <h4 className="max-sm:subtitle-small subtitle text-dark">
                Photography
              </h4>
              <span>Portraits</span>
            </li>
          </ul>
        </div>
        <div className="mt-11 sm:mt-20 lg:mt-0 lg:col-span-6">
          <h3 className="subtitle-mobile title-small text-dark">
            Education & Experience
          </h3>
          <ul className="grid grid-cols-[auto_1fr] mt-7 gap-y-3 gap-x-4 sm:mt-11 sm:gap-y-6">
            <li className="pb-3 grid grid-cols-subgrid col-span-2 [&:not(:last-child)]:border-b border-grey border-solid sm:pb-8">
              <span className="">2008 - Present</span>
              <div className="flex flex-col gap-y-3">
                <span className="max-sm:subtitle-small subtitle text-dark">
                  Middle Frontend developer
                </span>
                <span>Ozon</span>
              </div>
            </li>
            <li className="pb-3 grid grid-cols-subgrid col-span-2 [&:not(:last-child)]:border-b border-grey border-solid sm:pb-8">
              <span className="">2006 - 2007</span>
              <div className="flex flex-col gap-y-3">
                <span className="max-sm:subtitle-small subtitle text-dark">
                  Junior Frontend developer
                </span>
                <span>Facebook</span>
              </div>
            </li>
            <li className="pb-3 grid grid-cols-subgrid col-span-2 [&:not(:last-child)]:border-b border-grey border-solid sm:pb-8">
              <span className="">2000 - 2005</span>
              <div className="flex flex-col gap-y-3">
                <span className="max-sm:subtitle-small subtitle text-dark">
                  Frontend developer
                </span>
                <span>Stanford University</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <PrimaryButton className="mt-12 hidden max-sm:inline-flex" hasIcon={true}>
        Get in touch
      </PrimaryButton>
    </section>
  );
};

export default AboutSection;

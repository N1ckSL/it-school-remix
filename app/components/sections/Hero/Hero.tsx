import { Link } from "@remix-run/react";
import { logosHero } from "~/components/consts/data";
import { Button, ButtonVariant } from "~/components/UI/Button/Button";
import { LinkButton } from "~/components/UI/Link/LinkButton";

export const Hero = () => {
  return (
    <section className="container w-full h-[45rem] md:h-[33rem] flex items-start mt-[6rem] md:mt-[12rem]">
      <div className="-z-10 absolute top-0 left-0 w-full h-[51rem] md:h-[45rem] bg-primary bg-heroImg bg-no-repeat bg-a100 bg-right-bottom bg-fixed">
        <div className="container mx-auto">
          <div className="container ml-auto h-[51rem] md:h-[45rem] flex items-end justify-end px-6 max-w-screen-sm">
            <img
              src="./images/doru.png"
              alt="Doru"
              className="h-[30%] lg:h-img80 mx-auto md:ml-auto"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full px-[15px]">
        <div className="container justify-start md:w-1/2 flex flex-col">
          <h1 className="text-white font-semibold text-3xl lg:text-title mb-10 leading-tight">
            Acceleratorul de cariere în domeniul IT
          </h1>
          <p className="text-white mb-8">
            Cursuri IT pentru începători cu certificare internațională
          </p>
          <div className="container flex flex-wrap gap-6 mb-16">
            {logosHero.map((logo, idx) => (
              <img
                src={`./images/${logo.imgUlr}.svg`}
                alt={logo.name}
                key={idx}
                className="h-8 w-auto"
              />
            ))}
          </div>
          <div className="container flex">
            <Link to="/cursuri">
              <Button variant={ButtonVariant.primary}>
                Vezi toate cursurile
              </Button>
            </Link>
            <Link to="/certificari" className="flex items-center">
              <LinkButton>Vezi certificarile</LinkButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

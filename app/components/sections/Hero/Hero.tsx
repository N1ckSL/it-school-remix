import { Link } from "@remix-run/react";
import { logosHero } from "~/components/consts/data";
import { Button } from "~/components/UI/Button/Button";
import { LinkButton } from "~/components/UI/Link/LinkButton";

export const Hero = () => {
  return (
    <section className="w-full h-[29rem] flex items-start mt-[16rem]">
      <div className="-z-10 absolute top-0 left-0 w-screen h-[45rem] bg-primary bg-heroImg bg-no-repeat bg-a100 bg-right-bottom bg-fixed">
        <div className="container mx-auto">
          <div className="container ml-auto h-[45rem] flex items-end justify-end px-6 max-w-screen-sm">
            <img
              src="./images/doru.png"
              alt="Doru"
              className="h-img80 ml-auto"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="container justify-start w-1/2 flex flex-col">
          <h1 className="text-white font-semibold text-title mb-8 leading-tight">
            Acceleratorul de cariere în domeniul IT
          </h1>
          <p className="text-white mb-8">
            Cursuri IT pentru începători cu certificare internațională
          </p>
          <div className="flex gap-6 pb-8">
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
              <Button>Vezi toate cursurile</Button>
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

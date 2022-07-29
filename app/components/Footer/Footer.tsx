import { Link } from "@remix-run/react";
import { FOOTER, MORE, SOCIALS, UTILS } from "../consts/menu";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container mx-auto flex flex-col  w-full pt-18 pb-9 px-4 md:px-0">
      <div className="md:grid md:grid-cols-4 justify-center items-start gap-4">
        <div className="social__wrapper s w-full flex mb-10 md:mb-0 flex-col order-10 md:order-first">
          <img
            src="./images/logo-itschool-light.svg"
            alt="itschool-logo"
            className=" mb-6 w-[104px]"
          />
          <p className="text-sm mb-6 hidden md:block">
            Din 2014, peste 5000 de începători ne-au ales să le fim partener în
            procesul lor de transformare digitală.
          </p>
          <div className="socials flex flex-col items-center md:items-start">
            <p className="text-lg md:text-base text-semitransparent mb-2">
              Social Media
            </p>
            <div className="social__links flex gap-4">
              {SOCIALS.map(({ icon: Icon, path }) => (
                <a key={path} href={path} target="_blank" rel="noreferrer">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 md:mb-0 w-1/2 md:w-full p-0 md:pl-10 inline-block footer__first w-full">
          <p className="text-semitransparent text-lg md:text-base mb-2 md:mb-4">
            IT School
          </p>
          {FOOTER.map((item, idx) => (
            <div
              className="container flex justify-start leading-relaxed"
              key={idx}
            >
              <Link to={item.path} className="hover:text-hover">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="mb-8 md:mb-0 w-1/2 md:w-full p-0 md:pl-10 inline-block footer__second w-full">
          <p className="text-semitransparent text-lg md:text-base mb-2 md:mb-4">
            Mai mult
          </p>
          {MORE.map((item, idx) => (
            <div
              className="container flex justify-start leading-relaxed"
              key={idx}
            >
              <a href={item.path} className="hover:text-hover">
                {item.title}
              </a>
            </div>
          ))}
        </div>
        <div className="mb-8 md:mb-0 w-1/2 md:w-full p-0 md:pl-10 inline-block footer__third w-full">
          <p className="text-semitransparent text-lg md:text-base mb-2 md:mb-4">
            Utile
          </p>
          {UTILS.map((item, idx) => (
            <div
              className="container flex justify-start leading-relaxed"
              key={idx}
            >
              <a href={item.path} className="hover:text-hover">
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="terms w-full flex flex-col md:flex-row items:center justify-center md:justify-between mt-20">
        <p className="text-semitransparent text-base text-center mb-4 md:mb-0">
          IT School România © {currentYear}. Toate drepturile rezervate.
        </p>
        <Link
          to="/termeni-si-conditii"
          className="text-base text-semitransparent hover:text-hover text-center"
        >
          Termeni și Condiții
        </Link>
      </div>
    </footer>
  );
};

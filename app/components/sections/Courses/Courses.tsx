import { CourseCards } from "./Cards";
import { Button, ButtonVariant } from "~/components/UI/Button/Button";
import { partners } from "~/components/consts/data";
import { Link } from "@remix-run/react";

export const Courses = () => {
  return (
    <section className=" w-full relative py-16 px-10 bg-courses bg-no-repeat bg-cover">
      <div className="container mx-auto w-full">
        <div className="max-w-[80%] w-full m-auto">
          <p className="text-center text-semitransparent mb-4 ">
            CURSURI IT CU CERTIFICARE PENTRU ÎNCEPĂTORI
          </p>
          <h2 className="font-normal text-center text-4xl mb-6 text-primary">
            From zero to hero. Descoperă programele de pregătire IT School
          </h2>
          <p className="text-center text-primary mb-12">
            Alege din peste 10 cursuri adresate tuturor celor care își doresc un
            job în domeniul IT
          </p>
        </div>
        <div className="courses w-full relative">
          <div className="m-auto w-full max-w-[75rem] mb-12">
            <CourseCards />
          </div>
        </div>
        <div className="container flex w-full justify-center mb-20">
          <Link to={"/cursuri"}>
            <Button variant={ButtonVariant.primary}>
              Vezi toate cursurile
            </Button>
          </Link>
        </div>

        <h5 className="text-md text-center font-semibold text-semitransparent mb-10">
          În parteneriat cu peste 50 companii de renume din România
        </h5>
        <div className="grid grid-rows-6 md:grid-rows-3 lg:grid-rows-2 grid-flow-col flex-wrap gap-8 mb-16">
          {partners.map((partner, idx) => (
            <div className="flex justify-center" key={idx}>
              <img src={`./images/${partner.img}.svg`} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

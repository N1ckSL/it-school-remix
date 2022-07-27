import { Container } from "./Courses.style";

import { Outlet } from "@remix-run/react";
import { CourseCards } from "./Cards";

export const Courses = () => {
  return (
    <Container className="-z-10 container relative mx-auto w-full px-8 py-14">
      <div className="max-w-[80%] w-full m-auto">
        <p className="text-center text-semitransparent mb-4 ">
          CURSURI IT CU CERTIFICARE PENTRU ÎNCEPĂTORI
        </p>
        <h2 className="font-normal text-center text-4xl mb-6 text-primary">
          From zero to hero. Descoperă programele de pregătire IT School
        </h2>
        <p className="text-center text-primary mb-6">
          Alege din peste 10 cursuri adresate tuturor celor care își doresc un
          job în domeniul IT
        </p>
      </div>
      <div className="courses w-full relative">
        <div className="m-auto w-full max-w-[75rem] bg-primary">
          {/* <Outlet /> */}
          <CourseCards />
        </div>
      </div>
    </Container>
  );
};

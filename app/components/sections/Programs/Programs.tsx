import { tehnologii } from "~/components/consts/data";
import { images } from "~/components/imports";

export const Programs = () => {
  return (
    <section className="container relative w-full max-w-full text-white py-16 px-[25px]">
      <div className="container w-full mx-auto">
        <div className="programs__intro md:flex">
          <div className="programs__left md:w-[60%]">
            <div className="intro__text w-full md:max-w-[80%]">
              <p className="text-semitransparent uppercase mb-4">
                cursurile it school
              </p>

              <h2 className="text-4xl font-normal mb-8 text-primary">
                Te pregătești pentru interviul de angajare de la prima lecție
              </h2>
              <p className="text-primary mb-14">
                Competențele tale vor face diferența în fața angajatorilor.
                Pentru șanse de angajare 100% reale, în crearea programelor
                noastre de curs ținem cont de trei factori importanți:
                tendințele actuale din industrie, expertiza trainerilor noștri
                și cunoștințele necesare absolvirii cu succes a examenelor cu
                certificare internațională. Iată tehnologiile studiate în cadrul
                cursurilor IT School:
              </p>
            </div>
            <div className="tech_stacks">
              {tehnologii.slice(0, 2).map((tech, idx) => (
                <div key={idx}>
                  <div>
                    <h5 className="text-primary font-semibold mb-4">
                      {tech.title}
                    </h5>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-16">
                    {tech.tech.img.map((logo, idx) => (
                      <div
                        className="flex justify-center items-center h-[4rem] w-[4rem] p-4 bg-white rounded-full shadow-md"
                        key={idx}
                      >
                        <img
                          src={`./images/tech/${logo}.svg`}
                          alt={tech.component}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="programs__right md:w-[40%] relative flex justify-end items-end">
            <img
              src={images.alina}
              alt="Alina"
              className="flex w-full max-w-[35rem]"
            />
          </div>
        </div>
        <div className="programs__techs">
          {tehnologii.slice(2, tehnologii.length).map((tech, idx) => (
            <div
              className="w-full md:w-1/2 inline-block mr-10 md:mr-0"
              key={idx}
            >
              <div className="w-full">
                <h5 className="text-primary font-semibold mb-4">
                  {tech.title}
                </h5>
              </div>
              <div className="flex flex-wrap gap-3 mb-16">
                {tech.tech.img.map((logo, idx) => (
                  <div
                    className="flex justify-center items-center h-[4rem] w-[4rem] p-4 bg-white rounded-full shadow-md"
                    key={idx}
                  >
                    <img
                      src={`./images/tech/${logo}.svg`}
                      alt={tech.component}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

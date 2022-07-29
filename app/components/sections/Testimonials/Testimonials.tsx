import { useState } from "react";
import { dataTestimoniale } from "~/components/consts/data";
import { Button } from "~/components/UI/Button/Button";
import {
  IconComment,
  IconFacebook,
  IconLeft,
  IconProfile,
  IconRight,
} from "~/components/UI/SVGs";

export const Testimonials = () => {
  const [show, setShow] = useState(0);

  const handlePrev = () => {
    if (show >= 1) setShow(show - 1);
  };
  const handleNext = () => {
    if (show + 1 < dataTestimoniale[0].author.length) setShow(show + 1);
  };

  return (
    <section className="container w-full max-w-full bg-testi-blue py-24 text-white">
      <div className="container mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-30">
        <div className="testimoniale__left md:w-[40%] flex flex-col">
          <p className="uppercase mb-4 text-center md:text-left">recenzii</p>
          <h2 className="text-4xl mb-10 text-center md:text-left">
            Nu trebuie să ne crezi pe cuvânt
          </h2>
          <div className="button__wrapper flex flex-col items-center md:items-start w-full mb-10 md:mb-0 md:max-w-[20rem] gap-4">
            <Button>Vezi ce spun cursanții noștri</Button>
            <Button>
              <IconFacebook /> Vezi mai multe pe Facebook
            </Button>
          </div>
        </div>

        <div className="testimoniale__right md:w-[50%] flex flex-col md:flex-row">
          <div className="CommentsIcon__wrapper flex justify-center md:justify-end items-start">
            <IconComment />
          </div>
          {dataTestimoniale.map((testimonial, idx) => (
            <div className="Comments__wrapper flex flex-col mx-6" key={idx}>
              <div className="Comments__controls flex flex-col">
                <div className="comment__pagination flex gap-4 mb-6">
                  <IconLeft onClick={handlePrev} disabled={show === 0} />
                  <IconRight
                    onClick={handleNext}
                    disabled={show === testimonial.author.length - 1}
                  />
                  <div className="count">
                    {show + 1 + "/" + testimonial.author.length}
                  </div>
                </div>
                <div className="comment__author flex items-center gap-2 mb-10">
                  <IconProfile />
                  {testimonial.author[show]}
                </div>
              </div>

              <div className="comment__text">{testimonial.text[show]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

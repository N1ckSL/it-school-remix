import { IconDown, IconPlus } from "~/components/UI/SVGs";

export const Faq = () => {
  return (
    <>
      <div className="container mx-auto w-full max-w-[80%] py-10">
        <h2 className="text-4xl text-center mb-20">
          Cele mai frecvente intrebari
        </h2>
        <div className="container w-full mx-auto flex flex-col px-20 ">
          <div className="faq-item flex items-center rounded-2xl shadow-md cursor-pointer py-6 px-6 mb-4 gap-4">
            <IconPlus />
            <h4 className="text-xl font-semibold w-full">
              Pot participa la cursuri dacă nu am cunoștințe în IT (tehnice)?
            </h4>
            <IconDown />
          </div>
        </div>
      </div>
    </>
  );
};

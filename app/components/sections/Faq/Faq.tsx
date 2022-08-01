import { Link, useLoaderData } from "@remix-run/react";
import type { Key } from "react";
import { Button, ButtonVariant } from "~/components/UI/Button/Button";
import { FaqItem } from "./FaqItem";

export const Faq = () => {
  const { faqRes } = useLoaderData();
  const dataChunk = faqRes.slice(0, 5);
  // console.log(dataChunk);

  return (
    <section className="container mx-auto w-full md:max-w-[80%] pt-10 pb-20">
      <h2 className="text-4xl text-center mb-20">
        Cele mai frecvente întrebări
      </h2>
      <div className="container w-full mx-auto flex flex-col px-4 md:px-20">
        {dataChunk.map(
          (post: {
            id: Key | undefined | string;
            body: string;
            title: string | null;
          }) => (
            <FaqItem post={post} key={post.id} />
          )
        )}
      </div>
      <div className="containter flex justify-center">
        <Link to={"/faq"}>
          <Button variant={ButtonVariant.outlined}>Mai multe</Button>
        </Link>
      </div>
    </section>
  );
};

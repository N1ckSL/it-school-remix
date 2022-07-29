import { useState } from "react";
import { IconDown, IconMinus, IconPlus, IconUp } from "~/components/UI/SVGs";

export const FaqItem = ({ post }: { post: any }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section
      className="faq-item rounded-2xl shadow-lg cursor-pointer px-6 py-2 mb-6"
      key={post.id}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="item__summary flex items-center gap-2 py-4">
        {!isActive ? <IconPlus /> : <IconMinus />}

        <h4 className=" text-md md:text-xl font-semibold w-full capitalize">
          {post.title}
        </h4>
        {!isActive ? <IconDown /> : <IconUp />}
      </div>
      {isActive && (
        <div className="item__details ml-8 pb-4">
          <p className=" text-base pt-4 border-t border-zinc-400">
            {post.body}
          </p>
        </div>
      )}
    </section>
  );
};

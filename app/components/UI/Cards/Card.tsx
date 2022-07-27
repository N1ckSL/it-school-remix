import { Link } from "@remix-run/react";
import { courseIcons } from "~/components/consts/data";
import { Container } from "./Card.style";

interface Props {
  title: string;
  icon: keyof typeof courseIcons;
  subtitle: string;
  description: string;
  button?: string;
  secondary?: boolean;
  link: string;
  location?: string;
  blank?: boolean;
}

export const Card = ({
  icon,
  title,
  subtitle,
  description,
  link,
  location,
}: Props) => {
  const CourseIcon = courseIcons[icon];
  return (
    <Link to={"/"}>
      <Container className=" bg-red-300">
        <div className="graphic w-full p-0 self-end mb-8">
          {CourseIcon && <CourseIcon />}
        </div>
        {location && (
          <p className="text-xs absolute top-10 right-4 rounded-xl px-4 py-1 text-green-400 bg-green-100">
            {location === "Online" ? "Live" + location : location}
          </p>
        )}
        {!location && (
          <p className="text-xs absolute top-10 right-4 rounded-xl px-4 py-1 text-green-400 bg-green-100">
            {"Live Online"}
          </p>
        )}
        <div className="container w-full mx-auto px-6">
          <h3 className="text-3xl leading-tight font-semibold text-primary pb-4">
            {!title && "Curs Testare Automata"}
          </h3>
          <p className="text-md font-normal leading-tight text-primary pb-4">
            {!description && "Certificare Ministerul Educatiei Nationale"}
          </p>
          <h5 className="text-2xl leading-tight font-normal text-primary m-0">
            {!subtitle && "Octombrie - In curand"}
          </h5>
        </div>
      </Container>
    </Link>
  );
};

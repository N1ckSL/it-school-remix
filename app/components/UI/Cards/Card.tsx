import { Link, useLoaderData } from "@remix-run/react";

interface Props {
  title: string;
  icon: string;
  subtitle: string;
  description: string;
  link: string;
  location?: string;
}

export const Card = ({
  icon,
  title,
  subtitle,
  description,
  link,
  location,
}: Props) => {
  const { data } = useLoaderData();

  console.log(data);

  return (
    <>
      {data.map(
        (el: {
          id: number;
          avatar: string;
          first_name: string;
          last_name: string;
          email: string;
        }): any => (
          <Link
            to={"/"}
            key={el.id}
            className="bg-white flex-col items-start w-full max-w-[18rem] h-[25rem] rounded-2xl py-6 "
          >
            <div>
              <div className="graphic w-full p-0 self-end mb-8 flex justify-between">
                <div className="courseimg-container w-[40%] bg-primary h-[6rem] rounded-r-full mr-5 flex justify-center items-center">
                  <img src={el.avatar} alt={el.first_name} />
                </div>
                <div className="course-status mr-8">
                  {/* {CourseIcon && <CourseIcon />} */}
                  {location && (
                    <p className="text-xs relative rounded-xl px-4 py-1 text-green-400 bg-green-100">
                      {location === "Online" ? "Live" + location : location}
                    </p>
                  )}
                  {!location && (
                    <p className="text-xs flex justify-end relative rounded-xl px-4 py-1 text-green-400 bg-green-100">
                      {"Live Online"}
                    </p>
                  )}
                </div>
              </div>

              <div className="container w-full mx-auto px-6">
                <h3 className="text-3xl leading-tight font-semibold text-primary pb-4">
                  {el.first_name}
                </h3>
                <p className="text-md font-normal leading-tight text-primary pb-4">
                  {el.last_name}
                </p>
                <h5 className="text-2xl leading-tight font-normal text-primary m-0">
                  {el.email}
                </h5>
              </div>
            </div>
          </Link>
        )
      )}
    </>
  );
};

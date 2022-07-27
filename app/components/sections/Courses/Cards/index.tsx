import { Card } from "~/components/UI/Cards/Card";
import { Cards, Overflow } from "~/components/UI/Cards/Card.style";

export const CourseCards = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <Overflow>
      <Cards
        responsive={responsive}
        showDots={true}
        itemClass="item"
        dotListClass="dot-list-style"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        className="flex relative first:flex"
      >
        <Card
          title={""}
          icon={"python"}
          subtitle={""}
          description={""}
          link={""}
        />
        <Card
          title={""}
          icon={"dotNet"}
          subtitle={""}
          description={""}
          link={""}
        />
        <Card
          title={""}
          icon={"java"}
          subtitle={""}
          description={""}
          link={""}
        />
        <Card
          title={""}
          icon={"webDev"}
          subtitle={""}
          description={""}
          link={""}
        />
        {/* ))} */}
      </Cards>
    </Overflow>
  );
};

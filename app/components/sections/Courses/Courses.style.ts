import styled from "styled-components";
import { COLORS } from "~/components/consts/colors";
import { LAYOUT } from "~/components/consts/layout";
import { images } from "~/components/imports";

export const Container = styled.section`
 &:before {
    content: "";
    display: block;
    inset: 0;
    left: calc(-50vw + min(600px, 50vw - 3rem));
    width: 100vw;
    position: absolute;
    z-index: -2;
    background-size: auto;
    background-color: ${COLORS.timberWolf10};
  }
  @media (min-width: ${LAYOUT.BREAKPOINTS.LG}) {
    &:before {
      background-image: url(${images.backgroundCourses});
      background-repeat: no-repeat;
      background-position: top center;
      @media (min-width: 1400px) {
        background-size: cover;
      }
    }
}
`;
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import { COLORS } from "~/components/consts/colors";
import "react-multi-carousel/lib/styles.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 28rem;
  padding-right: 3rem;
  height: 26rem;
  margin-bottom: 2rem;
  border-radius: 1.6rem;
  box-shadow: 0 2rem 4rem 0 ${COLORS.oxfordBlue10};
  background-color: #fdfdfd;
  padding: 2.4rem 0;
  position: relative;
  &:hover {
    box-shadow: 0 3rem 6rem 0 ${COLORS.oxfordBlue10};
  }
  & h3 {
    margin-bottom: auto;
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const Overflow = styled.div`
  width: 100%;
  margin: auto;
  max-width: 90rem;
  @media (max-width: 1024px) {
    max-width: 64rem;
  }
  @media (max-width: 760px) {
    max-width: 58rem;
  }
  @media (max-width: 600px) {
    max-width: 28rem;
  }
`;

export const Cards = styled(Carousel)`
  width: 100%;
  overflow: visible;
  padding-bottom: 6rem;
  display: flex;
  & .item {
    transition: opacity 0.6s ease-out;
    &[aria-hidden="true"] {
      opacity: 0;
    }
  }
  ul {
    width: 100%;
    display: flex;
  }
  & .dot-list-style {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.6rem;
    & li {
      border-radius: 1.2rem;
      background-color: ${COLORS.timberWolf100};
      width: 1.2rem;
      height: 1.2rem;
      transition: all 0.3s ease-in;
      &.react-multi-carousel-dot--active {
        cursor: default;
        width: 4rem;
        background-color: ${COLORS.spanishViridian};
      }

      & button {
        opacity: 0;
      }
    }
    @media (max-width: 767px) {
      gap: 0.8rem;
    }
  }
`;

export const Controls = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.5rem;
`;

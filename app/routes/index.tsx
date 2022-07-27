import { Layout } from "~/components/Layout/Layout";
import { Courses } from "~/components/sections/Courses/Courses";
import { Hero } from "~/components/sections/Hero/Hero";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Courses />
    </Layout>
  );
}

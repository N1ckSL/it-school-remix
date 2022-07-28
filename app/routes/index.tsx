import { json } from "@remix-run/node";
import { Layout } from "~/components/Layout/Layout";
import { Courses } from "~/components/sections/Courses/Courses";
import { Hero } from "~/components/sections/Hero/Hero";
import { Programs } from "~/components/sections/Programs/Programs";

export async function loader() {
  const res = await fetch("https://reqres.in/api/users?page=2");
  return json(await res.json());
}
export default function Index() {
  return (
    <Layout>
      <Hero />
      <Courses />
      <Programs />
    </Layout>
  );
}

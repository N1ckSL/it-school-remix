import { json } from "@remix-run/node";
import { Layout } from "~/components/Layout/Layout";
import { Courses } from "~/components/sections/Courses/Courses";
import { Faq } from "~/components/sections/Faq/Faq";
import { Hero } from "~/components/sections/Hero/Hero";
import { Programs } from "~/components/sections/Programs/Programs";
import { Testimonials } from "~/components/sections/Testimonials/Testimonials";

export async function loader() {
  const res = await fetch("https://reqres.in/api/users?page=2");

  const faqRes = await fetch("https://jsonplaceholder.typicode.com/posts");

  return json({
    res: await res.json(),
    faqRes: await faqRes.json(),
  });
}

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Courses />
      <Programs />
      <Testimonials />
      <Faq />
    </Layout>
  );
}

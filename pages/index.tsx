import Head from "@/components/head/head";
import Main from "@/components/main/main";
import Courses from "@/components/courses/courses";
import Contact from "@/components/contact/contact";
import Rating from "@/components/rating/rating";
import Blog from "@/components/blog/blog";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <>
      <Head />
      <Main />
      <Courses />
      <Contact />
      <Rating />
      <Blog />
      <Footer />
    </>
  );
}

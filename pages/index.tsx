import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Main from "@/components/main/main";
import Courses from "@/components/courses/courses";
import Contact from "@/components/contact/contact";
import Rating from "@/components/rating/rating";
import Blog from "@/components/blog/blog";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unycos</title>
        <meta
          name="description"
          content="Si quieres destacar, debes tener tu propio sello para diferenciarte de los demás. Aprende de los mejores con los cursos online de Unycos.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <Main />
      <Courses />
      <Contact />
      <Rating />
      <Blog />
      <Footer />
    </>
  );
}

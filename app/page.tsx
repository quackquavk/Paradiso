import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import SpecialDish from "@/components/SpecialDish";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import Topbar from "@/components/Topbar";
import Events from "@/components/Events";
import Features from "@/components/Features";
import Menus from "@/components/Menus";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Services />
      <About />
      <SpecialDish />
      <Menu />
      <Reservation />
      <Features />
      <Events />
      <Menus />
      <BackToTop /> 
      <Footer />
    </>
  );
};

export default page;

import Banner from "./components/Banner";
import Contact from "./components/ContactInfo";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";

import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <nav className="bg-primary">
        <Navbar />
      </nav>

      <main>
        {/** Banner */}
        <section>
          <Banner />
        </section>
        {/** Quote */}
        <section>
          <Quote />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <HowItWorks />
        </section>
        <section>
          <Work />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

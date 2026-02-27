import About from "./section/About";
import Contact from "./section/Contact";
import Hero from "./section/Hero";
import OurProducts from "./section/OurProducts";
import OurServices from "./section/OurServices";

const HomePage = () => {
    return (
        <div className="flex flex-col w-full">
            <section id="home">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="services">
                <OurServices />
            </section>

            <section id="products" className="py-20 bg-slate-50">
                <OurProducts />
            </section>

            <section id="contact" className="bg-[#020049] text-white">
                <Contact />
            </section>
        </div>
    );
};

export default HomePage;
import About from "./section/About";
import Contact from "./section/Contact";
import Hero from "./section/Hero";
import OurProducts from "./section/OurProducts";
import OurServices from "./section/OurServices";
import StudentProjects from "./section/StudentProjects";
import TechStack from "./section/TechStack";

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

            <section id="products" className="pt-20 bg-[#f0f5fa]">
                <OurProducts />
            </section>

            <TechStack />

            <section id="projects">
                <StudentProjects />
            </section>
            
            <section id="contact" className="bg-[#020049] text-white">
                <Contact />
            </section>
        </div>
    );
};

export default HomePage;
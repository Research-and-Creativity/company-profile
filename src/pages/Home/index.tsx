import React, { Suspense } from "react";
import Hero from "./section/Hero";
import About from "./section/About";

// Lazy Load Section yang berat
const OurServices = React.lazy(() => import("./section/OurServices"));
const OurProducts = React.lazy(() => import("./section/OurProducts"));
const TechStack = React.lazy(() => import("./section/TechStack"));
const StudentProjects = React.lazy(() => import("./section/StudentProjects"));
const Contact = React.lazy(() => import("./section/Contact"));

// Komponen Fallback Sederhana agar Layout tidak loncat (CLS Fix)
const SectionLoader = ({ height = "h-96", bg = "bg-transparent" }) => (
    <div className={`w-full ${height} ${bg} animate-pulse flex items-center justify-center`}>
        <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
    </div>
);

const HomePage = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            <section id="home">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <Suspense fallback={<SectionLoader height="h-[500px]" />}>
                <section id="services">
                    <OurServices />
                </section>
            </Suspense>

            <Suspense fallback={<SectionLoader height="h-screen" bg="bg-[#f0f5fa]" />}>
                <section id="products" className="pt-20 bg-[#f0f5fa]">
                    <OurProducts />
                </section>
            </Suspense>

            <Suspense fallback={<SectionLoader height="h-32" bg="bg-[#f0f5fa]" />}>
                <TechStack />
            </Suspense>

            <Suspense fallback={<SectionLoader height="h-screen" />}>
                <StudentProjects />
            </Suspense>

            <Suspense fallback={<SectionLoader height="h-96" bg="bg-[#020049]" />}>
                <section id="contact" className="bg-[#020049] text-white">
                    <Contact />
                </section>
            </Suspense>
        </div>
    );
};

export default HomePage;
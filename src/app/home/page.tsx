import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Hero from "./@hero";
import WhyUs from "./@whyus";
import Feature from "./@feature";
import Partners from "./@partners";
import Projects from "./@projects";
import Testimonials from "./@testimonials";
import RecentPosts from "./@posts";

export const metadata = {
    title: "Home"
}

export default function Home () {
    return (
        <>
            <Hero />
            <WhyUs />
            <Feature />
            <Partners />
            <Projects />
            <Testimonials />
            <RecentPosts />
        </>
    );
};
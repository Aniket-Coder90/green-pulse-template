import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Hero from "./@hero";
import WhyUs from "./@whyus";

export const metadata = {
    title: "Home"
}

export default function Home () {
    return (
        <>
            <Hero />
            <WhyUs />
        </>
    );
};
import { Card } from "./card";

export default function Feature () {
    return (
        <section className="lg:container mx-auto pb-16">
            <div className="text-center mb-[40px]">
                <span className="text-secondry text-xs font-bold mb-[16px] block">OUR FEATURES</span>
                <h1 className="text-4xl leading-snug font-bold text-primary">Enhancing Your <br />
Eco-Friendly Lifestyle</h1>
            </div>
            <div className="flex justify-center gap-8">
                <Card className="w-[calc((100%/3) - 10px)]" />
                <Card className="w-[calc((100%/3) - 10px)]" />
                <Card className="w-[calc((100%/3) - 10px)]" />
            </div>
        </section>
    );
}
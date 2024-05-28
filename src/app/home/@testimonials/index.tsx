import { Button } from "@/components/Button";
import { TestimonialCard } from "./testimonialCard";

export default function Testimonials () {
    return (
        <section className="bg-white_200 py-20 px-[16px] overflow-hidden">
            <div className="container mx-auto">
                <div className="flex justify-between gap-10 w-[100%]">
                    <div className="max-w-[40%] w-[100%]" style={{ position: 'sticky', top: '20px' }}>
                        <span className="text-secondry text-xs font-bold mb-[16px] block">OUR TESTIMONIALS</span>
                        <h1 className="text-4xl leading-snug font-bold text-primary">Testimonials from Satisfied Customers</h1>
                        <p className="text-primary font-lg">Discover the Power of Testimonials: Learn How Our Movement is Making an Impact, One Voice at a Time!</p>
                        <Button type="button" className="outlined mt-8">Get in touch</Button>
                    </div>
                    <div className="flex max-w-[60%] mx-auto justify-between">
                        <div className="flex flex-col w-[45%] gap-10">
                            <TestimonialCard className="w-[100%]" />
                            <TestimonialCard className="w-[100%]" />
                            <TestimonialCard className="w-[100%]" />
                        </div>
                        <div className="flex flex-col w-[45%]">
                            <TestimonialCard className="w-[100%] mt-10" />
                            <TestimonialCard className="w-[100%] mt-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
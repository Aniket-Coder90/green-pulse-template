import Image from 'next/image';
import whyusImage from '../../../images/whyus.jpg';

export default function WhyUs () {
    return (
        <section className="py-[50px]">
            <div className="flex container mx-auto">
                <div className="w-[50%] h-[90vh] px-[80px] flex flex-col justify-center gap-[20px]">
                    <span className="text-secondry text-xs font-bold">WHY YOU CHOOSE US</span>
                    <h1 className="text-4xl leading-snug font-bold text-primary">Building a Sustainable Tomorrow</h1>
                    <p className="text-lg text-primary pb-[20px]">Supporting farmers in implementing environmentally-friendly farming practices to minimize impact.</p>
                    <div className="w-[70%] pt-[40px] relative flex flex-wrap gap-y-[30px] border-t-2 border-white_200">
                        <div className="w-[50%]">
                            <h2 className="text-4xl font-bold text-primary">
                                70+
                            </h2>
                            <p className="text-primary text-md">70+  reforestation</p>
                        </div>
                        <div className="w-[50%]">
                            <h2 className="text-4xl font-bold text-primary">
                                75,k
                            </h2>
                            <p className="text-primary text-md">75,k Acres restored</p>
                        </div>
                        <div className="w-[50%]">
                            <h2 className="text-4xl font-bold text-primary">
                                175M
                            </h2>
                            <p className="text-primary text-md">175M trees planted</p>
                        </div>
                        <div className="w-[50%]">
                            <h2 className="text-4xl font-bold text-primary">
                                750+
                            </h2>
                            <p className="text-primary text-md">Volunteers worldwide</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-[50%] py-[100px]">
                    <div className="block max-w-[540px] w-[100%] h-[540px] relative">
                        <Image src={whyusImage} alt='Why Us' width={540} height={540} />
                        <Image src={"https://assets-global.website-files.com/663e288737bc324d1efdd96f/664bfc96a078945d4d28f07c_Part%20Logo.svg"} alt='bgImage' width={540} height={540} style={{ position: 'absolute', right: '-30px', bottom: '-30px', zIndex: -1 }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
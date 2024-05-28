import { Button } from "@/components/Button";
import Image from "next/image";
import HeroImage from "../../../images/hero.jpg";

export default function Hero () {
    return (
        <main className="min-h-[600px] h-[100%] overflow-hidden">
            <div className="flex">
                <div className="w-[45%]">
                    <Image src={HeroImage} alt="hero-img" width={500} height={500} style={{ width: '100%', height: '100%', objectPosition: 'top', objectFit: 'cover' }} />
                </div>
                <div className="w-[55%] bg-white_200 h-[90vh] px-[100px] flex flex-col justify-center gap-[20px]">
                    <span className="text-secondry text-xs font-bold">INTRODUCING GREENPULSE</span>
                    <h1 className="text-5xl font-bold text-primary">Join the Green Movement Today!</h1>
                    <p className="text-lg text-primary">Enhanced functioning of the lymphatic system, improved digestion, and elimination of toxins. Improved sleep patterns, reduced insomnia, and enhanced overall restfulness.</p>
                    <Button type="button" className="outlined" style={{ marginTop: '40px' }}>Book an appointment</Button>
                </div>
            </div>
        </main>
    );
}
import Image from "next/image";
import Img1 from '../../../images/img1.jpg';
import Img2 from '../../../images/img2.jpg';
import Img3 from '../../../images/img3.jpg';

export default function Projects () {
    return (
        <section className="container mx-auto text-center pb-20 pt-[100px]">
            <span className="text-secondry text-xs font-bold mb-[16px] block">OUR CAUSES</span>
            <h1 className="text-3xl leading-snug font-bold text-primary">Our Green Projects</h1>
            <div className="flex flex-col sticky t-0 max-w-[800px] mx-auto mt-20">
                <Image src={Img1} alt="image1" width={500} height={500} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', position: 'sticky', top: '20px' }} />
                <Image src={Img2} alt="image2" width={500} height={500} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', position: 'sticky', top: '20px' }} />
                <Image src={Img3} alt="image3" width={500} height={500} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', position: 'sticky', top: '20px' }} />
            </div>
        </section>
    );
}
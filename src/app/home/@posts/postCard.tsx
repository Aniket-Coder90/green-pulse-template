import Image from "next/image";
import Post1 from '../../../images/post1.jpg';
import { Badge } from "@/components/Badge";

export const PostCard = () => {
    return (
        <div className="flex flex-col bg-white max-w-[416px]">
            <Image src={Post1} alt="blog1" width={200} height={100} style={{ width: '100%', maxHeight: '300px' }} />
            <div className="p-4">
                <div className="flex justify-between pb-6 pt-2">
                    <Badge />
                    <p>May 13, 2024</p>
                </div>
                <p className="font-bold text-lg text-left border-t-2 border-white_200 pt-6">Reviving the Green Restoring Earth's Vitality</p>
            </div>
        </div>
    );
}
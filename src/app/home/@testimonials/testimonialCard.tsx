import Image from "next/image";
import Client1 from '../../../images/client1.jpg';

interface IProps {
    className?: string
}

export const TestimonialCard = ({ className }: IProps) => {
    return (
        <div className={className ? className + " bg-white" : "bg-white"}>
            <div className="flex justify-between p-4 pb-4">
                <div className="flex items-start gap-2">
                    <Image src={Client1} alt="client" width={42} height={42} className="rounded-3xl" />
                    <div className="flex flex-col">
                        <h3 className="text-[14px] font-bold">Emily Johnson</h3>
                        <p className="text-[12px] text-secondry font-medium leading-3">Environmental Activist</p>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-secondry rounded-3xl w-8 h-8">
                    <Image src={"https://assets-global.website-files.com/663e288737bc324d1efdd96f/6644bdeca05e039c19856fe0_icons8-instagram%20(1).svg"} alt="instagram" width={16} height={16} />
                </div>
            </div>
            <p className="text-primary border-t-2 p-4 border-white_200 pt-4">
                &quot;This initiative has truly inspired me to take action and make a difference in our environment. Together, we can create a sustainable future.&quot;
            </p>
        </div>
    );
}
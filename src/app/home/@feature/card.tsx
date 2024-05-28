import Image from "next/image";
import Link from "next/link";

interface IProps {
    className?: Object
}

export const Card = ({ className }: IProps) => {
    return (
        <div className={className ? className + ' p-14 card-wrapper bg-white_200 text-center max-w-[372px]' : 'p-14 card-wrapper bg-white_200 text-center max-w-[372px]'}>
            <div className="flex items-center justify-center w-[100px] h-[100px] rounded-[100%] mb-3 bg-secondry mx-auto">
                <Image src={'https://assets-global.website-files.com/663e381fc48d769acb1f54fd/664e75ed851cf0e14423a008_Icons%206.svg'} alt="cardImage" width={42} height={42} />
            </div>
            <h3 className="text-xl font-bold mb-2">Green Infrastructure</h3>
            <p className="text-md">Protecting endangered species and their habitats through and awareness campaigns.</p>
            <Link href={'/home'} className="p-4 inline-block">Learn more</Link>
        </div>
    );
}
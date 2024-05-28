import Image from "next/image";
import CircledRightIcon from "../../images/circled-right.svg";

interface IProps {
    children: React.ReactNode,
    type: 'button' | 'submit',
    className?: 'primary' | 'outline' | 'secondry' | string
}

export const Button = ({ children, type, className = 'primary' }: IProps) => {
    const buttonClass = ((className === 'primary'|| className === 'outline' || className === 'secondry') ? className : `primary ${className}`)
    return (
        <button type={type} className={buttonClass + ' overflow-hidden relative flex items-center gap-[10px]'}>
            <span>{children}</span>
            <span className="w-[20px]"><Image src={CircledRightIcon} alt="Circled-Icon" /></span>
        </button>
    );
}
import Image from "next/image";
import CircledRightIcon from "../../images/circled-right.svg";

interface IProps {
    children: React.ReactNode,
    type: 'button' | 'submit',
    className?: 'primary' | 'outlined' | 'secondry' | string,
    style?: React.CSSProperties
}

export const Button = ({ children, type, className = 'primary', style }: IProps) => {
    const buttonClass = ((className === 'primary'|| className === 'outlined' || className === 'secondry') ? className : `primary ${className}`)
    return (
        <button type={type} style={style} className={(className === 'outlined' ? buttonClass + ' border-primary border-2 text-primary' : buttonClass) + ' w-[fit-content] overflow-hidden relative inline-flex items-center gap-[10px] p-[15px]'}>
            <span>{children}</span>
            {/* <span className="w-[20px]"><Image src={CircledRightIcon} alt="Circled-Icon" /></span> */}
        </button>
    );
}
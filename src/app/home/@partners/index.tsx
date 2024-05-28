import Image from "next/image";

export default function Partners () {
    return (
        <section className="container text-center pb-24 pt-10 mx-auto">
            <span className="text-secondry text-xs font-bold mb-[16px] block">SELECTED PARTNERS</span>
            <h1 className="text-lg leading-snug font-bold text-primary">Our initiative boasts backing from top global firms.</h1>
            <div className="flex flex-wrap gap-10 mt-12 mx-auto justify-center max-w-[500px]">
                <Image src={'https://assets-global.website-files.com/663e288737bc324d1efdd96f/664267da319fb77c615947bc_theo-white.svg'} alt="" width={150} height={64} style={{ filter: 'invert()', width: '120px', height: 'auto' }} />
                <Image src={'https://assets-global.website-files.com/663e288737bc324d1efdd96f/664267da1e2aaf06c777e632_Hudson-white%20(1).svg'} alt="" width={150} height={64} style={{ filter: 'invert()', width: '120px', height: 'auto' }} />
                <Image src={'https://assets-global.website-files.com/663e288737bc324d1efdd96f/664267da0793b4734db6c356_Philadelphia-white.svg'} alt="" width={150} height={64} style={{ filter: 'invert()', width: '120px', height: 'auto' }} />
                <Image src={'https://assets-global.website-files.com/663e288737bc324d1efdd96f/664267daa2e95c1262fa5f5d_Norway-white.svg'} alt="" width={150} height={64} style={{ filter: 'invert()', width: '120px', height: 'auto' }} />
                <Image src={'https://assets-global.website-files.com/663e288737bc324d1efdd96f/664267da1c6cabc8266f0aeb_KOBE-white.svg'} alt="" width={150} height={64} style={{ filter: 'invert()', width: '120px', height: 'auto' }} />
                <Image src={'https://assets-global.website-files.com/663e288737bc324d1efdd96f/664267da2f8d87b228871768_Kansas-white%20(1).svg'} alt="" width={150} height={64} style={{ filter: 'invert()', width: '120px', height: 'auto' }} />
            </div>
        </section>
    );
}
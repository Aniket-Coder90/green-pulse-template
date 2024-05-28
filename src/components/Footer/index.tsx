import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="bg-white_200 py-[60px] px-[24px]">
            <div className="flex gap-[24px] justify-between container mx-auto">
                <div className="flex flex-col gap-[40px] w-[50%]">
                    <Image src={"https://assets-global.website-files.com/663e288737bc324d1efdd96f/664bfae40592b426439f48de_Logo.svg"} alt="Logo" width={70} height={32} />
                    <p className="text-primary text-lg max-w-[465px]">Advocacy efforts within the Green Movement involve political engagement.</p>
                    <div className="flex gap-[10px]">
                        <Link href={'/home'} className="bg-white rounded-3xl w-[40px] h-[40px] flex items-center justify-center">
                            <Image src={"https://assets-global.website-files.com/63bc2ef87fa314d2b0bded34/63bc3347121a41eebf78cdca_Facebook.svg"} alt="Facebook" width={24} height={24} />
                        </Link>
                        <Link href={'/home'}  className="bg-white rounded-3xl w-[40px] h-[40px] flex items-center justify-center">
                            <Image src={"https://assets-global.website-files.com/63bc2ef87fa314d2b0bded34/63bc3347121a410c1f78cdcb_icons8-linkedin%20(1).svg"} alt="LinkedIn" width={16} height={20} style={{ width: '20px', height: '20px' }} />
                        </Link>
                        <Link href={'/home'}  className="bg-white rounded-3xl w-[40px] h-[40px] flex items-center justify-center">
                            <Image src={"https://assets-global.website-files.com/63bc2ef87fa314d2b0bded34/63bc3347121a41d43678cdd1_Instagram.svg"} alt="Instagram" width={24} height={24} />
                        </Link>
                        <Link href={'/home'}  className="bg-white rounded-3xl w-[40px] h-[40px] flex items-center justify-center">
                            <Image src={"https://assets-global.website-files.com/63bc2ef87fa314d2b0bded34/63bc3347121a4128a678cdcc_Twitter.svg"} alt="Twitter" width={24} height={24} />
                        </Link>
                    </div>
                </div>
                <div className="flex w-[50%]">
                    <div className="flex flex-col gap-[40px] w-[calc(100%/3)]">
                        <h3 className="title-3 text-primary font-medium text-xl">
                            Navigation
                        </h3>
                        <ul className="flex flex-col gap-[20px]">
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Home</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>About us</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Services</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Donate</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Blog</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[40px] w-[calc(100%/3)]">
                        <h3 className="title-3 text-primary font-medium text-xl">CMS</h3>
                        <ul className="flex flex-col gap-[20px]">
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Blog</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Blog Post Page</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Blog Categories</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Donate Categories</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Donate Page</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[40px] w-[calc(100%/3)]">
                        <h3 className="title-3 text-primary font-medium text-xl">Essential Pages</h3>
                        <ul className="flex flex-col gap-[20px]">
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Style-Guide</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Licenses</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Changelog</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>404 Page</Link>
                            </li>
                            <li className="text-primary text-xl">
                                <Link href={'/home'}>Password Page</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
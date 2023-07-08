// Importing Part
import LogoImage from '../../public/img/img-icon.svg';
import {Link} from "react-router-dom";
import HolderComponent from "../chunks/holderComponent.tsx";

// Creating functional component of Nav and exporting it as default
export default function NavComponent():JSX.Element {
    // Returning JSX
    return (
        <nav className={'bg-white border-b border-b-gainSbro lg:py-[20px] py-[10px]'}>
            <HolderComponent>
                <div className={'flex items-center justify-between gap-[20px]'}>
                    <Link to={'/'} className={'flex items-center gap-[10px]'}>
                        <img src={LogoImage} width={'30'} alt="لوگو"/>
                        <span className={'text-[18px] font-semibold'}>میزبان انلاین</span>
                    </Link>
                    <ul className={'lg:flex hidden flex-wrap justify-center items-center gap-[30px]'}>
                        <li><a className={'text-[14px] font-normal text-outerSpace transition-all hover:text-themeBlue'} href="#">هاستینگ</a></li>
                        <li><a className={'text-[14px] font-normal text-outerSpace transition-all hover:text-themeBlue'} href="#">سرور مجازی</a></li>
                        <li><a className={'text-[14px] font-normal text-outerSpace transition-all hover:text-themeBlue'} href="#">خدمات دامنه</a></li>
                        <li><a className={'text-[14px] font-normal text-outerSpace transition-all hover:text-themeBlue'} href="#">سایر خدمات</a></li>
                        <li><a className={'text-[14px] font-normal text-outerSpace transition-all hover:text-themeBlue'} href="#">پشتیبانی</a></li>
                    </ul>
                    <div className={'flex flex-wrap justify-center gap-[30px]'}>
                        <a href="tel:02191070175">
                            <button tabIndex={-1} className={'lg:px-[20px] lg:py-[13px] px-[10px] py-[10px] rounded-[10px] gap-[10px] flex items-center'}>
                                <span className={'font-normal text-[15px] text-outerSpace lg:block hidden'}>
                                    021
                                    <span className={'text-orange'}>9107</span>
                                    0175
                                </span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.3084 15.275C18.3084 15.575 18.2417 15.8833 18.1001 16.1833C17.9584 16.4833 17.7751 16.7667 17.5334 17.0333C17.1251 17.4833 16.6751 17.8083 16.1667 18.0167C15.6667 18.225 15.1251 18.3333 14.5417 18.3333C13.6917 18.3333 12.7834 18.1333 11.8251 17.725C10.8667 17.3167 9.90842 16.7667 8.95842 16.075C8.00008 15.375 7.09175 14.6 6.22508 13.7417C5.36675 12.875 4.59175 11.9667 3.90008 11.0167C3.21675 10.0667 2.66675 9.11666 2.26675 8.175C1.86675 7.225 1.66675 6.31666 1.66675 5.45C1.66675 4.88333 1.76675 4.34166 1.96675 3.84166C2.16675 3.33333 2.48341 2.86666 2.92508 2.45C3.45841 1.925 4.04175 1.66666 4.65841 1.66666C4.89175 1.66666 5.12508 1.71666 5.33341 1.81666C5.55008 1.91666 5.74175 2.06666 5.89175 2.28333L7.82508 5.00833C7.97508 5.21666 8.08341 5.40833 8.15841 5.59166C8.23341 5.76666 8.27508 5.94166 8.27508 6.1C8.27508 6.3 8.21675 6.5 8.10008 6.69166C7.99175 6.88333 7.83341 7.08333 7.63341 7.28333L7.00008 7.94166C6.90841 8.03333 6.86675 8.14166 6.86675 8.275C6.86675 8.34166 6.87508 8.4 6.89175 8.46666C6.91675 8.53333 6.94175 8.58333 6.95842 8.63333C7.10842 8.90833 7.36675 9.26666 7.73341 9.7C8.10841 10.1333 8.50841 10.575 8.94175 11.0167C9.39175 11.4583 9.82508 11.8667 10.2667 12.2417C10.7001 12.6083 11.0584 12.8583 11.3417 13.0083C11.3834 13.025 11.4334 13.05 11.4917 13.075C11.5584 13.1 11.6251 13.1083 11.7001 13.1083C11.8417 13.1083 11.9501 13.0583 12.0417 12.9667L12.6751 12.3417C12.8834 12.1333 13.0834 11.975 13.2751 11.875C13.4667 11.7583 13.6584 11.7 13.8667 11.7C14.0251 11.7 14.1917 11.7333 14.3751 11.8083C14.5584 11.8833 14.7501 11.9917 14.9584 12.1333L17.7167 14.0917C17.9334 14.2417 18.0834 14.4167 18.1751 14.625C18.2584 14.8333 18.3084 15.0417 18.3084 15.275Z" stroke="#3F4754" strokeWidth="1.5" strokeMiterlimit="10"/>
                                    <path d="M15.4167 7.50001C15.4167 7.00001 15.025 6.23334 14.4417 5.60834C13.9083 5.03334 13.2 4.58334 12.5 4.58334" stroke="#FF6C2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.3333 7.50001C18.3333 4.27501 15.725 1.66667 12.5 1.66667" stroke="#FF6C2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </a>
                        <a href="#">
                            <button className={'lg:px-[20px] lg:py-[13px] px-[10px] py-[10px] rounded-[10px] bg-emerald shadow-emeraldLike flex gap-[10px] items-center'} tabIndex={-1}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className={'text-[15px] font-normal text-white lg:block hidden'}>پرتال کاربری</span>
                            </button>
                        </a>
                    </div>
                </div>
            </HolderComponent>
        </nav>
    );
}
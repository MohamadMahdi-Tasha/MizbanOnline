// Importing Part
import ManImage from '../assets/img/footer/img-man.png';
import ImageEnamad from '../assets/img/footer/img-enamad.png';
import ImageEnamad2 from '../assets/img/footer/img-enamad2.png';
import ImageEnamad3 from '../assets/img/footer/img-enamad3.png';
import HolderComponent from "../chunks/holderComponent.tsx";

// Creating functional component of Footer and exporting it as default
export default function FooterComponent():JSX.Element {
    // Returning JSX
    return (
        <footer className={'bg-darkBlue'}>
            <HolderComponent>
                <div className={'lg:py-[83px] py-[30px]'}>
                    <header className={'bg-themeBlue relative rounded-[18px] h-[389px] w-full lg:py-[62px] lg:px-[39px] py-[20px] px-[20px] mb-[46px]'}>
                        <div>
                            <h3 className={'text-white font-extrabold lg:text-[36px] text-[25px] mb-[25px]'}>
                                به یک مشاوره و پشتیبانی
                                <br/>
                                حرفه ای نیاز دارید؟
                            </h3>
                            <p className={'lg:text-[16px] text-[14px] font-normal text-white mb-[32px]'}>
                                مجموعه میزبان آنلاین به بصورت ۲۴ ساعته و ۷ روز هفته از طریق چت آنلاین،
                                <br className={'lg:block hidden'} />
                                تیکتینگ و تلفن پشتیبان شماست.
                            </p>
                            <div className={'flex lg:flex-row flex-col  items-center gap-[25px]'}>
                                <a className={'flex items-center'} href="tel:02191070175">
                                    <span className={'lg:text-[20px] text-[15px] font-normal text-white ml-[22px]'}>02191070175</span>
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.5474 22.1491C26.5474 22.5841 26.4507 23.0312 26.2453 23.4662C26.0399 23.9012 25.7741 24.312 25.4237 24.6987C24.8316 25.3512 24.1791 25.8224 23.442 26.1245C22.717 26.4266 21.9316 26.5837 21.0857 26.5837C19.8532 26.5837 18.5362 26.2937 17.1466 25.7016C15.757 25.1095 14.3674 24.312 12.9899 23.3091C11.6003 22.2941 10.2832 21.1703 9.02658 19.9257C7.78199 18.6691 6.65824 17.352 5.65533 15.9745C4.66449 14.597 3.86699 13.2195 3.28699 11.8541C2.70699 10.4766 2.41699 9.15949 2.41699 7.90282C2.41699 7.08116 2.56199 6.29574 2.85199 5.57074C3.14199 4.83366 3.60116 4.15699 4.24158 3.55283C5.01491 2.79158 5.86074 2.41699 6.75491 2.41699C7.09324 2.41699 7.43158 2.48949 7.73366 2.63449C8.04783 2.77949 8.32574 2.99699 8.54324 3.31116L11.3466 7.26241C11.5641 7.56449 11.7212 7.84241 11.8299 8.10824C11.9387 8.36199 11.9991 8.61574 11.9991 8.84532C11.9991 9.13532 11.9145 9.42532 11.7453 9.70324C11.5882 9.98116 11.3587 10.2712 11.0687 10.5612L10.1503 11.5157C10.0174 11.6487 9.95699 11.8057 9.95699 11.9991C9.95699 12.0957 9.96908 12.1803 9.99325 12.277C10.0295 12.3737 10.0657 12.4462 10.0899 12.5187C10.3074 12.9174 10.682 13.437 11.2137 14.0653C11.7574 14.6937 12.3374 15.3341 12.9657 15.9745C13.6182 16.6149 14.2466 17.207 14.887 17.7507C15.5153 18.2824 16.0349 18.6449 16.4457 18.8624C16.5062 18.8866 16.5787 18.9228 16.6632 18.9591C16.7599 18.9953 16.8566 19.0074 16.9653 19.0074C17.1707 19.0074 17.3278 18.9349 17.4607 18.802L18.3791 17.8957C18.6812 17.5937 18.9712 17.3641 19.2491 17.2191C19.527 17.0499 19.8049 16.9653 20.107 16.9653C20.3366 16.9653 20.5782 17.0137 20.8441 17.1224C21.1099 17.2312 21.3878 17.3882 21.6899 17.5937L25.6895 20.4332C26.0037 20.6507 26.2212 20.9045 26.3541 21.2066C26.4749 21.5087 26.5474 21.8107 26.5474 22.1491Z" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                                        <path opacity="0.4" d="M22.3542 10.8747C22.3542 10.1497 21.7862 9.03801 20.9404 8.13176C20.1671 7.29801 19.14 6.64551 18.125 6.64551" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path opacity="0.4" d="M26.5833 10.8753C26.5833 6.19908 22.8012 2.41699 18.125 2.41699" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                                <span className={'lg:text-[20px] text-[15px] font-semibold text-white'}>یا</span>
                                <a href="#"><button className={'border border-white text-[15px] font-normal rounded-[8px] text-white px-[30px] py-[15px]'} tabIndex={-1}>پشتیبانی تیکت</button></a>
                            </div>
                        </div>
                        <div className={'absolute left-0 bottom-0 rounded-l-[18px] overflow-hidden lg:block hidden'}>
                            <img src={ManImage} className={'w-[320px]'} alt="عکس یک مرد"/>
                        </div>
                    </header>
                    <main>
                        <a className={'flex lg:flex-row flex-col items-center mb-[14px]'} href="#">
                            <svg className={'ml-[11px]'} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.5034 37.1895C39.0869 33.3263 42 27.5343 42 21.06C42 9.4289 32.598 0 21 0C9.40202 0 0 9.4289 0 21.06C0 27.1778 2.60115 32.6863 6.75485 36.534L9.56725 24.7323C9.89659 23.3503 10.9307 22.2463 12.2855 21.8302C15.2424 20.9222 18.0638 23.5801 17.345 26.5964L13.9366 40.8991C14.3515 41.0477 14.7724 41.1836 15.1989 41.3062L20.3326 19.7639C20.6619 18.3819 21.696 17.2779 23.0508 16.8619C26.0077 15.9539 28.8291 18.6117 28.1103 21.628L23.2556 42C23.9157 41.9293 24.5668 41.8279 25.2072 41.6973L31.2865 16.1868C31.6158 14.8047 32.6499 13.7007 34.0047 13.2847C36.9616 12.3767 39.7831 15.0345 39.0643 18.0509L34.5034 37.1895Z" fill="white"/>
                            </svg>
                            <div>
                                <span className={'block font-bold text-[20px] text-white'}>میزبان انلاین</span>
                                <span className={'block fontLght text-[11px] text-myGrey'}>همراه همیشگی شماست</span>
                            </div>
                        </a>
                        <div className={'grid grid-col lg:grid-cols-6 grid-cols-1 gap-[30px] mb-[54px]'}>
                            <p className={'font-normal text-[15px] lg:col-span-3 col-span-1 text-gainSbro leading-[182%]'}>"میزبان آنلاین" به عنوان یکی از زیر مجموعه های مستقل شرکت توسعه صنعت ارتباطات اورین، در سال ۱۳۹۳ فعالیت خود را با ارائه خدمات پایه در میزبانی وب لینوکس و ویندوز، و ثبت دامنه های ملی و بین المللی، آغاز کرد. تجربه سال های گذشته در کنار همکارانی که شبانه روز در کنار هم برای ارتقاء دانش و توان فنی شرکت تلاش کرده اند باعث شده تا امروز با افتخار، به عنوان یکی از شرکت های پیشرو در صنعت میزبانی، با ارائه خدمات نوین و متنوع در خدمت مشتریان عزیز باشیم.</p>
                            <div className={'col-span-1'}>
                                <span className={'text-[16px] font-bold text-white mb-[11px] block'}>میزبان آنلاین</span>
                                <ul className={'flex flex-col gap-[10px]'}>
                                    <li><a className={'font-normal text-gainSbro transition-all hover:text-emerald text-[15px]'} href="#">سوالات متداول</a></li>
                                    <li><a className={'font-normal text-gainSbro transition-all hover:text-emerald text-[15px]'} href="#">میزبان بلاگ</a></li>
                                    <li><a className={'font-normal text-gainSbro transition-all hover:text-emerald text-[15px]'} href="#">درباره ما</a></li>
                                    <li><a className={'font-normal text-gainSbro transition-all hover:text-emerald text-[15px]'} href="#">تماس با ما</a></li>
                                </ul>
                            </div>
                            <div className={'lg:col-span-2 col-span-1'}>
                                <span className={'text-[16px] font-bold text-white mb-[11px] block'}>میزبان آنلاین</span>
                                <ul className={'grid lg:grid-cols-2 grid-cols-1 grid-rows-4 gap-y-[10px] gap-x-[0px]'}>
                                    <li><a className={'font-normal text-gainSbro truncate transition-all hover:text-emerald text-[15px]'} href="#">هاست اشتراکی</a></li>
                                    <li><a className={'font-normal text-gainSbro truncate transition-all hover:text-emerald text-[15px]'} href="#">لایسنس های نرم افزاری</a></li>
                                    <li><a className={'font-normal text-gainSbro truncate transition-all hover:text-emerald text-[15px]'} href="#">سرور مجازی</a></li>
                                    <li><a className={'font-normal text-gainSbro truncate transition-all hover:text-emerald text-[15px]'} href="#">گواهینامه های SSL</a></li>
                                    <li><a className={'font-normal text-gainSbro truncate transition-all hover:text-emerald text-[15px]'} href="#">سرور اختصاصی</a></li>
                                    <li><a className={'font-normal text-gainSbro truncate transition-all hover:text-emerald text-[15px]'} href="#">کانفیگ سرور</a></li>
                                    <li><a className={'font-normal text-gainSbro truncate transition-all hover:text-emerald text-[15px]'} href="#">ثبت دامنه</a></li>
                                    <li><a className={'font-normal text-gainSbro truncate transition-all hover:text-emerald text-[15px]'} href="#">مدیریت سرور</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={'grid lg:grid-cols-3 grid-cols-1 gap-[17px]'}>
                            <div className={'border border-lightBlue rounded-[15px] px-[28px] py-[25px]'}>
                                <span className={'block font-normal text-[16px] text-white mb-[24px]'}>با خیال راحت اعتماد کنید</span>
                                <div className={'flex items-center justify-between gap-[26px]'}>
                                    <a href="#"><img src={ImageEnamad} alt="نماد اعتماد الکترونیکی"/></a>
                                    <a href="#"><img src={ImageEnamad2} alt="نماد اعتماد الکترونیکی"/></a>
                                    <a href="#"><img src={ImageEnamad3} alt="نماد اعتماد الکترونیکی"/></a>
                                </div>
                            </div>
                            <div className={'border border-lightBlue rounded-[15px] px-[28px] py-[25px] lg:col-span-2 col-span-1'}>
                                <div className={'flex lg:flex-row flex-col lg:items-center gap-[42px] mb-[30px]'}>
                                    <div>
                                        <div className={'flex items-center mb-[10px]'}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.3082 15.2748C18.3082 15.5748 18.2415 15.8832 18.0998 16.1832C17.9582 16.4832 17.7748 16.7665 17.5332 17.0332C17.1248 17.4832 16.6748 17.8082 16.1665 18.0165C15.6665 18.2248 15.1248 18.3332 14.5415 18.3332C13.6915 18.3332 12.7832 18.1332 11.8248 17.7248C10.8665 17.3165 9.90817 16.7665 8.95817 16.0748C7.99984 15.3748 7.0915 14.5998 6.22484 13.7415C5.3665 12.8748 4.5915 11.9665 3.89984 11.0165C3.2165 10.0665 2.6665 9.1165 2.2665 8.17484C1.8665 7.22484 1.6665 6.3165 1.6665 5.44984C1.6665 4.88317 1.7665 4.3415 1.9665 3.8415C2.1665 3.33317 2.48317 2.8665 2.92484 2.44984C3.45817 1.92484 4.0415 1.6665 4.65817 1.6665C4.8915 1.6665 5.12484 1.7165 5.33317 1.8165C5.54984 1.9165 5.7415 2.0665 5.8915 2.28317L7.82484 5.00817C7.97484 5.2165 8.08317 5.40817 8.15817 5.5915C8.23317 5.7665 8.27484 5.9415 8.27484 6.09984C8.27484 6.29984 8.2165 6.49984 8.09984 6.6915C7.9915 6.88317 7.83317 7.08317 7.63317 7.28317L6.99984 7.9415C6.90817 8.03317 6.8665 8.1415 6.8665 8.27484C6.8665 8.3415 6.87484 8.39984 6.8915 8.4665C6.9165 8.53317 6.9415 8.58317 6.95817 8.63317C7.10817 8.90817 7.3665 9.2665 7.73317 9.69984C8.10817 10.1332 8.50817 10.5748 8.9415 11.0165C9.3915 11.4582 9.82484 11.8665 10.2665 12.2415C10.6998 12.6082 11.0582 12.8582 11.3415 13.0082C11.3832 13.0248 11.4332 13.0498 11.4915 13.0748C11.5582 13.0998 11.6248 13.1082 11.6998 13.1082C11.8415 13.1082 11.9498 13.0582 12.0415 12.9665L12.6748 12.3415C12.8832 12.1332 13.0832 11.9748 13.2748 11.8748C13.4665 11.7582 13.6582 11.6998 13.8665 11.6998C14.0248 11.6998 14.1915 11.7332 14.3748 11.8082C14.5582 11.8832 14.7498 11.9915 14.9582 12.1332L17.7165 14.0915C17.9332 14.2415 18.0832 14.4165 18.1748 14.6248C18.2582 14.8332 18.3082 15.0415 18.3082 15.2748Z" stroke="#D6D9E8" strokeWidth="1.5" strokeMiterlimit="10"/>
                                                <path d="M15.4167 7.50016C15.4167 7.00016 15.025 6.2335 14.4417 5.6085C13.9083 5.0335 13.2 4.5835 12.5 4.5835" stroke="#1C40BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18.3333 7.49984C18.3333 4.27484 15.725 1.6665 12.5 1.6665" stroke="#1C40BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span className={'text-[16px] font-normal text-white block mr-[11px]'}>تلفن تماس</span>
                                        </div>
                                        <div className={'flex items-center gap-[16px]'}>
                                            <a className={'text-[17px] font-normal text-white'} href="tel:02191070175">02191070175</a>
                                            <a className={'text-[17px] font-normal text-white'} href="tel:04336434343">04336434343</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={'flex items-center'}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.6665 7.08317C1.6665 4.1665 3.33317 2.9165 5.83317 2.9165H14.1665C16.6665 2.9165 18.3332 4.1665 18.3332 7.08317V12.9165C18.3332 15.8332 16.6665 17.0832 14.1665 17.0832H5.83317" stroke="#D6D9E8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M14.1668 7.5L11.5585 9.58333C10.7002 10.2667 9.29183 10.2667 8.43349 9.58333L5.8335 7.5" stroke="#D6D9E8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M1.6665 13.75H6.6665" stroke="#1C40BF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M1.6665 10.4165H4.1665" stroke="#1C40BF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span className={'text-[16px] font-normal text-white mb-[10px] mr-[11px]'}>پست الکترونیکی</span>
                                        </div>
                                        <a className={'text-[17px] font-normal text-white'} href="mailto:info@mizbanonline.com">info@mizbanonline.com</a>
                                    </div>
                                </div>
                                <div className={'flex lg:flex-row flex-col lg:items-center gap-[42px]'}>
                                    <div>
                                        <div className={'flex items-center mb-[10px]'}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.01675 7.07484C4.65842 -0.141827 15.3501 -0.133494 16.9834 7.08317C17.9418 11.3165 15.3084 14.8998 13.0001 17.1165C11.3251 18.7332 8.67508 18.7332 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484Z" stroke="#D6D9E8" strokeWidth="1.5"/>
                                                <path d="M7.7085 9.58333L8.9585 10.8333L12.2918 7.5" stroke="#1C40BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span className={'text-[16px] font-normal text-white block mr-[11px]'}>آدرس دفتر</span>
                                        </div>
                                        <span className={'text-[17px] font-normal text-white'}>تهران - تهرانسر - بلوار لاله - قباد شمالی - ششم شرقی - پلاک ۶ </span>
                                    </div>
                                    <div>
                                        <span className={'text-[16px] font-normal text-white mb-[10px] block'}>شبکه های اجتماعی</span>
                                        <ul className={'flex items-center gap-[10px]'}>
                                            <li><a className={'text-myGrey transition-all hover:text-themeBlue'} href="#"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_118_112)"><path fillRule="evenodd" clipRule="evenodd" d="M20.6866 5.55171C20.8627 4.48408 19.7936 3.64081 18.7963 4.06071L3.1211 10.6609C2.02804 11.121 1.97204 12.7012 3.12187 13.1778C3.97261 13.5305 5.27462 14.0476 6.58043 14.4781C7.65153 14.8312 8.81916 15.159 9.75455 15.2518C10.0106 15.5581 10.3329 15.8524 10.6604 16.1216C11.1618 16.534 11.7656 16.9595 12.3888 17.3667C13.637 18.1823 15.0219 18.9626 15.9553 19.4697C17.0708 20.0756 18.4062 19.3779 18.6068 18.162L20.6866 5.55171ZM4.8791 11.9098L18.7425 6.07256L16.8013 17.8428C15.886 17.3451 14.5666 16.5997 13.3917 15.832C12.7973 15.4436 12.2545 15.0589 11.8248 14.7056C11.6718 14.5798 11.5423 14.4652 11.4344 14.3626L15.0654 10.7315C15.4234 10.3736 15.4234 9.79314 15.0654 9.43518C14.7075 9.07719 14.127 9.07719 13.7691 9.43518L9.79235 13.4119C9.12003 13.3259 8.18279 13.076 7.15448 12.737C6.36311 12.476 5.56741 12.1797 4.8791 11.9098Z" fill="currentColor"/></g><defs><clipPath id="clip0_118_112"><rect width="22" height="22" fill="white" transform="translate(0.666992)"/></clipPath></defs></svg></a></li>
                                            <li><a className={'text-myGrey transition-all hover:text-themeBlue'} href="#"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_118_118)"><path fillRule="evenodd" clipRule="evenodd" d="M16.8323 6.40637C16.5088 5.94048 15.6435 5.28661 14.2418 5.56816C13.4245 5.73234 12.9354 6.13753 12.6247 6.67061C12.2936 7.23842 12.1336 8.01121 12.1336 8.91084C12.1336 9.41708 11.7232 9.82747 11.2169 9.82747C9.04803 9.82747 6.98378 9.18342 5.24668 7.44031C5.13402 8.06736 5.05542 8.81244 5.0927 9.58501C5.14073 10.5805 5.37878 11.5793 5.94246 12.4346C6.49651 13.2752 7.40909 14.0453 8.93393 14.5287C9.23797 14.625 9.47006 14.8725 9.54673 15.1821C9.62341 15.4916 9.53365 15.8189 9.30973 16.046C8.76802 16.5955 8.22319 17.0076 7.66338 17.3339C8.63575 17.4344 9.57236 17.4418 10.441 17.3632C12.2006 17.2041 13.6025 16.7005 14.4792 15.989C16.3241 14.4919 17.312 12.261 17.1278 8.52319C17.0975 7.90809 17.6899 7.24585 17.976 6.74294C17.5443 6.82366 17.1117 6.80854 16.8323 6.40637ZM4.71094 4.56827C5.04933 4.52883 5.38168 4.68029 5.5739 4.96155C6.92633 6.94046 8.55074 7.76368 10.3532 7.95097C10.4416 7.17988 10.6497 6.418 11.0408 5.74722C11.6146 4.76304 12.5478 4.03847 13.8808 3.77073C15.7227 3.40076 17.1252 4.06782 17.939 4.88476L19.5815 4.57771C19.9324 4.51214 20.2894 4.65614 20.4965 4.9468C20.7036 5.23746 20.7232 5.62191 20.5467 5.93212L18.9705 8.70236C19.1142 12.7003 18.0032 15.4904 15.6344 17.4126C14.3779 18.4322 12.5798 19.0105 10.6062 19.1891C8.61706 19.3691 6.36863 19.1514 4.13351 18.4988C3.74137 18.3843 3.47233 18.0241 3.47378 17.6157C3.47522 17.2071 3.74679 16.8489 4.13972 16.7371C5.26376 16.4175 6.11928 16.1411 6.89263 15.6585C5.79404 15.0752 4.98457 14.3127 4.41166 13.4434C3.61538 12.2352 3.32011 10.8882 3.26149 9.67338C3.20288 8.45865 3.37842 7.33357 3.5633 6.52156C3.66854 6.05932 3.79147 5.59493 3.96091 5.15131C4.08397 4.83158 4.37256 4.60773 4.71094 4.56827Z" fill="currentColor"/></g><defs><clipPath id="clip0_118_118"><rect width="22" height="22" fill="white" transform="translate(0.5)"/></clipPath></defs></svg></a></li>
                                            <li><a className={'text-myGrey transition-all hover:text-themeBlue'} href="#"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_118_106)"><path d="M16.833 2.75C18.3518 2.75 19.583 3.98122 19.583 5.5V16.5C19.583 18.0188 18.3518 19.25 16.833 19.25H5.83301C4.31423 19.25 3.08301 18.0188 3.08301 16.5V5.5C3.08301 3.98122 4.31423 2.75 5.83301 2.75H16.833ZM16.833 4.58333H5.83301C5.32675 4.58333 4.91634 4.99374 4.91634 5.5V16.5C4.91634 17.0063 5.32675 17.4167 5.83301 17.4167H16.833C17.3393 17.4167 17.7497 17.0063 17.7497 16.5V5.5C17.7497 4.99374 17.3393 4.58333 16.833 4.58333ZM7.66634 9.16667C8.13644 9.16667 8.52389 9.52052 8.57684 9.97643L8.58301 10.0833V14.6667C8.58301 15.1729 8.1726 15.5833 7.66634 15.5833C7.19625 15.5833 6.80879 15.2295 6.75584 14.7736L6.74967 14.6667V10.0833C6.74967 9.57706 7.16008 9.16667 7.66634 9.16667ZM10.4163 8.25C10.8667 8.25 11.2412 8.57475 11.3184 9.00284C11.5038 8.89565 11.6951 8.79901 11.8891 8.71601C12.5007 8.45437 13.4168 8.31045 14.2433 8.57037C14.6766 8.70659 15.1126 8.96415 15.4358 9.40097C15.7243 9.79094 15.8796 10.2652 15.9105 10.7977L15.9163 11V14.6667C15.9163 15.1729 15.5059 15.5833 14.9997 15.5833C14.5296 15.5833 14.1421 15.2294 14.0892 14.7736L14.083 14.6667V11C14.083 10.6981 14.0098 10.5561 13.962 10.4913C13.9128 10.4249 13.8331 10.3632 13.6935 10.3193C13.3742 10.2189 12.9153 10.2711 12.6102 10.4016C12.1509 10.598 11.7315 10.9057 11.4466 11.191L11.333 11.3115V14.6667C11.333 15.1729 10.9226 15.5833 10.4163 15.5833C9.94623 15.5833 9.55879 15.2295 9.50584 14.7736L9.49967 14.6667V9.16667C9.49967 8.66041 9.91007 8.25 10.4163 8.25ZM7.66634 6.41667C8.1726 6.41667 8.58301 6.82708 8.58301 7.33333C8.58301 7.83959 8.1726 8.25 7.66634 8.25C7.16008 8.25 6.74967 7.83959 6.74967 7.33333C6.74967 6.82708 7.16008 6.41667 7.66634 6.41667Z" fill="currentColor"/></g><defs><clipPath id="clip0_118_106"><rect width="22" height="22" fill="white" transform="translate(0.333008)"/></clipPath></defs></svg></a></li>
                                            <li><a className={'text-myGrey transition-all hover:text-themeBlue'} href="#"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_118_100)"><path fillRule="evenodd" clipRule="evenodd" d="M14.8337 2.75C17.3649 2.75 19.417 4.80203 19.417 7.33333V14.6667C19.417 17.198 17.3649 19.25 14.8337 19.25H7.50033C4.96902 19.25 2.91699 17.198 2.91699 14.6667V7.33333C2.91699 4.80203 4.96902 2.75 7.50033 2.75H14.8337ZM14.8337 4.58333H7.50033C5.98155 4.58333 4.75033 5.81455 4.75033 7.33333V14.6667C4.75033 16.1855 5.98155 17.4167 7.50033 17.4167H14.8337C16.3525 17.4167 17.5837 16.1855 17.5837 14.6667V7.33333C17.5837 5.81455 16.3525 4.58333 14.8337 4.58333ZM11.167 7.33333C13.192 7.33333 14.8337 8.97496 14.8337 11C14.8337 13.025 13.192 14.6667 11.167 14.6667C9.14195 14.6667 7.50033 13.025 7.50033 11C7.50033 8.97496 9.14195 7.33333 11.167 7.33333ZM11.167 9.16667C10.1544 9.16667 9.33366 9.98745 9.33366 11C9.33366 12.0126 10.1544 12.8333 11.167 12.8333C12.1795 12.8333 13.0003 12.0126 13.0003 11C13.0003 9.98745 12.1795 9.16667 11.167 9.16667ZM15.292 5.95833C15.7983 5.95833 16.2087 6.36874 16.2087 6.875C16.2087 7.38126 15.7983 7.79167 15.292 7.79167C14.7857 7.79167 14.3753 7.38126 14.3753 6.875C14.3753 6.36874 14.7857 5.95833 15.292 5.95833Z" fill="currentColor"/></g><defs><clipPath id="clip0_118_100"><rect width="22" height="22" fill="white" transform="translate(0.166992)"/></clipPath></defs></svg></a></li>
                                            <li><a className={'text-myGrey transition-all hover:text-themeBlue'} href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_118_94)"><path fillRule="evenodd" clipRule="evenodd" d="M3.66683 11.0002C3.66683 6.95007 6.95007 3.66683 11.0002 3.66683C15.0503 3.66683 18.3335 6.95007 18.3335 11.0002C18.3335 14.7398 15.5343 17.8257 11.9168 18.2768V12.8335H13.7502C14.2564 12.8335 14.6668 12.4231 14.6668 11.9168C14.6668 11.4106 14.2564 11.0002 13.7502 11.0002H11.9168V9.16683C11.9168 8.66057 12.3272 8.25016 12.8335 8.25016H13.2918C13.7981 8.25016 14.2085 7.83975 14.2085 7.3335C14.2085 6.82724 13.7981 6.41683 13.2918 6.41683H12.8335C11.3147 6.41683 10.0835 7.64805 10.0835 9.16683V11.0002H8.25016C7.74391 11.0002 7.3335 11.4106 7.3335 11.9168C7.3335 12.4231 7.74391 12.8335 8.25016 12.8335H10.0835V18.2768C6.46605 17.8257 3.66683 14.7398 3.66683 11.0002ZM11.0002 20.1668C16.0627 20.1668 20.1668 16.0627 20.1668 11.0002C20.1668 5.93755 16.0627 1.8335 11.0002 1.8335C5.93755 1.8335 1.8335 5.93755 1.8335 11.0002C1.8335 16.0627 5.93755 20.1668 11.0002 20.1668Z" fill="currentColor"/></g><defs><clipPath id="clip0_118_94"><rect width="22" height="22" fill="white"/></clipPath></defs></svg></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </HolderComponent>
            <div className={'bg-white w-full px-auto lg:py-[29px] py-[20px]'}>
                <HolderComponent>
                    <div className={'flex flex-wrap gap-[20px] items-center justify-between'}>
                        <span className={'text-[15px] font-normal text-raven'}>تمامی حقوق مادی و معنوی برای میزبان آنلاین محفوظ می باشد</span>
                        <div className={'flex gap-[30px]'}>
                            <a className={'text-[15px] font-normal text-raven hover:text-themeBlue transition-all'} href="#">قوانین و مقررات</a>
                            <a className={'text-[15px] font-normal text-raven hover:text-themeBlue transition-all'} href="#">سیاست حریم خصوصی</a>
                        </div>
                    </div>
                </HolderComponent>
            </div>
        </footer>
    );
}
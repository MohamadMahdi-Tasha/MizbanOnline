// Importing Part
import SectionComponent from "../../chunks/sectionComponent.tsx";
import PlanComponent from '../../components/planComponent.tsx';
import BlueServerImage from '../../assets/img/homePage/secondSection/plans/img-blue.png';
import GreenServerImage from '../../assets/img/homePage/secondSection/plans/img-green.png';
import YellowServerImage from '../../assets/img/homePage/secondSection/plans/img-yellow.png';

import LinuxLogoImage from '../../assets/img/homePage/secondSection/logos/img-linux.svg';
import MikrotikLogoImage from '../../assets/img/homePage/secondSection/logos/img-mikrotik.svg';
import VmwareLogoImage from '../../assets/img/homePage/secondSection/logos/img-vmware.svg';
import UbuntoLogoImage from '../../assets/img/homePage/secondSection/logos/img-ubunto.svg';
import CpanelLogoImage from '../../assets/img/homePage/secondSection/logos/img-cpanel.svg';
import MicrosoftLogoImage from '../../assets/img/homePage/secondSection/logos/img-microsoft.svg';
import TitleAndParagraphComponent from "../../chunks/titleAndParagraphComponent.tsx";

// Creating functional component of home page's Second Section and exporting it as default
export default function SecondSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <div className={'bg-myGrey'}>
            <SectionComponent className={'lg:pt-[300px] pt-[500px] lg:pb-[67px] pb-[20px]'}>
                <header className={'lg:mb-[50px] mb-[20px]'}>
                    <TitleAndParagraphComponent centred title={'خدمات ما برای کسب و کارها'} marginBottom={0}>
                        با انتخاب سرویس مناسب کسب و کار خود را سریعتر رشد دهید میزبان آنلاین در این مسیر همراه شماست
                    </TitleAndParagraphComponent>
                </header>
                <main className={'lg:mb-[92px] mb-[50px]'}>
                    <div className={'flex lg:flex-row flex-col lg:gap-[35px] gap-[20px] lg:mb-[87px] mb-[50px]'}>
                        <PlanComponent img={BlueServerImage}
                                       type={'HOST'}
                                       title={'هاست اشتراکی'}
                                       paragraph={'هاست اشتراکی را در چندلایه‌ی مختلف و با راهکارهای اختصاصی برای بالاترین سطح سرعت و امنیت بهینه‌سازی کرده‌ایم.'}
                        >
                            <li>سیستم RAID برای اطمینان بیشتر</li>
                            <li>کنترل‌پنل مدیریت هاست</li>
                            <li>نصب رایگان سیستم مدیریت سایت</li>
                        </PlanComponent>
                        <PlanComponent isBigger img={GreenServerImage}
                                       type={'VPS'}
                                       title={'سرور مجازی'}
                                       paragraph={'شما می توانید به تمامی منابع  دسترسی داشته باشید. علاوه بر این پایداری و آپتایم بالای این VPS در نوع خودش مثال زدنی است.'}
                        >
                            <li>سیستم RAID برای اطمینان بیشتر</li>
                            <li>کنترل‌پنل مدیریت هاست</li>
                            <li>نصب رایگان سیستم مدیریت سایت</li>
                        </PlanComponent>
                        <PlanComponent img={YellowServerImage}
                                       type={'VDS'}
                                       title={'سرور اختصاصی'}
                                       paragraph={'شما میتوانید  مدیریت کامل منابع را با اجاره‌ی یک سرور فیزیکی ، به دست می‌آورید و دیگر نیازی به اشتراک منابع با کاربران دیگر نیست.'}
                        >
                            <li>سیستم RAID برای اطمینان بیشتر</li>
                            <li>کنترل‌پنل مدیریت هاست</li>
                            <li>نصب رایگان سیستم مدیریت سایت</li>
                        </PlanComponent>
                    </div>
                    <ul className={'flex flex-wrap lg:gap-[62px] gap-[30px] justify-center items-center'}>
                        <li><a className={'transition-all opacity-25 hover:opacity-50'} href="#"><img src={LinuxLogoImage} alt="لوگو لینوکس"/></a></li>
                        <li><a className={'transition-all opacity-25 hover:opacity-50'} href="#"><img src={MikrotikLogoImage} alt="لوگو میکروتک"/></a></li>
                        <li><a className={'transition-all opacity-25 hover:opacity-50'} href="#"><img src={VmwareLogoImage} alt="لوگو وی ام ویر"/></a></li>
                        <li><a className={'transition-all opacity-25 hover:opacity-50'} href="#"><img src={UbuntoLogoImage} alt="لوگو اوبونتو"/></a></li>
                        <li><a className={'transition-all opacity-25 hover:opacity-50'} href="#"><img src={CpanelLogoImage} alt="لوگو سی پنل"/></a></li>
                        <li><a className={'transition-all opacity-25 hover:opacity-50'} href="#"><img src={MicrosoftLogoImage} alt="لوگو مایکروسافت"/></a></li>
                    </ul>
                </main>
                <footer>
                    <h6 className={'lg:text-[16px] text-[12px] font-normal text-darkBlue mb-[22px] lg:text-center'}>نیاز به راهنمایی بیشتر دارید؟ بی صبرانه منتظر صدای گرم تان هستیم</h6>
                    <div className={'flex lg:flex-row flex-col items-center justify-center lg:gap-[22px] gap-[10px]'}>
                        <a className={'lg:w-auto w-full'} href="#"><button className={'px-[18px] py-[14px] lg:w-auto w-full bg-themeBlue text-white font-normal rounded-[8px] text-[15px]'} tabIndex={-1}>همین حالا شروع کنید</button></a>
                        <a className={'lg:w-auto w-full'} href="#"><button className={'px-[18px] py-[14px] lg:w-auto w-full border border-gainSbro font-normal rounded-[8px] text-[15px] text-outerSpace'} tabIndex={-1}>با ما در تماس باشید</button></a>
                    </div>
                </footer>
            </SectionComponent>
        </div>
    );
}

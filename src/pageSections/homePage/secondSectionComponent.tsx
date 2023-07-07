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

// Creating functional component of home page's Second Section and exporting it as default
export default function SecondSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'mt-[250px]'}>
            <header>
                <h3>خدمات ما برای کسب و کارها</h3>
                <p>با انتخاب سرویس مناسب کسب و کار خود را سریعتر رشد دهید میزبان آنلاین در این مسیر همراه شماست</p>
            </header>
            <main>
                <div>
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
                <ul>
                    <li><a href="#"><img src={LinuxLogoImage} alt="لوگو لینوکس"/></a></li>
                    <li><a href="#"><img src={MikrotikLogoImage} alt="لوگو میکروتک"/></a></li>
                    <li><a href="#"><img src={VmwareLogoImage} alt="لوگو وی ام ویر"/></a></li>
                    <li><a href="#"><img src={UbuntoLogoImage} alt="لوگو اوبونتو"/></a></li>
                    <li><a href="#"><img src={CpanelLogoImage} alt="لوگو سی پنل"/></a></li>
                    <li><a href="#"><img src={MicrosoftLogoImage} alt="لوگو مایکروسافت"/></a></li>
                </ul>
            </main>
            <footer>
                <h6>نیاز به راهنمایی بیشتر دارید؟ بی صبرانه منتظر صدای گرم تان هستیم</h6>
                <div>
                    <a href="#"><button tabIndex={-1}>همین حالا شروع کنید</button></a>
                    <a href="#"><button tabIndex={-1}>با ما در تماس باشید</button></a>
                </div>
            </footer>
        </SectionComponent>
    );
}

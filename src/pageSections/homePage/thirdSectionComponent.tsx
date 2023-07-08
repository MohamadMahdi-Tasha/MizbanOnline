// Importing Part
import SectionComponent from "../../chunks/sectionComponent.tsx";
import ServiceComponent from '../../components/serviceComponent.tsx';

import SoftwareServerImage from '../../assets/img/homePage/thirdSection/img-software.png';
import MonitoringServerImage from '../../assets/img/homePage/thirdSection/img-monitoring.png';
import ConfigServerImage from '../../assets/img/homePage/thirdSection/img-config.png';
import SSLServerImage from '../../assets/img/homePage/thirdSection/img-ssl.png';
import ServerImage from '../../assets/img/homePage/thirdSection/img-server.png';

// Creating functional component of home page's Third Section and exporting it as default
export default function ThirdSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'py-[76px]'}>
            <header className={'mb-[50px]'}>
                <h3 className={'text-center font-bold text-[24px] text-darkBlue mb-[10px]'}>سرویس های متنوع و جامع متناسب با هر نوع نیاز</h3>
                <p className={'text-center font-normal text-[16px] text-raven'}>
                    میزبان آنلاین با ارایه طیف گسترده ای از خدمات در هر مرحله ای از نیاز های زیرساختی مشترکین
                    <br/>
                    یک راهکار هوشمندانه برای ارایه به مشترکین دارد.
                </p>
            </header>
            <main>
                <ul className={'flex justify-center gap-[66px] mx-auto flex-wrap'}>
                    <ServiceComponent img={SoftwareServerImage} title={'لایسنس های نرم افزاری'} subTitle={'Software licenses'} />
                    <ServiceComponent img={MonitoringServerImage} title={'گواهینامه های SSL'} subTitle={'SSL Certificates'} />
                    <ServiceComponent img={ConfigServerImage} title={'کانفیگ سرور'} subTitle={'Server config'} />
                    <ServiceComponent img={SSLServerImage} title={'مدیریت سرور'} subTitle={'Server management'} />
                    <ServiceComponent img={ServerImage} title={'مانیتورینگ سرور'} subTitle={'Server monitoring'} />
                </ul>
            </main>
        </SectionComponent>
    );
}

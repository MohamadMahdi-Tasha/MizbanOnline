// Importing Part
import SectionComponent from "../../chunks/sectionComponent.tsx";
import MainImage from '../../assets/img/homePage/fifthSection/img-main.png';
import BackUpImage from '../../assets/img/homePage/fifthSection/img-backup.png';
import BackUpImage2 from '../../assets/img/homePage/fifthSection/img-backup2.png';

// Creating functional component of home page's Fifth Section and exporting it as default
export default function FifthSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'py-[58px]'}>
            <main className={'flex items-center gap-[150px]'}>
                <div>
                    <h3 className={'text-darkBlue text-[24px] font-bold'}>اطلاعات شما سرمایه شماست !</h3>
                    <p className={'text-raven text-[16px] font-normal mb-[82px]'}>
                        دیگر نگران از دست رفتن حتی یک بیت از اطلاعات خود نباشید.  میزبان آنلاین
                        <br/>
                        با بهره گیری سرورهای مختلف به صورت خودکار در بازه های هفتگی  از
                        <br/>
                        سایت شما پشتیبان تهیه می کند
                    </p>
                    <div className={'flex gap-[72px]'}>
                        <div>
                            <img className={'mb-[10px] block w-[65px]'} src={BackUpImage} alt="بک اپ"/>
                            <span className={'text-[16px] block mb-[5px] font-normal text-outerSpace'}>امکان تنظیم نحوه بک آپ</span>
                            <span className={'text-[13px] block font-normal text-raven'}>تنظیم زمان به صورت خودکار یا دستی</span>
                        </div>
                        <div>
                            <img className={'mb-[10px] block w-[65px]'} src={BackUpImage2} alt="بک اپ"/>
                            <span className={'text-[16px] block mb-[5px] font-normal text-outerSpace'}>بک آپ روی سرورهای مجزا</span>
                            <span className={'text-[13px] block font-normal text-raven'}>افزایش ضریب اطمینان از حفظ اطلاعات</span>
                        </div>
                    </div>
                </div>
                <img src={MainImage} alt="میزبان انلاین"/>
            </main>
        </SectionComponent>
    );
}

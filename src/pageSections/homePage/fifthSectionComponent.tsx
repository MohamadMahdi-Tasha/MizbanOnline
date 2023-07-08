// Importing Part
import SectionComponent from "../../chunks/sectionComponent.tsx";
import MainImage from '../../assets/img/homePage/fifthSection/img-main.png';
import BackUpImage from '../../assets/img/homePage/fifthSection/img-backup.png';
import BackUpImage2 from '../../assets/img/homePage/fifthSection/img-backup2.png';
import TitleAndParagraphComponent from "../../chunks/titleAndParagraphComponent.tsx";

// Creating functional component of home page's Fifth Section and exporting it as default
export default function FifthSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'lg:py-[58px] py-[20px]'}>
            <main className={'flex lg:flex-row flex-col items-center lg:gap-[150px] gap-[30px]'}>
                <div>
                    <div className={'lg:mb-[82px] mb-[30px]'}>
                        <TitleAndParagraphComponent title={'اطلاعات شما سرمایه شماست !'} marginBottom={0}>
                            دیگر نگران از دست رفتن حتی یک بیت از اطلاعات خود نباشید.  میزبان آنلاین
                            <br/>
                            با بهره گیری سرورهای مختلف به صورت خودکار در بازه های هفتگی  از
                            <br/>
                            سایت شما پشتیبان تهیه می کند
                        </TitleAndParagraphComponent>
                    </div>
                    <div className={'flex lg:items-start lg:gap-[72px] gap-[20px]'}>
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
                <img className={'lg:w-auto w-[50%] lg:mx-0 mx-auto'} src={MainImage} alt="میزبان انلاین"/>
            </main>
        </SectionComponent>
    );
}

// Importing Part
import SectionComponent from "../../chunks/sectionComponent.tsx";
import MainImage from '../../assets/img/homePage/fourthSection/img-main.png';
import SecurityFeaturesComponent from '../../components/securityFeaturesComponent.tsx';
import TitleAndParagraphComponent from "../../chunks/titleAndParagraphComponent.tsx";

// Creating functional component of home page's Fourth Section and exporting it as default
export default function FourthSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <div className={'bg-myGrey'}>
            <SectionComponent className={'lg:py-[71px] py-[20px]'}>
                <main className={'flex lg:flex-row flex-col items-start lg:gap-[64px] gap-[30px]'}>
                    <img className={'lg:w-auto w-[50%] lg:mx-0 mx-auto'} src={MainImage} alt="ایلوستریشن"/>
                    <div>
                        <div className={'lg:mb-[39px] mb-[20px]'}>
                            <TitleAndParagraphComponent title={'امنیت وب سایت از نام آن مهم تر است!'} marginBottom={0}>
                                میزبان آنلاین نهایت تلاش خود را جهت ارائه هاست مطمئن و امن می نماید تا اطمینان
                                <br className={'lg:block hidden'}/>
                                حاصل کند، امن ترین محیط میزبانی را برای مشتریان خود فراهم کرده است.
                            </TitleAndParagraphComponent>
                        </div>
                        <ul className={'flex flex-col gap-[21px] list-inside'}>
                            <SecurityFeaturesComponent title={'سخت افزار های Anti DDoS و UTM'}>استفاده از فایروال و UTM های سخت افزاری روی لبه شبکه در دیتاسنتر</SecurityFeaturesComponent>
                            <SecurityFeaturesComponent title={'کانفیگ های امنیتی ســــرور'}>استفاده از فایروال های نرم افزاری و Bruteforce Protection پیشرفته</SecurityFeaturesComponent>
                            <SecurityFeaturesComponent title={'گواهینامه SSL و آنتی شل'}>استفاده از گواهینامه SSL معتبر و نرم افزار های Anti Shell جهت افزایش امنیت</SecurityFeaturesComponent>
                            <SecurityFeaturesComponent title={'آنتی ویروس و Anti Malware پیشرفته و به روز'}>اسکن روزانه کلیه وبسایت ها توسط آنتی ویروس و ارسال گزارش دقیق به صاحب وبسایت</SecurityFeaturesComponent>
                        </ul>
                    </div>
                </main>
            </SectionComponent>
        </div>
    );
}

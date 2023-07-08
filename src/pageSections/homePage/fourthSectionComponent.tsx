// Importing Part
import SectionComponent from "../../chunks/sectionComponent.tsx";
import MainImage from '../../assets/img/homePage/fourthSection/img-main.png';
import SecurityFeaturesComponent from '../../components/securityFeaturesComponent.tsx';

// Creating functional component of home page's Fourth Section and exporting it as default
export default function FourthSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <div className={'bg-myGrey'}>
            <SectionComponent>
                <main>
                    <img src={MainImage} alt="ایلوستریشن"/>
                    <div>
                        <h3>امنیت وب سایت از نام آن مهم تر است!</h3>
                        <p>میزبان آنلاین نهایت تلاش خود را جهت ارائه هاست مطمئن و امن می نماید تا اطمینان حاصل کند، امن ترین محیط میزبانی را برای مشتریان خود فراهم کرده است.</p>
                        <ul>
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

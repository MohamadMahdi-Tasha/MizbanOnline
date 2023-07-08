// Importing Part
import SectionComponent from "../../chunks/sectionComponent.tsx";
import MainImage from '../../assets/img/homePage/fifthSection/img-main.png';
import BackUpImage from '../../assets/img/homePage/fifthSection/img-backup.png';
import BackUpImage2 from '../../assets/img/homePage/fifthSection/img-backup2.png';

// Creating functional component of home page's Fifth Section and exporting it as default
export default function FifthSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'relative'}>
            <main>
                <div>
                    <h3>اطلاعات شما سرمایه شماست !</h3>
                    <p>
                        دیگر نگران از دست رفتن حتی یک بیت از اطلاعات خود نباشید.  میزبان آنلاین
                        <br/>
                        با بهره گیری سرورهای مختلف به صورت خودکار در بازه های هفتگی  از
                        <br/>
                        سایت شما پشتیبان تهیه می کند
                    </p>
                    <div>
                        <div>
                            <img src={BackUpImage} alt="بک اپ"/>
                            <span>امکان تنظیم نحوه بک آپ</span>
                        </div>
                        <div>
                            <img src={BackUpImage2} alt="بک اپ"/>
                            <span>بک آپ روی سرورهای مجزا</span>
                        </div>
                    </div>
                </div>
                <img className={'w-full'} src={MainImage} alt="میزبان انلاین"/>
            </main>
        </SectionComponent>
    );
}

// Importing Part
import SectionComponent from "../../chunks/sectionComponent.tsx";
import MainImage from '../../assets/img/homePage/firstSection/img-main.png';
import TagLikeComponent from "../../chunks/tagLikeComponent.tsx";
import SearchDomainComponent from '../../components/searchDomainComponent.tsx';

// Creating functional component of home page's First Section and exporting it as default
export default function FirstSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent>
            <header>
                <TagLikeComponent>موفقیت شما ، اعتبار ماست</TagLikeComponent>
                <h1>انتخاب
                    <span>میزبان آنلاین</span>
                    ؛ تضمین میزبانی حرفه ای و پایدار
                </h1>
                <p>به صورت ۲۴ ساعته و در تمامی لحظات، توان و تلاشمان را در جهت حفاظت از دارایی آنلاینتان بکار می گیریم تا خیال شما همواره آسوده باشد</p>
            </header>
            <main><img src={MainImage} alt="میزبان انلاین"/></main>
            <footer><SearchDomainComponent /></footer>
        </SectionComponent>
    );
}

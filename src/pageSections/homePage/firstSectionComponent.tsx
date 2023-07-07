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
            <header className={'mt-[77px]'}>
                <div className={'flex justify-center items-center mb-[27px]'}>
                    <TagLikeComponent type={'success'}>موفقیت شما ، اعتبار ماست</TagLikeComponent>
                </div>
                <h1 className={'text-center font-black text-[32px] text-darkBlue mb-[12px]'}>
                    انتخاب
                    <span className={'text-themeBlue inline-block'}>میزبان آنلاین</span>
                    ؛ تضمین میزبانی حرفه ای و پایدار
                </h1>
                <p className={'text-center text-raven font-normal text-[15px]'}>
                    به صورت ۲۴ ساعته و در تمامی لحظات، توان و تلاشمان را در جهت حفاظت از دارایی آنلاینتان بکار می گیریم تا خیال
                    <br/>
                    شما همواره آسوده باشد
                </p>
            </header>
            <main><img className={'w-full'} src={MainImage} alt="میزبان انلاین"/></main>
            <footer className={'shadow-blueish top-[88%] translate-x-[5%] search-domain-component'}>
                <SearchDomainComponent />
            </footer>
        </SectionComponent>
    );
}

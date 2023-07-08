// Importing Part
import SectionComponent from "../../chunks/sectionComponent.tsx";
import MainImage from '../../assets/img/homePage/firstSection/img-main.png';
import TagLikeComponent from "../../chunks/tagLikeComponent.tsx";
import SearchDomainComponent from '../../components/searchDomainComponent.tsx';

// Creating functional component of home page's First Section and exporting it as default
export default function FirstSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'relative'}>
            <header className={'lg:mt-[77px] mt-[20px]'}>
                <div className={'flex lg:justify-center justify-start items-center lg:mb-[27px] mb-[20px]'}>
                    <TagLikeComponent type={'success'}>موفقیت شما ، اعتبار ماست</TagLikeComponent>
                </div>
                <h1 className={'lg:text-center font-black text-[32px] text-darkBlue mb-[12px]'}>
                    انتخاب
                    <span className={'text-themeBlue inline-block'}>میزبان آنلاین</span>
                    ؛ تضمین میزبانی حرفه ای و پایدار
                </h1>
                <p className={'lg:text-center text-raven font-normal lg:text-[15px] text-[17px]'}>
                    به صورت ۲۴ ساعته و در تمامی لحظات، توان و تلاشمان را در جهت حفاظت از دارایی آنلاینتان بکار می گیریم تا خیال
                    <br/>
                    شما همواره آسوده باشد
                </p>
            </header>
            <main className={'lg:mb-0 mb-[20px]'}><img className={'w-full'} src={MainImage} alt="میزبان انلاین"/></main>
            <footer className={'shadow-blueish lg:top-[88%] top-auto lg:bottom-auto bottom-0 lg:translate-x-[5%] translate-x-0 lg:translate-y-0 translate-y-[90%] search-domain-component'}>
                <SearchDomainComponent />
            </footer>
        </SectionComponent>
    );
}

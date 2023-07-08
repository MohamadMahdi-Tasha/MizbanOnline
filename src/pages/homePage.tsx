// Importing Part
import FirstSectionComponent from "../pageSections/homePage/firstSectionComponent.tsx";
import SecondSectionComponent from "../pageSections/homePage/secondSectionComponent.tsx";
import ThirdSectionComponent from "../pageSections/homePage/thirdSectionComponent.tsx";
import FourthSectionComponent from '../pageSections/homePage/fourthSectionComponent.tsx'
import FifthSectionComponent from "../pageSections/homePage/fifthSectionComponent.tsx";
import SixthSectionComponent from "../pageSections/homePage/sixthSectionComponent.tsx";
import BlogComponent from "../components/blogComponent.tsx";

// Creating functional component of home page and exporting it as default
export default function HomePage():JSX.Element {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
            <FifthSectionComponent />
            <SixthSectionComponent />
            <div>
                <div>
                    <span>میزبان بلاگ</span>
                    <a href="#">
                        <button tabIndex={-1}>
                            مشاهده وبلاگ
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.375 3.75L5.625 7.5L9.375 11.25" stroke="#737C8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </a>
                </div>
                <div>
                    <BlogComponent
                        date={new Date('2023-07-08')}
                        link={'#'}
                        title={'کولوکیشن چیست؟ هرآنچه باید درباره Colocation بدانید'}  />
                    <BlogComponent
                        date={new Date('2023-07-08')}
                        link={'#'}
                        title={'کولوکیشن چیست؟ هرآنچه باید درباره Colocation بدانید'}  />
                    <BlogComponent
                        date={new Date('2023-07-08')}
                        link={'#'}
                        title={'کولوکیشن چیست؟ هرآنچه باید درباره Colocation بدانید'}  />
                </div>
            </div>
        </>
    );
}

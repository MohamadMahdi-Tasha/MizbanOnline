// Importing Part
import SectionComponent from "../../chunks/sectionComponent.tsx";
import BlogComponent from "../../components/blogComponent.tsx";

// Creating functional component of home page's Seventh Section and exporting it as default
export default function SeventhSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'py-[58px]'}>
            <header className={'flex items-center justify-between mb-[55px]'}>
                <span className={'text-[20px] font-bold text-darkBlue'}>میزبان بلاگ</span>
                <a href="#">
                    <button className={'font-normal text-[14px] text-raven flex items-center'} tabIndex={-1}>
                        <span className={'ml-[4px]'}>مشاهده وبلاگ</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.375 3.75L5.625 7.5L9.375 11.25" stroke="#737C8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </a>
            </header>
            <main className={'flex items-center justify-between gap-[80px]'}>
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
            </main>
        </SectionComponent>
    );
}

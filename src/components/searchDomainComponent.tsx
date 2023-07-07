// Importing Part
import Image from "../assets/img/img-search-domain-component.png";

// Creating functional component of Search In Domains and exporting it as default
export default function SearchDomainComponent():JSX.Element {
    // Returning JSX
    return (
        <>
            <img src={Image} alt="ثبت دامنه"/>
            <div>
                <h6 className={'font-semibold text-[20px] text-darkBlue mb-[8px]'}>جستجو و ثبت دامنه</h6>
                <p className={'text-[15px] font-normal text-outerSpace mb-[22px]'}>
                    انتخاب نام دامنه و ثبت آن نقطه شروع فعالیت شما در دنیای وب خواهد بود. همچنین در صورتی که
                    <br/>
                    هم اکنون دامنه ای دارید می توانید آن را به میزبان آنلاین انتقال دهید.
                </p>
                <form action="#" className={'bg-aliceBlue rounded-[12px] px-[24px] py-[10px] flex items-center gap-[10px]'}>
                    <input className={'bg-transparent w-full outline-0 placeholder:text-[15px] placeholder:font-normal placeholder:text-outerSpace text-darkBlue'} type="text" placeholder={'دامنه خود را جستجو کنید'} required />
                    <div className={'flex gap-[5px]'}>
                        <button className={'w-[50px] h-[50px] rounded-[11px] flex items-center justify-center bg-myGreen'}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 8H16.5C18.9853 8 21 10.0147 21 12.5C21 14.9853 18.9853 17 16.5 17H3M3 8L6 5M3 8L6 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className={'w-[50px] h-[50px] rounded-[11px] flex items-center justify-center bg-themeBlue'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8938 13.8676L17.5 17.5M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}


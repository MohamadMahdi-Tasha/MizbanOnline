// Defining Type Of Props
interface typeOfProps {
    img: any;
    type: string;
    title: string;
    paragraph: any;
    children: any;
    isBigger?: boolean;
}

// Creating functional component of Plans and exporting it as default
export default function PlanComponent({img,type,title,paragraph,children,isBigger}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <a href="#" className={
            (isBigger)
                ? 'overflow-hidden block bg-white shadow-plan scale-[1.07] rounded-[15px] plan-item'
                : 'overflow-hidden block bg-white rounded-[15px] plan-item'
        }>
            <div className={'bg-white h-[200px] flex items-center justify-center'}><img src={img} alt="عکس سرور پلن"/></div>
            <div className={'p-[25px]'}>
                <div className={'mb-[20px] pb-[20px] border-b border-b-gainSbro'}>
                    <span className={'text-[14px] block font-normal text-raven truncate'}>{type.toUpperCase()}</span>
                    <span className={'mb-[8px] block text-[24px] font-bold truncate text-black plan-title transition-all'}>{title}</span>
                    <p className={'font-normal text-[14px] text-raven'}>{paragraph}</p>
                </div>
                <ul className={'flex flex-col gap-[5px] mb-[27px] list-inside list-tick'}>{children}</ul>
                <button tabIndex={-1} className={'plan-btn transition-all text-raven border border-gainSbro flex items-center py-[14px] px-[24px] rounded-[8px] mx-auto'}>
                    <span className={'font-normal text-[15px] ml-[13px]'}>پلن های هاست</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.97508 4.94165L2.91675 9.99998L7.97508 15.0583" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.0833 10H3.05835" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </a>
    );
}

// Defining Type Of Props
interface typeOfProps {
    name: string;
    job: string;
    children: any;
}

// Creating functional component of Comments and exporting it as default
export default function CommentComponent({name,job,children}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <div className={'p-[20px] bg-transparent transition-all rounded-[15px] [&>p]:hover:text-white [&>div>span:first-of-type]:hover:text-white [&>div>span:last-of-type]:hover:text-gainSbro hover:bg-themeBlue'}>
            <p className={'text-[15px] font-normal text-raven mb-[14px] transition-all'}>{children}</p>
            <div>
                <span className={'text-[16px] block transition-all font-normal text-outerSpace mb-[5px]'}>{name}</span>
                <span className={'text-[13px] block transition-all font-normal text-raven'}>{job}</span>
            </div>
        </div>
    );
}
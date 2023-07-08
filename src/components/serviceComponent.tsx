// Defining Type Of Props
interface typeOfProps {
    img: any;
    title: string;
    subTitle: string;
}

// Creating functional component of Service Components and exporting it as default
export default function ServiceComponent({img,title,subTitle}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <li>
            <div className={'w-[100px] mx-auto h-[100px] bg-aliceBlue rounded-full mb-[15px] flex items-center justify-center'}>
                <img src={img} alt="عکس سرویس"/>
            </div>
            <span className={'block text-center text-darkBlue mb-[8px] whitespace-nowrap text-[16px] font-semibold'}>{title}</span>
            <span className={'block text-center text-raven text-[16px] whitespace-nowrap font-normal'}>{subTitle}</span>
        </li>
    );
}

// Defining Type Of Props
interface typeOfProps {
    title: string;
    children: any;
}

// Creating functional component of Security Features List Item and exporting it as default
export default function SecurityFeaturesComponent({title, children}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <li className={'relative pr-[66px] before:absolute before:bg-[url("./assets/img/homePage/fourthSection/img-tick.svg")] before:w-[45px] before:h-[45px] before:right-0 before:top-[50%] before:translate-y-[-50%]'}>
            <span className={'block text-[16px] text-outerSpace font-normal mb-[3px]'}>{title}</span>
            <span className={'block text-[13px] text-raven font-normal'}>{children}</span>
        </li>
    );
}

// Defining Type Of Props
interface typeOfProps {
    count: string;
    children: any;
}

// Creating functional component of Achievments and exporting it as default
export default function AchievmentComponent({count,children}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <div className={'[&>span:first-of-type]:hover:text-emerald'}>
            <span className={'block text-center transition-all text-themeBlue text-[24px] font-semibold mb-[10px]'}>{count}</span>
            <span className={'block text-center text-raven text-[15px] font-normal'}>{children}</span>
        </div>
    );
}
// Defining Type Of Props
interface typeOfProps {
    title: string;
    children: any;
    centred?: boolean;
    marginBottom: number;
}

// Creating functional component of Title and paragraph and exporting it as default
export default function TitleAndParagraphComponent({title, children, centred, marginBottom}:typeOfProps):JSX.Element {
    // Return JSX
    return (
        <>
            <h3 className={
                (centred)
                    ? 'text-darkBlue lg:text-[24px] text-[20px] font-bold lg:mb-[10px] mb-[8px] lg:text-center'
                    : 'text-darkBlue lg:text-[24px] text-[20px] font-bold lg:mb-[10px] mb-[8px]'}>
                {title}
            </h3>
            <p className={
                (centred)
                    ? `text-raven lg:text-[16px] text-[14px] font-normal mb-[${marginBottom}px] lg:text-center`
                    : `text-raven lg:text-[16px] text-[14px] font-normal mb-[${marginBottom}px]`}>
                {children}
            </p>
        </>
    );
}

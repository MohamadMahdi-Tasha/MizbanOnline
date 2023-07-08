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
                    ? 'text-darkBlue text-[24px] font-bold mb-[10px] text-center'
                    : 'text-darkBlue text-[24px] font-bold mb-[10px]'}>
                {title}
            </h3>
            <p className={
                (centred)
                    ? `text-raven text-[16px] font-normal mb-[${marginBottom}px] text-center`
                    : `text-raven text-[16px] font-normal mb-[${marginBottom}px]`}>
                {children}
            </p>
        </>
    );
}

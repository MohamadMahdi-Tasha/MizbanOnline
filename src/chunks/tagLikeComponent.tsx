// Defining Type Of Props
interface typeOfProps {
    children: any;
    type: string;
}

// Creating functional component of tag Like Element First Section and exporting it as default
export default function TagLikeComponent({children, type}:typeOfProps):JSX.Element {
    // Return JSX
    return (
        <div className={`rounded-3xl py-[5px] px-[15px] ${(type === 'success') ? 'bg-lighterEmerald' : 'bg-lighterThemeBlue'}`}>
            <span className={`lg:text-[15px] text-[10px] font-normal ${(type === 'success') ? 'text-emerald' : 'text-themeBlue'}`}>
                {children}
            </span>
        </div>
    );
}

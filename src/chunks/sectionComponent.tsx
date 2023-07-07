// Importing Part
import HolderComponent from "../chunks/holderComponent.tsx";

// Defining Type Of Props
interface typeOfProps {
    children: any;
    className?: string;
}

// Creating functional component of Sections and exporting it as default
export default function SectionComponent({children, className}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <HolderComponent>
            <section className={(className === null) ? 'relative z-[20]' : `relative z-[20] ${className}`}>
                {children}
            </section>
        </HolderComponent>
    );
}


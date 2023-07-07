// Defining Type Of Props
interface typeOfProps {
    children: any;
    className?: string;
}

// Creating functional component of Sections and exporting it as default
export default function SectionComponent({children, className}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <section className={(className === null) ? 'relative z-[20]' : `relative z-[20] ${className}`}>
            {children}
        </section>
    );
}


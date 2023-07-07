// Defining Type Of Props
interface typeOfProps {children: any;}

// Creating functional component of Sections and exporting it as default
export default function SectionComponent({children}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <section>
            {children}
        </section>
    );
}


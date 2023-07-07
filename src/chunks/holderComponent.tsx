// Defining Type Of Props
interface typeOfProps {children: any;}

// Creating functional component of Holder and exporting it as default
export default function HolderComponent({children}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <div>
            {children}
        </div>
    );
}
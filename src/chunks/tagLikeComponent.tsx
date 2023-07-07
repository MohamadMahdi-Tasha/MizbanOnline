// Defining Type Of Props
interface typeOfProps {
    children: any;
}

// Creating functional component of tag Like Element First Section and exporting it as default
export default function TagLikeComponent({children}:typeOfProps):JSX.Element {
    // Return JSX
    return (
        <div>
            <span>
                {children}
            </span>
        </div>
    );
}

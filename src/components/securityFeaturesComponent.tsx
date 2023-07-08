// Defining Type Of Props
interface typeOfProps {
    title: string;
    children: any;
}

// Creating functional component of Security Features List Item and exporting it as default
export default function SecurityFeaturesComponent({title, children}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <li>
            <span>{title}</span>
            <span>{children}</span>
        </li>
    );
}

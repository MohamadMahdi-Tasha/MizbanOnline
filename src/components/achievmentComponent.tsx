// Defining Type Of Props
interface typeOfProps {
    count: string;
    children: any;
}

// Creating functional component of Achievments and exporting it as default
export default function AchievmentComponent({count,children}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <div>
            <span>{count}</span>
            <span>{children}</span>
        </div>
    );
}
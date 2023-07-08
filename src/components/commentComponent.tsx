// Defining Type Of Props
interface typeOfProps {
    name: string;
    job: string;
    children: any;
}

// Creating functional component of Comments and exporting it as default
export default function CommentComponent({name,job,children}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <div>
            <p>{children}</p>
            <div>
                <span>{name}</span>
                <span>{job}</span>
            </div>
        </div>
    );
}
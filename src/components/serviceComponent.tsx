// Defining Type Of Props
interface typeOfProps {
    img: any;
    title: string;
    subTitle: string;
}

// Creating functional component of Service Components and exporting it as default
export default function ServiceComponent({img,title,subTitle}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <li>
            <img src={img} alt="عکس سرویس"/>
            <span>{title}</span>
            <span>{subTitle}</span>
        </li>
    );
}

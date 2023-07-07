// Defining Type Of Props
interface typeOfProps {
    img: any;
    type: string;
    title: string;
    paragraph: any;
    children: any;
    isBigger?: boolean;
}

// Creating functional component of Plans and exporting it as default
export default function PlanComponent({img,type,title,paragraph,children,isBigger}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <a href="#">
            <div>
                <div><img src={img} alt="عکس سرور پلن"/></div>
            </div>
            <span>{type.toUpperCase()}</span>
            <span>{title}</span>
            <p>{paragraph}</p>
            <hr/>
            <ul>{children}</ul>
            <button tabIndex={-1}>
                <span>پلن های هاست</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.97508 4.94165L2.91675 9.99998L7.97508 15.0583" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.0833 10H3.05835" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </a>
    );
}

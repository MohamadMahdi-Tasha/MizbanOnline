// Defining Type Of Props
interface typeOfProps {
    date: Date;
    link: string;
    title: string;
}

// Creating functional component of blogs and exporting it as default
export default function BlogComponent({date,link, title}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <a href={link}>
            <time
                className={'block text-[14px] font-normal text-raven mb-[10px]'}
                dateTime={date.toString()}>{
                date.toLocaleDateString('fa-IR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            }
            </time>
            <span className={'block text-[16px] font-semibold text-outerSpace'}>{title}</span>
        </a>
    );
}
// Importing Part
import HolderComponent from "../chunks/holderComponent.tsx";

// Creating functional component of Header and exporting it as default
export default function HeaderComponent():JSX.Element {
    // Returning JSX
    return (
        <header>
            <HolderComponent>
                <div>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.9834 10L8.99173 12.0167L13.0167 7.98333" stroke="#1EAC7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.9584 2.04167C9.5334 1.55 10.4751 1.55 11.0584 2.04167L12.3751 3.175C12.6251 3.39167 13.0917 3.56667 13.4251 3.56667H14.8417C15.7251 3.56667 16.4501 4.29167 16.4501 5.175V6.59167C16.4501 6.91667 16.6251 7.39167 16.8417 7.64167L17.9751 8.95833C18.4667 9.53333 18.4667 10.475 17.9751 11.0583L16.8417 12.375C16.6251 12.625 16.4501 13.0917 16.4501 13.425V14.8417C16.4501 15.725 15.7251 16.45 14.8417 16.45H13.4251C13.1001 16.45 12.6251 16.625 12.3751 16.8417L11.0584 17.975C10.4834 18.4667 9.54173 18.4667 8.9584 17.975L7.64173 16.8417C7.39173 16.625 6.92506 16.45 6.59173 16.45H5.15006C4.26673 16.45 3.54173 15.725 3.54173 14.8417V13.4167C3.54173 13.0917 3.36673 12.625 3.1584 12.375L2.0334 11.05C1.55007 10.475 1.55007 9.54167 2.0334 8.96667L3.1584 7.64167C3.36673 7.39167 3.54173 6.925 3.54173 6.6V5.16667C3.54173 4.28333 4.26673 3.55833 5.15006 3.55833H6.59173C6.91673 3.55833 7.39173 3.38333 7.64173 3.16667L8.9584 2.04167Z" stroke="#D6D9E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>خدمات ما را از عید تا عید با  ۵۰ درصد تخفیف ویژه خریداری کنید ...</p>
                    </div>
                    <ul>
                        <li><a href="#">میزبان بلاگ</a></li>
                        <li><a href="#">قوانین و مقررات</a></li>
                        <li><a href="#">درباره ما</a></li>
                    </ul>
                </div>
            </HolderComponent>
        </header>
    );
}
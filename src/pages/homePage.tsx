// Importing Part
import FirstSectionComponent from "../pageSections/homePage/firstSectionComponent.tsx";
import SecondSectionComponent from "../pageSections/homePage/secondSectionComponent.tsx";
import ThirdSectionComponent from "../pageSections/homePage/thirdSectionComponent.tsx";
import FourthSectionComponent from '../pageSections/homePage/fourthSectionComponent.tsx'

// Creating functional component of home page and exporting it as default
export default function HomePage():JSX.Element {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
        </>
    );
}

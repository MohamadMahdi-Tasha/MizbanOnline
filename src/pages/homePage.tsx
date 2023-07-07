// Importing Part
import HolderComponent from "../chunks/holderComponent.tsx";
import FirstSectionComponent from "../pageSections/homePage/firstSectionComponent.tsx";
import SecondSectionComponent from "../pageSections/homePage/secondSectionComponent.tsx";

// Creating functional component of home page and exporting it as default
export default function HomePage():JSX.Element {
    // Returning JSX
    return (
        <HolderComponent>
            <FirstSectionComponent />
            <SecondSectionComponent />
        </HolderComponent>
    );
}

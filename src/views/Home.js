import Links from "../Components/Links"
import Pagination from "../Components/Pagination";
import LinksOrder from "../Components/LinksOrder"

export default function Home() {
    return (
        <div className="link-container">
            <LinksOrder />
            <Links />
            <Pagination />
        </div>
    );
}
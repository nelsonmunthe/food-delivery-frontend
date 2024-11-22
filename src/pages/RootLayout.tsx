import { Outlet } from "react-router-dom";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";

const RootLayout = () => {
    return(
        <div className="flex flex-col h-lvh">
            <Navigation />
            <main className="flex-1 mt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout;
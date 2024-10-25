import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </> //react不允許回傳兩個標籤，所以在用一個包起來
    )
};

export default Layout;
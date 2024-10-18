import {link} from "react-router-dom";

const Layout = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post User</Link>
                </li>
                <li>
                    <Link to="/get">Get All User</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Layout;
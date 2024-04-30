import { Link }from "react-router-dom"
import lightPageNotFoundImg from '../imgs/404-light.png';
import darkPageNotFoundImg from '../imgs/404-dark.png';
import fullLogo from "../imgs/full-logo.png"
import { useContext } from "react";
import { ThemeContext } from "../App";

const PageNotFound = () => {

    let {theme} = useContext(ThemeContext);

    return(
        <section className="h-cover relative p-10 flex flex-col items-center gap-20 text-center">

            <img src={theme == 'light'? darkPageNotFoundImg : lightPageNotFoundImg } className="select-none border-2 corder-grey w-72 aspect-square object-cover rounded"/>

            <h1 className="text-4xl font-gelasio leading-7">Page not found</h1>
            <p className="text-daek-grey text-xl leading-7 -mt-8">The page you are looking for does not exist.
             Head back to the <Link to="/" className="text-black underline">home page</Link></p>

            <div className="mt-auto">
                <p className="mt-5 text-dark-grey">Read millions of stories around the world</p>
            </div>
        </section>
    )
}

export default PageNotFound;
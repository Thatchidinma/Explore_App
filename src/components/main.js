import { Link } from "react-router-dom";
//import { Search } from "./search"
import { Weather } from "./weather";

export function Main(params) {
    return(
        <div className="h-svh p-8">
            <p className="text-center"><Link  to="/">Go to home page</Link></p>
           {/*<Search/>*/}
           <Weather/>
        </div>
    )
}
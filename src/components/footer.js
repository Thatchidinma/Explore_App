import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




export function Footer(params) {
    const d = new Date();
    let year = d.getFullYear();
    return(
        <footer className='p-10 flex justify-center text-center bg-blue-950'>
           <div>
            <p>Thatchidinma © {year}</p>
                <p>created by Ndukuba Nneoma Chidinma</p>
                <div className="flex">
                    <p>Connect with me on socials</p>
                    <div className="flex">
                    <a href="https://github.com/Thatchidinma"   target="_blank" rel="noreferrer" className=" ml-2 m-auto text-2xl" > <FaGithub /></a>
                    <a  href="https://www.linkedin.com/in/ndukubachidinma/"   target="_blank" rel="noreferrer" className=" ml-2 m-auto text-2xl" > <FaLinkedin /></a>
                    <a href="https://instagram.com/Thatchidinma"  target="_blank" rel="noreferrer" className=" ml-2 m-auto text-2xl" ><FaInstagram /></a>
                    <a href="https://twitter.com/Thatchidinma"  target="_blank" rel="noreferrer" className="ml-2 m-auto text-2xl" ><FaXTwitter/></a>
                    </div>
                </div>
           </div>
        </footer>
    )
}
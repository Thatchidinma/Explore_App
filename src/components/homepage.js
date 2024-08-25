import earth from "../images/earth.png"
import { Link } from "react-router-dom";

export function HomePage(params) {
    
    return(
        <div className='p-8 bg-home bg-cover backdrop-blur-lg'>
            <section className="flex justify-center lg:m-14 my-14">
                <img src={earth} alt="" className="animate-spin-slow h-36 lg:h-96 lg:-mr-4 m-auto lg:m-0"/>
                <div className="flex">
                    <div className="m-auto">
                        <h1 className=" text-4xl lg:text-6xl font-bold text-emerald-700 ">Hello World</h1>
                        <p className="italic font-thin text-lg">explore the world with the click of a buttton, bring the world to your screen!</p>
                        <Link to='/main'><button className="bg-blue-600 p-4 mt-6 rounded-xl hover:bg-blue-500"> Explore now!</button></Link>
                    </div>
                </div>
            </section>
            <section className="text-center mt-8 text-2xl text-emerald-700">
                <p>Explore allows you to search different locations and learn more about them at a glance</p>
                <p>You can also ask AI more questions about the location right here on the page! <br/> How awesome is that!</p>
            </section>
            {/* <div className="px-28 my-12"><hr class="h-px  bg-gray-200 border"></hr></div> */}
            <section className="h-svh">

            </section>
        </div>
    )
}
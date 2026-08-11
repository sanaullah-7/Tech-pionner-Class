import { Link } from "react-router-dom"
export default function Navabr(){
    return(
        <>
        <div className="bg-blue-400 font-bold text-white h-16 flex justify-between items-center p-3 ">
            <div>
                logo
                <img src="" alt="" />
            </div>
            <div className="flex gap-10 cursor-pointer">
                <Link to={"/"}>Home</Link>
              <Link to={"/about"}> About</Link>
                <h1>Contact</h1>
                <h1>Services</h1>
            </div>
            <div>
                <button>SignIn</button>
            </div>
            
        </div>
        </>
    )
}
import { useState } from "react"

function Header() {
    const [isOpen, setIsOpen]= useState(false);

    const handleIsOpen=()=>{
        setIsOpen(true)
    }
    const handleIsClose=()=>{
        setIsOpen(false)
    }
    return (
        <div>


            <div className="flex justify-between px-10 py-2">
                <h1 className="text-3xl font-semibold">Yerman</h1>

                <div className="flex  text-3xl gap-10">

                    <ul className="sm:flex hidden gap-10  pt-1">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <i className="fa-solid fa-cart-shopping font-semibold pt-4 sm:block hidden"></i>
                    <i style={{display: isOpen ===true ? "none" : ""}} onClick={handleIsOpen} className="fa-solid fa-bars sm:hidden"></i>
                    <i style={{display:isOpen ===true ? "block" : ""}} onClick={handleIsClose} className="fa-solid fa-x hidden"></i>
                </div>
            </div>

                {/* Mobile View */}

            <div style={{display: isOpen=== true ? "block" : ""}} className=" hidden text-3xl gap-10 bg-blue-600 px-10 py-4 text-center flex-col justify-center ">

                    <ul className="flex flex-col gap-10  pt-1">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <i className="fa-solid fa-cart-shopping font-semibold pt-4 "></i>
                </div>





        </div>
    )
}

export default Header
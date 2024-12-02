import { useState } from "react"
import logo from "../assets/images/LOGO 1.png"
import { NavLink } from "react-router-dom"
import { CustomNavLinkProps } from "../interface/common"
import CustomNavLink from "./CustomNavLink"
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";


const Navigation = () => {
    const [menu, setMenu] = useState<boolean>(false);

    const onChangeMenu = () => {
        setMenu(prev => !prev)
    }

    const links :CustomNavLinkProps[] = [
        {
            description: "Home",
            path: "/"
        },
        {
            description: " Browse Menu ",
            path: "/menu"
        },
        {
            description: "Special Offers",
            path: "/special-offers"
        },
        {
            description: "Restaturant",
            path: "/restaturant"
        },
        {
            description: "Track Order",
            path: "/track-order"
        }
    ]

    return(
        <nav className="fixed top-0 left-0 w-full z-99 bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <img className="h-4 w-auto"  src={logo} alt="company logo"/>
                    </div>
                    <div className="flex flex-1 items-center justify-end">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 ">
                            {
                                    links.map(item => {
                                        return <CustomNavLink description={item.description} path={item.path}/>
                                    })
                            }
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-1 px-3 bg-[#03081F] rounded-3xl gap-1 p-1">
                        <IoPersonSharp className="bg-backgroundOrange rounded-lg"/>
                        <button className="text-white text-[10px] text-center">
                            Login/Signup
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button 
                            type="button" 
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                            onClick={onChangeMenu}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            { 
                                menu ? 
                                    <MdClose 
                                        className="text-3xl hover:cursor-pointer text-black"
                                        onClick={onChangeMenu}
                                />  
                                :  <MdMenu 
                                        className="text-3xl hover:cursor-pointer text-black"
                                        onClick={onChangeMenu}
                                />
                            }
                           
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            { menu && <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <NavLink to="/" className="block rounded-md px-3 py-2 text-base font-medium text-[#181A18] hover:bg-gray-200 text-center" aria-current="page">Home</NavLink>
                        <NavLink to="/landloards" className="block rounded-md px-3 py-2 text-base font-medium text-[#181A18] hover:bg-gray-200 text-center" aria-current="page">Landloards</NavLink>
                        <NavLink to="#" className="block rounded-md px-3 py-2 text-base font-medium text-[#181A18] hover:bg-gray-200 text-center ">Team</NavLink>
                        <NavLink to="#" className="block rounded-md px-3 py-2 text-base font-medium text-[#181A18] hover:bg-gray-200 text-center">Projects</NavLink>
                        <NavLink to="#" className="block rounded-md px-3 py-2 text-base font-medium text-[#181A18] hover:bg-gray-200 text-center">Calendar</NavLink>
                    </div>
                </div>
            }
            
        </nav>
    )
}

export default Navigation
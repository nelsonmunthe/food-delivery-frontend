import userImage from "../../assets/images/userImage.png";
import { CiShoppingBasket } from "react-icons/ci";
import { RiMapPin2Fill } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import image1 from "../../assets/images/homeImage1.png"
import image2 from "../../assets/images/homeImage2.png"
import image3 from "../../assets/images/homeImage3.png"
import imagePopular1 from "../../assets/images//imagePopular1.png"
import imagePopular2 from "../../assets/images//imagePopular2.png"
import imagePopular3 from "../../assets/images//imagePopular3.png"
import imagePopular4 from "../../assets/images//imagePopular4.png"
import imagePopular5 from "../../assets/images//imagePopular5.png"
import imagePopular6 from "../../assets/images//imagePopular6.png"
import popularRestauran1 from "../../assets/images/burgerking.png"
import popularRestauran2 from "../../assets/images/kfc.png"
import popularRestauran3 from "../../assets/images/mcd.png"
import popularRestauran4 from "../../assets/images/shaurma.png"
import popularRestauran5 from "../../assets/images/texas.png"
import popularRestauran6 from "../../assets/images/papaJhon.png"
import logo from "../../assets/images/LOGO 1.png"
import peopleImage from "../../assets/images/peopleImage.png"
import logoGoogle from "../../assets/images/logoGoogle.png"
import imagePartner from "../../assets/images/group8.png"
import imageRider from "../../assets/images/group9.png"
import orderImage1 from "../../assets/images/order-food 2.png"
import orderImage2 from "../../assets/images/food 3.png"
import orderImage3 from "../../assets/images/order 4.png"
import pictureEat1 from "../../assets/images/picute-eat1.png"
import pictureEat2 from "../../assets/images/picture-eat2.png"

const Home = () => {

    return(
        <div className="grid grid-cols-1 lg:mx-20">
            <section className="sm:hidden flex flex-col gap-2">
                <div className="flex justify-between">
                    <div className="bg-backgroundOrange py-2 w-full flex gap-1 items-center justify-center">
                        <img src={userImage} alt="user-image" className="h-8"/>
                        <span className="text-sm font-semibold">Aycan</span>
                    </div>
                    <div className="bg-backgroundGreen py-2 w-full flex gap-2 items-center justify-center">
                        <CiShoppingBasket className="text-2xl text-white"  />
                        <span className="text-white text-sm">GBP 79.89</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-[50%]"></div>
                    <div className="flex-1 flex justify-start items-center gap-2">
                        <RiMapPin2Fill />
                        <span className="text-[10px]">Lution Street, N4G-00....</span>
                    </div>
                </div>
            </section>
            <section className="sm:hidden px-2 py-6 bg-backgroundGray gap-2 m-2 rounded-lg flex flex-col justify-center">
                <span className="text-[#03081F] text-center text-sm">Order Restaurant food, takeaway and groceries.</span>
                <div className="flex flex-col">
                    <h1 className="text-[#03081F] text-center font-semibold text-3xl"> 
                        Feast Your Senses, <br /> <span className="text-center font-semibold text-3xl text-[#FC8A06]">Fast and Fresh</span>
                    </h1>
                    
                </div>
                <span className="text-[#03081F] text-center text-sm">Enter a postcode to see what we deliver</span>
                <div className="relative flex justify-center items-center mx-auto">
                    <input 
                        type="text"
                        name="feedback"
                        placeholder="e.g. EC4R 3TE"
                        className="text-sm py-1 px-3 rounded-2xl w-full"
                    />
                    <div className="absolute -bottom-[0.5] -right-1 bg-backgroundOrange rounded-3xl p-2">
                        <IoIosArrowDroprightCircle  className=""/>
                    </div>
                </div>
            </section>
            <section className="hidden bg-[#FBFBFB] gap-2 rounded-lg sm:grid grid-cols-12 pt-8 relative rounded-br-xl md:h-[250px] lg:h-[400px]">
               <div className="flex flex-col justify-center col-span-5">
                    <span className="text-[#03081F] text-center text-sm">Order Restaurant food, takeaway and groceries.</span>
                    <div className="flex flex-col">
                        <h1 className="text-[#03081F] text-center font-semibold text-3xl"> 
                            Feast Your Senses, <br /> <span className="text-center font-semibold text-3xl text-[#FC8A06]">Fast and Fresh</span>
                        </h1>
                        
                    </div>
                    <span className="text-[#03081F] text-center text-sm">Enter a postcode to see what we deliver</span>
                    <div className="relative flex justify-center items-center mx-auto">
                        <input 
                            type="text"
                            name="feedback"
                            placeholder="e.g. EC4R 3TE"
                            className="text-sm py-1 px-3 rounded-2xl w-ful border border-gray-200"
                        />
                        <div className="absolute -bottom-[0.5] -right-1 bg-backgroundOrange rounded-3xl p-2">
                            <IoIosArrowDroprightCircle  className=""/>
                        </div>
                    </div>`
               </div>
               <div className="flex flex-col col-span-2">    
               </div>
               <div className="col-span-5 bg-backgroundOrange rounded-br-xl grid grid-flow-row-dense grid-cols-12 grid-rows-3 relative rounded-tl-[300px]">
                    <div className="top-[10%] left-[30%] absolute flex flex-col bg-[#FBFBFB] p-2 col-span-2 rounded-lg z-50">
                        <div className="flex justify-between">
                            <img src={logo} alt="logo"  className="h-2 lg:h-3"/>
                            <span className="text-[10px] lg:pl-40">now</span>
                        </div>
                        <span className="font-bold text-[8px] lg:text-[10px]">We've Received your order</span>
                        <span className="text-[8px] lg:text-[10px]">Awaiting Restaturant acceptance</span>
                    </div>
                    <div className="top-[40%] left-[40%] absolute flex flex-col bg-[#FBFBFB] p-2 col-span-2 rounded-lg z-50">
                        <div className="flex justify-between">
                            <img src={logo} alt="logo"  className="h-2 lg:h-3"/>
                            <span className="text-[10px] lg:pl-40">now</span>
                        </div>
                        <span className="font-bold text-[8px] lg:text-[10px]">We've Received your order</span>
                        <span className="text-[8px] lg:text-[10px]">Awaiting Restaturant acceptance</span>
                    </div>
                    <div className="top-[70%] left-[30%] absolute flex flex-col bg-[#FBFBFB] p-2 col-span-2 rounded-lg z-50">
                        <div className="flex justify-between">
                            <img src={logo} alt="logo"  className="h-2 lg:h-3"/>
                            <span className="text-[10px] lg:pl-40">now</span>
                        </div>
                        <span className="font-bold text-[8px] lg:text-[10px]">We've Received your order</span>
                        <span className="text-[8px] lg:text-[10px]">Awaiting Restaturant acceptance</span>
                    </div>
                    
               </div>
               
                <img src={pictureEat1}  className="absolute object-fit bottom-0 left-[30%] z-50 h-[180px] lg:h-[340px] "/>
                <img src={pictureEat2}  className="absolute object-fit bottom-0 left-[55%] z-40 h-[150px] lg:h-[300px]"/>
            </section>
            <section className="px-2 flex justify-between items-center gap-1">
                <span className="text-sm font-bold">Up to -40% Discount Offers 🎊 </span>
                <div className="flex  items-center rounded-2xl border border-[#03081F] p-2">
                    <IoIosArrowDropdownCircle />
                    <label htmlFor="drop-down" className="text-sm text-[#03081F]">Pizza & Fast Food</label>
                </div>
            </section>
            <section className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3">
                <div className="flex flex-col gap-2">
                    <div className="relative flex justify-center items-center">
                        <img src={image1} alt="image-1" />
                        <div className="absolute top-0 right-2 bg-backgroundBlack rounded-b-lg p-1">
                            <span className="font-bold text-white">-17%</span>
                        </div>
                    </div>
                    <div className="p-1 flex flex-col gap-2">
                        <span className="text-[#FC8A06] text-sm font-medium">Restaurant</span>
                        <span className="text-[#03081F] text-lg font-bold">Butterbrot Cafe London</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative flex justify-center items-center">
                        <img src={image2} alt="image-1" />
                        <div className="absolute top-0 right-2 bg-backgroundBlack rounded-b-lg p-1">
                            <span className="font-bold text-white">-17%</span>
                        </div>
                    </div>
                    <div className="p-1 flex flex-col gap-2">
                        <span className="text-[#FC8A06] text-sm font-medium">Restaurant</span>
                        <span className="text-[#03081F] text-lg font-bold">Grand Caf’e </span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative flex justify-center items-center">
                        <img src={image3} alt="image-1" />
                        <div className="absolute top-0 right-2 bg-backgroundBlack rounded-b-lg p-1">
                            <span className="font-bold text-white">-17%</span>
                        </div>
                    </div>
                    <div className="p-1 flex flex-col gap-2">
                        <span className="text-[#FC8A06] text-sm font-medium">Restaurant</span>
                        <span className="text-[#03081F] text-lg font-bold">Butterbrot Caf’eLondon </span>
                    </div>
                </div>
            </section>
            <section className="bg-backgroundGray p-2 grid grid-cols-1 gap-2 ">
                <h2 className="text-lg font-bold my-3">Order.Uk’s Popular Categories</h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                    <div className= "flex flex-col">
                        <img src={imagePopular1} alt="image-popular"/>
                        <div className="border border-[#EFEFEF] flex flex-col p-2 rounded-b-2xl">
                            <span className="text-[#FC8A06] text-sm font-bold">Burgers & Fast food</span>
                            <span className="text-[#03081F]">21 Restaurants</span>
                        </div>
                    </div>
                    <div className= "flex flex-col">
                        <img src={imagePopular2} alt="image-popular"/>
                        <div className="border border-[#EFEFEF] flex flex-col p-2 rounded-b-2xl">
                            <span className="text-[#FC8A06] text-sm font-bold">Salads</span>
                            <span className="text-[#03081F]">32 Restaurants</span>
                        </div>
                    </div>
                    <div className= "flex flex-col">
                        <img src={imagePopular3} alt="image-popular"/>
                        <div className="border border-[#EFEFEF] flex flex-col p-2 rounded-b-2xl">
                            <span className="text-[#FC8A06] text-sm font-bold">Pasta & Casuals</span>
                            <span className="text-[#03081F]">4 Restaurants</span>
                        </div>
                    </div>
                    <div className= "flex flex-col">
                        <img src={imagePopular4} alt="image-popular"/>
                        <div className="border border-[#EFEFEF] flex flex-col p-2 rounded-b-2xl">
                            <span className="text-[#FC8A06] text-sm font-bold">Pizza</span>
                            <span className="text-[#03081F]">32 Restaurants</span>
                        </div>
                    </div>
                    <div className= "flex flex-col">
                        <img src={imagePopular5} alt="image-popular"/>
                        <div className="border border-[#EFEFEF] flex flex-col p-2 rounded-b-2xl">
                            <span className="text-[#FC8A06] text-sm font-bold">Breakfast</span>
                            <span className="text-[#03081F]">4 Restaurants</span>
                        </div>
                    </div>
                    <div className= "flex flex-col">
                        <img src={imagePopular6} alt="image-popular"/>
                        <div className="border border-[#EFEFEF] flex flex-col p-2 rounded-b-2xl">
                            <span className="text-[#FC8A06] text-sm font-bold">Soups</span>
                            <span className="text-[#03081F]">32 Restaurants</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 gap-3 p-2">
                <h2 className="text-lg font-bold my-3">Popular Restaurants</h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                    <div className="flex flex-col">
                        <img src={popularRestauran1} alt="popular-restaturan"/>
                        <div className="bg-backgroundOrange p-2 rounded-b-lg flex justify-center items-center">
                            <span className="font-bold text-white text-center">Burger King</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={popularRestauran2} alt="popular-restaturan"/>
                        <div className="bg-backgroundOrange p-2 rounded-b-lg flex justify-center items-center">
                            <span className="font-bold text-white text-center">KFC</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={popularRestauran3} alt="popular-restaturan"/>
                        <div className="bg-backgroundOrange p-2 rounded-b-lg flex justify-center items-center">
                            <span className="font-bold text-white text-center">MCD</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={popularRestauran4} alt="popular-restaturan"/>
                        <div className="bg-backgroundOrange p-2 rounded-b-lg flex justify-center items-center">
                            <span className="font-bold text-white text-center">Shaurma 1</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={popularRestauran5} alt="popular-restaturan"/>
                        <div className="bg-backgroundOrange p-2 rounded-b-lg flex justify-center items-center">
                            <span className="font-bold text-white text-center">Texas Chicken</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={popularRestauran6} alt="popular-restaturan"/>
                        <div className="bg-backgroundOrange p-2 rounded-b-lg flex justify-center items-center">
                            <span className="font-bold text-white text-center">Papa Johns</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-backgroundGray grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col mt-6 gap-1">
                    <div className="flex gap-1 justify-center items-center">
                        <img src={logo} alt="logo" className="h-6"/>
                        <span className="text-3xl font-bold">ing</span>
                        <span className="text-3xl font-bold">is more</span>
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                        <span className="text-2xl font-medium text-[#FC8A06]">Personalised</span>
                        <span className="text-2xl font-medium">& Instant</span>
                    </div>
                    <span className="font-extralight text-center text-sm">Download the Order.uk app for faster ordering</span>
                    <div className="flex gap-1 items-center justify-center my-3">
                        <img  src={logoGoogle} alt="logo-google"/>
                        <img  src={logoGoogle} alt="logo-google"/>
                    </div>
                </div>
                <div className="flex justify-center items-center mx-10 sm:order-first">
                    <img src={peopleImage} alt="image-people" className="h-full" />
                </div>
               
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2">
                <div className="relative w-full">
                    <img  src={imagePartner} alt="image-partner" className="object-cover w-full"/>
                    <div className="absolute top-0 h-full pb-8 left-8 flex flex-col justify-between">
                        <span className="bg-white p-1  text-sm font-bold rounded-b-md">Earn more with lower fees</span>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#FC8A06] text-base font-medium">Signup as a business <br /> <span className="text-white font-bold text-[24px]">Partner with us</span></p>          
                            <div className="flex mt-2">
                                <button
                                    className="text-white font-medium text-[11px] p-2 bg-backgroundOrange rounded-2xl"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full">
                    <img  src={imageRider} alt="image-partner" className="object-cover w-full"/>
                    <div className="absolute top-0 h-full pb-8 left-8 flex flex-col justify-between">
                        <span className="bg-white p-1  text-sm font-bold rounded-b-md">Avail exclusive perks</span>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#FC8A06] text-base font-medium">Signup as a rider<br /> <span className="text-white font-bold text-[24px]">Ride with us</span></p>          
                            <div className="flex mt-2">
                                <button
                                    className="text-white font-medium text-[11px] p-2 bg-backgroundOrange rounded-2xl"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-12 gap-3 p-2 bg-backgroundGray sm:p-10 rounded-lg">
                <div className="col-span-12 grid grid-cols-12 gap-3 md:my-10">
                    <h2 className="col-span-12  md:col-span-4  text-2xl text-center md:text-start font-bold">Know more about us!</h2>
                    <div className="col-span-12 md:col-span-8 gap-2 flex flex-col  justify-evenly md:flex-row">
                        <div className="flex justify-center items-center">
                            <h2 className="text-base text-center hover:border hover:border-b-[#FC8A06] hover:font-bold hover:cursor-pointer">Frequent Questions</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="text-base text-center hover:border hover:border-b-[#FC8A06] hover:font-bold hover:cursor-pointer">Who we are?</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="text-base text-center hover:border hover:border-b-[#FC8A06] hover:font-bold hover:cursor-pointer">Partner Program</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="text-base text-center hover:border hover:border-b-[#FC8A06] hover:font-bold hover:cursor-pointer">Help & Support</h2>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-12 grid-cols-12 p-10 bg-white rounded-lg">
                    <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-2 md:bg-white">
                        <div className="flex justify-center items-center">
                            <h2 className="text-lg font-bold text-center hover:bg-[#FC8A06] hover:cursor-pointer hover:py-2 hover:px-4 hover:rounded-3xl">How does Order.UK work?</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="text-lg font-bold text-center hover:bg-[#FC8A06] hover:cursor-pointer hover:py-2 px-4 hover:rounded-3xl">What payment methods are accepted?</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="text-lg font-bold text-center hover:bg-[#FC8A06] hover:cursor-pointer hover:py-2 px-4 hover:rounded-3xl">Can I track my order in real-time?</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="text-lg font-bold text-center hover:bg-[#FC8A06] hover:cursor-pointer hover:py-2 px-4 hover:rounded-3xl">Are there any special discounts orpromotions available?</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="text-lg font-bold text-center hover:bg-[#FC8A06] hover:cursor-pointer hover:py-2 px-4 hover:rounded-3xl">Is Order.UK available in my area?</h2>
                        </div>
                    </div>
                    <div className="col-span-12  lg:col-span-8  grid grid-cols-12 gap-4 bg-[#03081F] md:bg-white content-center rounded-lg p-2">
                        <div className="bg-backgroundGray col-span-12 md:col-span-4 flex flex-col gap-2 justify-center items-center p-4 mx-4 rounded-lg">
                            <h3 className="text-lg font-bold">Place an Order!</h3>
                            <img src={orderImage1} alt="image-order"/>
                            <p className="text-lg text-center">Place order through ourwebsite or Mobile app</p>
                        </div>
                        <div className="bg-backgroundGray col-span-12 md:col-span-4 flex flex-col gap-2 justify-center items-center p-4 mx-4 rounded-lg">
                            <h3 className="text-lg font-bold">Track Progress</h3>
                            <img src={orderImage2} alt="image-order"/>
                            <p className="text-lg text-center">Your can track your orderstatus with delivery time</p>
                        </div>
                        <div className="bg-backgroundGray col-span-12 md:col-span-4 flex flex-col gap-2 justify-center items-center p-4 mx-4 rounded-lg">
                            <h3 className="text-lg font-bold">Get your Order!</h3>
                            <img src={orderImage3} alt="image-order"/>
                            <p className="text-lg text-center">Receive your order at alighting fast speed!</p>
                        </div>
                        <p className="text-center text-base text-white md:text-[#03081F] col-span-12">Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>

                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 bg-backgroundOrange p-10 mx-2 rounded-lg content-center text-white">
                <div className="flex flex-col justify-between md:flex-row">
                    <div className="flex flex-col justify-between items-center flex-1">
                        <p className="font-light text-6xl sm:text-4xl text-center">546+</p>
                        <span className="text-2xl text-center">Registered Riders</span>
                    </div>
                    <div className="border-b md:border-b-0 md:border-r border-[#D9D9D9] my-6 mx-10 md:m-0"></div>
                </div>
                <div className="flex flex-col justify-between md:flex-row">
                    <div className="flex flex-col justify-between items-center flex-1">
                        <p className="font-light text-6xl sm:text-4xl text-center">690+</p>
                        <span className="text-2xl text-center">Restaurants Partnered</span>
                    </div>
                    <div className="border-b md:border-b-0 md:border-r border-[#D9D9D9] my-6 mx-10 md:m-0"></div>
                </div>
                <div className="flex flex-col justify-between md:flex-row">
                    <div className="flex flex-col justify-between items-center flex-1">
                        <p className="font-light text-6xl sm:text-4xl text-center">17,457+</p>
                        <span className="text-2xl text-center">Food items</span>
                    </div>
                    <div className="border-b md:border-b-0 md:border-r border-[#D9D9D9] my-6 mx-10 md:m-0"></div>
                </div>
                <div className="flex flex-col justify-between md:flex-row">
                    <div className="flex flex-col justify-between items-center flex-1">
                        <p className="font-light text-6xl sm:text-4xl text-center">546+</p>
                        <span className="text-2xl text-center">Registered Riders</span>
                    </div>
                    <div className="border-b md:border-b-0 md:border-0 my-6 mx-10 md:m-0"></div>
                </div>
            </section>
        </div>
        
    )
}

export default Home
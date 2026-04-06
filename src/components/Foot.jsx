import { FooterDivider } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import logo from "../assets/logo.jpg";

function Foot() {
    return (
        <>
            <FooterDivider />

            <footer className="bg-gray-900 text-gray-300 py-14">

                <div className="max-w-screen-xl mx-auto px-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

                        <div>
                            <img src={logo} alt="logo" className="h-10 mb-4" />
                            <p className="text-sm text-gray-400">
                                Simplifying business operations with expert consultancy and reliable solutions.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Services</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white cursor-pointer">GST & Taxation</li>
                                <li className="hover:text-white cursor-pointer">Company Registration</li>
                                <li className="hover:text-white cursor-pointer">PF & ESI Compliance</li>
                                <li className="hover:text-white cursor-pointer">HR Consulting</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white cursor-pointer">Home</li>
                                <li className="hover:text-white cursor-pointer">About</li>
                                <li className="hover:text-white cursor-pointer">Services</li>
                                <li className="hover:text-white cursor-pointer">Contact</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Contact</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2 hover:text-white">
                                    <MdOutlineMail /> esipf@ticksnlines.com
                                </li>
                                <li className="flex items-center gap-2 hover:text-white">
                                    <FaPhone /> 0484 2543885
                                </li>
                                <li className="text-gray-400">
                                    Opposite CMRL, Industrial Area <br />
                                    Muppathadom, Aluva <br />
                                    PIN: 683110
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="border-t border-gray-700 pt-6">

                       
                        <div className="flex justify-center gap-6 mb-4 text-xl">
                            <BsFacebook className="hover:text-white hover:scale-110 transition cursor-pointer" />
                            <BsInstagram className="hover:text-white hover:scale-110 transition cursor-pointer" />
                            <BsTwitter className="hover:text-white hover:scale-110 transition cursor-pointer" />
                            <BsGithub className="hover:text-white hover:scale-110 transition cursor-pointer" />
                            <BsDribbble className="hover:text-white hover:scale-110 transition cursor-pointer" />
                        </div>

                        <div className="text-center text-sm text-gray-500">
                            © 2018 TicksNLines. All rights reserved.
                        </div>

                    </div>

                </div>

            </footer>
        </>
    )
}

export default Foot

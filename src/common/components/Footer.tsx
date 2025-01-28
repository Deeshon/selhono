import logo from "../../assets/image.png";
import { FaArrowRight } from "react-icons/fa";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";


export default function Footer() {
  return (
    <>
      <div className="flex-col justify-center items-center w-[100%] mt-32">
        <div className="text-white flex flex-col items-center justify-center bg-image">
          <h1 className="text-3xl font-bold p-2">Wanna join the interno?</h1>
          <h3 className="p-2 jost-regular">
            It is a long establish fact, you will be distracted.
          </h3>
          <div className="bg-[#CDA274] w-36 h-12 rounded-md flex items-center justify-center m-4">
            <p className="jost-regular">Contact us</p>
            <FaArrowRight className="ml-2" />
          </div>
        </div>
      </div>
      <div className="flex justify-between  mt-6 w-[1280px]">
        <div className="text-left">
          <div className="flex items-center">
            <img src={logo} alt="logo" width={40} />
            <h2 className="text-2xl font-bold">LUMINA</h2>
          </div>
          <div className="pt-2 jost-regular">
            <p>It is a long established fact,</p>
            <p>that a reader will be distracted looking</p>
          </div>
          <div className="mt-4 flex justify-between w-40">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <RiFacebookFill className="text-xl" />
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <RiTwitterFill className="text-xl" />
            </div>{" "}
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <RiInstagramFill className="text-xl" />
            </div>{" "}
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <RiLinkedinBoxFill className="text-xl" />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[600px] text-left">
          <div>
            <ul>
              <li className="p-2 font-bold text-lg">Pages</li>
              <li className="p-2 jost-regular">About Us</li>
              <li className="p-2 jost-regular">Our Projects</li>
              <li className="p-2 jost-regular">Our Team</li>
              <li className="p-2 jost-regular">Contact Us</li>
              <li className="p-2 jost-regular">Services</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="p-2 font-bold text-lg">Services</li>
              <li className="p-2 jost-regular">Kitchen</li>
              <li className="p-2 jost-regular">Living Area</li>
              <li className="p-2 jost-regular">Bathroom</li>
              <li className="p-2 jost-regular">Dinning Hall</li>
              <li className="p-2 jost-regular">Bedroom</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="p-2 font-bold text-lg">Contact</li>
              <li className="p-2 jost-regular">
                <p>55 east Birchwood Ave.</p>
                <p>Brooklyn, New York 11201</p>
              </li>
              <li className="p-2 jost-regular">contact@lumina.com</li>
              <li className="p-2 jost-regular">(123) 436-7890</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

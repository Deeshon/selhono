import { FaArrowRight } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Plans from "./components/Plans";
import People from "./components/People";

export default function MainPage() {
  return (
    <>
      <div className="mt-24">
        <div className="text-left w-[1280px] bg-black text-white h-[500px] rounded-br-[100px] rounded-tl-[100px] plans-bg-image">
          <div className="text-5xl pt-24 ml-8 font-bold">
            <h1>Lets make your</h1>
            <h1>home beautiful together</h1>
          </div>
          <div className="ml-8 jost-regular">
            <p>There are many variations of the passages</p>
            <p>of lorem Ipsum from available, majority</p>
          </div>
          <div className="ml-8 bg-[#CDA274] w-36 text-center flex justify-center items-center h-10 mt-4 rounded-lg jost-regular">
            <p>Get Started</p>
            <FaArrowRight className="ml-4" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Plans title="Project Plan" />
          <Plans title="Interior Work" />
          <Plans title="Realization" />
        </div>
      </div>

      <div className="w-[1280px] flex text-white text-left mt-8">
        <div className="w-[60%] h-[700px] z-20 relative">
          <div className="main2-bg-image">
            <div className="text-6xl font-bold pl-8 pt-36">
              <h1>We create art</h1>
              <h1>for modern life</h1>
            </div>
            <div className="pl-8 pt-8 text-lg jost-regular">
              <p>There are many variations of the are many variations of the</p>
              <p>passages from lorem Ipsum from passages from lorem</p>
              <p>available, majority available, majority</p>
            </div>
            <div className="flex items-center justify-between w-1/3 pl-8 pt-6">
              <div className="bg-white w-[75px] h-[75px] flex justify-center items-center text-[#CDA274] rounded-full">
                <BsTelephone className="text-3xl" />
              </div>
              <div className="jost-bold">
                <p>012345689</p>
                <p>Call Us Anytime</p>
              </div>
            </div>
            <div className="ml-8 bg-[#CDA274] w-48 text-center flex justify-center items-center h-14 mt-4 rounded-2xl jost-regular">
              <p>Get Free Estimate</p>
              <FaArrowRight className="ml-4" />
            </div>
          </div>
        </div>
        <div className="bg-white w-[600px] h-[700px] z-[15] ml-[-550px] rounded-tr-[350px]"></div>
        <div className="h-[700px] ml-[500px] main3-bg-image absolute"></div>
      </div>

      <div className="bg-[#CDA274] rounded-2xl w-[1280px] mt-32 p-10">
        <div className="text-4xl font-bold  text-white">
          <h1>What the People Think</h1>
          <h1>About Us</h1>
        </div>
        <div className="flex justify-between mt-8">
          <People name="Natasha" location="Moscow, Russia" />
          <People name="Raymond Galario" location="UK, London" />
          <People name="Benny Roll" location="USA, New York" />
        </div>
      </div>

      <div className="flex justify-between w-[1280px] mt-36 items-center">
        <div className="logo1-bg-image" />
        <div className="logo2-bg-image" />
        <div className="logo3-bg-image" />
        <div className="logo4-bg-image" />
      </div>

      <div className="mt-24 w-[550px]">
        <div>
          <h1 className="text-5xl font-bold">Follow Our Projects</h1>
        </div>
        <div>
          <p className="pt-8 text-lg jost-regular">
            Its a long established fact that a reader will be distracted by the
            readable content of a page looking at its layout points a long
            established fact that a page that.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap w-[1280px] justify-between mt-32">
        <div className="w-[547px] text-left">
          <div className="project1-bg-image"></div>
          <div className="h-[70px] mt-4 flex justify-between items-center">
            <div>
              <ul className="text-lg jost-regular">
                <li className="font-bold">Modern bedroom</li>
                <li>Decor / Architecture</li>
              </ul>
            </div>
            <div className="bg-[#CDA274] w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <IoIosArrowForward className="text-2xl text-white" />
            </div>
          </div>
        </div>
        <div className="w-[547px] text-left">
          <div className="project2-bg-image"></div>
          <div className="h-[70px] mt-4 flex justify-between items-center">
            <div>
              <ul className="text-lg jost-regular">
                <li className="font-bold">Modern bedroom</li>
                <li>Decor / Architecture</li>
              </ul>
            </div>
            <div className="bg-[#CDA274] w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <IoIosArrowForward className="text-2xl text-white" />
            </div>
          </div>
        </div>
        <div className="w-[547px] text-left mt-16">
          <div className="project3-bg-image"></div>
          <div className="h-[70px] mt-4 flex justify-between items-center">
            <div>
              <ul className="text-lg jost-regular">
                <li className="font-bold">Modern bedroom</li>
                <li>Decor / Architecture</li>
              </ul>
            </div>
            <div className="bg-[#CDA274] w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <IoIosArrowForward className="text-2xl text-white" />
            </div>
          </div>
        </div>
        <div className="w-[547px] text-left mt-16">
          <div className="project4-bg-image"></div>
          <div className="h-[70px] mt-4 flex justify-between items-center">
            <div>
              <ul className="text-lg jost-regular">
                <li className="font-bold">Modern bedroom</li>
                <li>Decor / Architecture</li>
              </ul>
            </div>
            <div className="bg-[#CDA274] w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <IoIosArrowForward className="text-2xl text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1280px] h-[155px] flex justify-between mt-32">
        <div className="border-r-2 border-[#CDA274] w-1/4 h-[155px] flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold text-[#CDA274]">12</h1>
          <p className="jost-regular mt-4">Years of Experience</p>
        </div>
        <div className="border-r-2 border-[#CDA274] w-1/4 h-[155px] flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold text-[#CDA274]">1074</h1>
          <p className="jost-regular mt-4">Success Projects</p>
        </div>{" "}
        <div className="border-r-2 border-[#CDA274] w-1/4 h-[155px] flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold text-[#CDA274]">98</h1>
          <p className="jost-regular mt-4">Active Projects</p>
        </div>{" "}
        <div className="w-1/4 h-[155px] flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold text-[#CDA274]">583</h1>
          <p className="jost-regular mt-4">Happy Customers</p>
        </div>
      </div>

      <div className="mt-24 w-[550px]">
        <div>
          <h1 className="text-5xl font-bold">Articles & News</h1>
        </div>
        <div>
          <p className="pt-8 text-lg jost-regular">
            Its a long established fact that a reader will be distracted by the
            readable content of a page looking at its layout points a long
            established fact that a page that.
          </p>
        </div>
      </div>

      <div className="flex justify-between w-[1280px] h-[490px] mt-32">
        <div className="w-[382px] border-[1px] border-[#E7E7E7] p-5 rounded-[45px] article-card">
          <div className="article1-bg-image flex items-end p-8 ">
          <div className="bg-black w-[129px] h-[41px] rounded-t-[8px] rounded-br-[8px] opacity-50 text-center p-2">
                <p className="text-white opacity-100 jost-regular">Kitchen Design</p>
            </div>
          </div>
          <div className="h-1/3 mt-4">
            <div>
              <p className="text-2xl text-left font-bold">Let's Get Solutions For Building Construction Work</p>
            </div>
            <div className="flex justify-between items-center pt-4">
                <div>
                    <p className="jost-regular">26 December, 2022</p>
                </div>
                <div className="bg-[#CDA274] w-[50px] h-[50px] rounded-full flex justify-center items-center article-card-button">
              <IoIosArrowForward className="text-2xl text-white" />
            </div>
            </div>
          </div>
        </div>

        <div className="w-[382px] border-[1px] border-[#E7E7E7] p-5 rounded-[45px] article-card">
          <div className="article2-bg-image flex items-end p-8">
            <div className="bg-black w-[129px] h-[41px] rounded-t-[8px] rounded-br-[8px] opacity-50 text-center p-2">
                <p className="text-white opacity-100 jost-regular">Living Design</p>
            </div>
          </div>
          <div className="h-1/3 mt-4">
            <div>
              <p className="text-2xl text-left font-bold">Low Cost Latest Invented Interior Designing Ideas</p>
            </div>
            <div className="flex justify-between items-center pt-4">
                <div>
                    <p className="jost-regular">22 November, 2023</p>
                </div>
                <div className="bg-[#CDA274] w-[50px] h-[50px] rounded-full flex justify-center items-center article-card-button">
              <IoIosArrowForward className="text-2xl text-white" />
            </div>
            </div>
          </div>
        </div>

        <div className="w-[382px] border-[1px] border-[#E7E7E7] p-5 rounded-[45px] article-card">
          <div className="article3-bg-image flex items-end p-8">
          <div className="bg-black w-[129px] h-[41px] rounded-t-[8px] rounded-br-[8px] opacity-50 text-center p-2">
                <p className="text-white opacity-100 jost-regular">Interior Design</p>
            </div>
          </div>
          <div className="h-1/3 mt-4">
            <div>
              <p className="text-2xl text-left font-bold">Best For Any Office & Business Interior Solution</p>
            </div>
            <div className="flex justify-between items-center pt-4">
                <div>
                    <p className="jost-regular">4 December, 2023</p>
                </div>
                <div className="bg-[#CDA274] w-[50px] h-[50px] rounded-full flex justify-center items-center article-card-button">
              <IoIosArrowForward className="text-2xl text-white" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

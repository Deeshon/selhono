import image from '../../assets/image.png'

export default function NavBar() {
    return (
        <div className="lg:w-[1280px] w-[100%] flex justify-between">
            <div className='bg-black w-12 lg:hidden'></div>
            <div className='flex items-center'> 
                <img src={image} alt='logo' width={30} />
                <h1 className="text-3xl ml-2">LUMINA</h1>
            </div>
            <div className='hidden lg:flex'>
                <ul className=" flex justify-between jost-bold">
                    <li className="ml-8">Home</li>
                    <li className="ml-8">Pages</li>
                    <li className="ml-8">Services</li>
                    <li className="ml-8">Project</li>
                    <li className="ml-8">Blog</li>
                    <li className="ml-8">Contact</li>
                </ul>
            </div>
        </div>
    )
}
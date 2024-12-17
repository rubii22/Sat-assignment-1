////////////////////////////////// With Responiveness /////////////////////////////////////////////////////

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-screen flex flex-col md:flex-row items-center">
      {/* Left Section */}
      <div className="flex flex-col gap-4 justify-center px-4 w-full md:w-1/2 h-auto md:h-48">
        <h1 className="font-bold text-3xl md:text-[44px] text-black ml-0 md:ml-20">
          Welcome To Our Website
        </h1>
        <p className="text-lg md:text-[30px] text-gray-400 ml-0 md:ml-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          sapiente esse veritatis quam consectetur stamdards.
        </p>
        <button className="text-white text-lg md:text-2xl bg-black w-full md:w-[237px] h-[50px] md:h-[66px] p-3 md:p-4 ml-0 md:ml-20">
          Contact US
        </button>
      </div>
      
      {/* Right Section */}
      <div className="mt-6 md:mt-0 md:ml-16">
        <Image
          src="/image.png"
          alt="Website image"
          width={502}
          height={465}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>
    </div>
  );
}

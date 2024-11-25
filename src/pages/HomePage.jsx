import React from "react";
import Welcome from "../../public/welcome.png";

function HomePage() {
  return (
    <div className=" p-3  container mx-auto h-sceeen mt-16 animate-fade animate-delay-350" id="beranda">
      <div className="md:flex justify-center flex-row items-center content-center">
        <div className="items-center md:mr-64 mr-5 leading-tight ">
          <h1 className="text-gray-500 font-bold text-7xl drop-shadow-md shadow-gray-600">Welcome</h1>
          <h1 className="text-gray-400 font-bold ml-2 text-3xl drop-shadow-md shadow-gray-600">To ipii.xyz</h1>
          <p className="text-gray-400 ml-3 drop-shadow-md shadow-gray-600">
            Jasa Layanan Pembuatan Website & Bot Whatsapp, Discord. <br></br>Terpercaya 100%
          </p>
          <a href="https://wa.link/9e4z01">
            <button className="bg-green-500 rounded p-2 mt-2 text-green-100 ml-3 shadow-md hover:shadow-green-400 font-bold animate-infinite hover:animate-wiggle  shadow-green-200">Whatsapp</button>
          </a>
        </div>
        <div className="flex justify-center mt-10">
          <img src={Welcome} className="sm:mr-20 h-56 md:h-72 drop-shadow-md shadow-gray-500 object-center " />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

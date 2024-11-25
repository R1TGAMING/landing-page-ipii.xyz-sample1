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
        </div>
        <div className="flex justify-center mt-10">
          <img src={Welcome} className="sm:mr-20 h-72 drop-shadow-md shadow-gray-500 object-center " />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import React from "react";
import Welcome from "../../public/welcome.png";

function HomePage() {
  return (
    <div className="container mx-auto h-sceeen mt-28">
      <div className="flex flex-row items-center justify-center content-center">
        <div className="items-center mr-64 leading-tight ">
          <h1 className="text-gray-500 font-bold text-7xl drop-shadow-md shadow-gray-600">Welcome</h1>
          <h1 className="text-gray-400 font-bold ml-2 text-3xl drop-shadow-md shadow-gray-600">To ipii.xyz</h1>
          <p className="text-gray-400 ml-3 drop-shadow-md shadow-gray-600">
            Jasa Layanan Pembuatan Website & Bot Whatsapp, Discord <br></br>Terpercaya 100%
          </p>
        </div>
        <div>
          <img src={Welcome} className="h-64 drop-shadow-md shadow-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

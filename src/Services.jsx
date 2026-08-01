import React from "react";

function Services({ services }) {
  return (
    <div className="grid justify-center container mx-auto p-4 min-w-[320px] shadow-md shadow-gray-900 my-5 rounded-xl">
      <div className="grid justify-center ">
        <h1 className="font-bold text-2xl tracking-[2px]">Services</h1>
        <hr className="w-7 border-2" />
      </div>
      <div id="Services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto p-4 shadow-md shadow-gray-900 my-5 rounded-xl min-w-[320px] overflow-x-auto">
        {services.map((service) => (
          <div key={service.id} className={`border rounded-lg p-4  grid grid-cols-[20%_80%] items-center gap-4   ${service.id === 3 ?"md:col-span-2 md:justify-self-center  lg:col-span-1 lg:w-full":""}`  }>
            <div className={`flex justify-center items-center w-16 h-16 rounded-full ${service.id === 3 ? "bg-purple-300" : "bg-purple-300"}`}>
            <h1 className="text-5xl items-center text-purple-700 bg-purple-300  rounded-full ">{service.icon}</h1>
            </div>
            <div>
              <h3 className="mt-2 font-semibold">{service.title}</h3>
              <p className="mt-2">{service.pera}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

import React from "react";
import serviceProviderData from "../../data/serviceProvider.json";
import midShape from '../../assets/Taskrabbit_Same_Day_Handyman,_Moving_Mounting_Services/mid_right_shape_first.bfe4482f.svg'
const ServiceProvider = () => {
  const serviceProviders = serviceProviderData.serviceProviders;
  return (
    <div className="max-w-screen mt-12 h-auto mx-auto relative flex flex-col justify-center items-center gap-10 ">
    <div className="absolute right-0 -top-40"><img src={midShape} alt="mid shape" /></div>
      <h1 className="text-4xl font-bold w-[80%] text-start pl-12 text-[#386842]" style={{WebkitTextStroke:".3px #0d7a5f"}}>Service providers</h1>
      <div className="flex flex-wrap justify-center items-center  gap-x-12 gap-y-8 w-[80%] h-auto mx-auto">
        {serviceProviders.map((provider) => (
          <div key={provider.id} className="w-[330px] flex justify-center items-start gap-7 flex-col h-auto rounded-b-xl bg-[#eaf9ff58] shadow-md cursor-pointer">
            <div className="w-full h-auto">
              <img src={provider.img} alt="jh" className="w-[330px] h-[200px] " />
            </div>
            <div className="px-3">
                <h1 className="font-bold" style={{WebkitTextStroke:".3px #0d7a5f"}}>{provider.name}</h1>
                <h1 className="font-bold" style={{WebkitTextStroke:".3px #0d7a5f"}}>{provider.serviceType}</h1>
                <h1 className="text-sm font-semibold" style={{WebkitTextStroke:".3px #0d7a5f"}}>Location : <span className="font-normal ">{provider.location}</span></h1>
                <h1 className="text-sm font-semibold" style={{WebkitTextStroke:".3px #0d7a5f"}}>Timing : <span className="font-normal">{provider.availability}</span> </h1>
                <h1 className="text-sm font-semibold">Hourly rate : <span className="text-[#386842] text-lg font-bold">${provider.hourlyRate}</span></h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProvider;

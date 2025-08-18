import { useState } from "react";

function DevelopersInfo() {
  const [isVisible, setVisible] = useState(false);
  let developersInfo = [
    {
      name: "Yash Mishra",
      role: "Full Stack Developer",
      age: "23",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHEz2CoxkNVTQ/profile-displayphoto-shrink_800_800/B4DZQ0.TA6GUAg-/0/1736055534790?e=1758153600&v=beta&t=dR-wPlYql7IAfV-kL7QhI-j0IwmxTCfP1HCPFDKGEXA",
    },
    {
      name: "Rahul Tiwari",
      role: "Backed End Developer",
      age: "24",
      image:
        "https://avatars.githubusercontent.com/u/121499348?s=400&u=f0dbe3b954055bd8533e0957535bef7a753e38bc&v=4",
    },
  ];
  return (
    <>
      <div className="min-h-screen pb-6 w-screen bg-green-500 flex justify-center items-center flex-col gap-2">
        <div className="developerInfo flex flex-col md:flex-row md:mt-0 mt-2 gap-2">
          {developersInfo.map((info, index) => (
            <div
              className={`info min-w-56 h-56 bg-blue-600 border-2 border-blue-500 rounded-2xl text-blue-100 ${
                isVisible ? "" : "hidden"
              }`}
            >
              <div className="p-2" key={index}>
                <img
                  src={info.image}
                  alt="developer image"
                  className="w-32 h-32 mb-1 mx-auto rounded-full"
                />
                <p>Name: {info.name}</p>
                <p>Role: {info.role}</p>
                <p>Age: {info.age}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => setVisible(!isVisible)}
            className="border-2 rounded-4xl p-1.5 cursor-pointer text-white select-none hover:bg-blue-600 hover:border-blue-500 hover:text-blue-100"
          >
            {isVisible ? " Hide Developers Info" : " Show Developers Info"}
          </button>
        </div>
      </div>
    </>
  );
}

export default DevelopersInfo;

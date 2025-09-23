import { useState } from "react";

function DevelopersInfo() {
  const [isVisible, setVisible] = useState(false);
  const developersInfo = [
    {
      name: "Yash Mishra",
      role: "Full Stack Developer",
      age: "23",
      image: "https://i.ibb.co/VWf1Kc3N/1756575920105.jpg",
    },

    {
      name: "Rahul Tiwari",
      role: "Backend Developer",
      age: "24",
      image:
        "https://i.ibb.co/xtcbJvr0/121499348.jpg",
    },
  ];
  const toggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  return (
    <>
      <div className="h-96 pb-6 w-screen bg-green-500 flex justify-center items-center flex-col gap-2 py-6">
                <h2 className="font-bold text-white mb-6 text-2xl">Handling Toggle</h2>

        <div className="developerInfo flex flex-col md:flex-row md:mt-0 mt-2 gap-2">
          {isVisible &&
            developersInfo.map((info, index) => (
              <div
                key={index}
                className="info min-w-56 h-56 bg-blue-600 border-2 border-blue-500 rounded-2xl text-blue-100 "
              >
                <div className="p-2">
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
            onClick={toggle}
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

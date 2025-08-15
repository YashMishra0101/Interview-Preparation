import { useState } from "react";

function UserInfo() {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <div className="userInfo flex justify-center items-center flex-col mt-32">
        <div className={`info w-55  border-2 ${isVisible ? "" : "hidden"}`}>
          <img
            className="w-32 h-32 mx-auto"
            src="https://media.licdn.com/dms/image/v2/D4D03AQHEz2CoxkNVTQ/profile-displayphoto-shrink_800_800/B4DZQ0.TA6GUAg-/0/1736055534790?e=1758153600&v=beta&t=dR-wPlYql7IAfV-kL7QhI-j0IwmxTCfP1HCPFDKGEXA"
            alt="yash-image"
          />
          <h2>User Name:Yash.RK.Mishra</h2>
          <p>Postion:Full Stack Developer</p>
          <p>Age:23</p>
        </div>
        <button
          onClick={() => setVisible(!isVisible)}
          className="border-2 p-2 rounded-3xl bg-amber-300 border-amber-400 hover:bg-green-300 hover:border-green-400 cursor-pointer text-red-500 font-medium"
        >
        {isVisible ? "Hide User Info" : "Show User Info"}
        </button>
      </div>
    </>
  );
}

export default UserInfo;

import { useState } from "react";
import EmployessList from "./EmployessList";

const FetchEmployess = () => {
  return (
    <>
      <div className="py-6 w-screen bg-yellow-200 flex justify-center items-center flex-col gap-2">
        <h2 className="font-bold text-yellow-600 mb-6 text-2xl">
          Fetch Data From Array Objects
        </h2>

        {EmployessList.map((employessData, index) => {
          return (
            <div key={index}>
              <div className="text-green-600 font-bold text-2xl">
                {employessData.name}{" "}
                <span className="text-green-500 font-medium text-2xl">
                  - {employessData.location}
                </span>
              </div>
              <div>
                {employessData.employees.map((employeesInfo, index) => {
                  return (
                    <div
                      key={index}
                      className="text-blue-500 font-bold text-xl"
                    >
                      Name: {employeesInfo.name}{" "}
                      <span className="font-medium">
                        : {employeesInfo.role}
                      </span>{" "}
                      <span className="font-medium">
                        - {employeesInfo.experience} years
                      </span>{" "}
                      <p className="font-bold">
                        Skills:
                        <span className="font-medium">
                          {} {employeesInfo.skills.join(", ")}
                        </span>
                      </p>
                      <div>
                        {employeesInfo.projects.map((project, index) => {
                          return (
                            <p key={index}>
                              Project:{" "}
                              <span className="font-medium">
                                {project.title}
                              </span>
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FetchEmployess;

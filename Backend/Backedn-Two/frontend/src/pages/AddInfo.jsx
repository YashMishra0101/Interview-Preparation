import { useEffect } from "react";
import { useActionState } from "react";
import toast from "react-hot-toast";
import { DeveloperInfoAdd } from "../api/developersApi";

const AddInfo = () => {
  const initialData = {
    name: "",
    country: "",
    experience: "",
    salary: "",
    previousCompany: "",
    currentPosition: "",
    skills: "",
    success: false,
    error: false,
  };

  const formSubmit = async (_prevState, formData) => {
    const name = formData.get("name");
    const country = formData.get("country");
    const experience = formData.get("experience");
    const salary = formData.get("salary");
    const previousCompany = formData.get("previousCompany");
    const currentPosition = formData.get("currentPosition");
    const skills = formData.get("skills");
    try {
      const developerData = {
        name,
        country,
        experience,
        salary,
        previousCompany,
        currentPosition,
        skills: skills.split(",").map((skill) => skill.trim()),
      };
      await DeveloperInfoAdd(developerData);
      return { ...initialData, success: true, error: false };
    } catch (error) {
      console.error("Form submission error:", error);
      return { ..._prevState, success: false, error: true };
    }
  };

  const [formState, formAction, isPending] = useActionState(
    formSubmit,
    initialData
  );

  useEffect(() => {
    if (formState.success) {
      toast.success("Form Submitted successfully");
    }
    if (formState.error) {
      toast.error("Something went wrong");
    }
  }, [formState]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
        Add Developer Info
      </h2>
      <form action={formAction} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            disabled={isPending}
            required
            placeholder="Please add the name"
            className="border border-gray-300 text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="country" className="mb-1 font-medium text-gray-700">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            disabled={isPending}
            required
            placeholder="Please add the country"
            className="border border-gray-300 text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="experience"
            className="mb-1 font-medium text-gray-700"
          >
            Experience:
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            disabled={isPending}
            required
            placeholder="Please add the experience"
            className="border border-gray-300 text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="currentPosition"
            className="mb-1 font-medium text-gray-700"
          >
            Current Position:
          </label>
          <input
            type="text"
            id="currentPosition"
            name="currentPosition"
            disabled={isPending}
            required
            placeholder="Please add the Current Position"
            className="border border-gray-300 text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="salary" className="mb-1 font-medium text-gray-700">
            Salary:
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            disabled={isPending}
            required
            placeholder="Please add the Salary"
            className="border border-gray-300 text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="previousCompany"
            className="mb-1 font-medium text-gray-700"
          >
            Previous Company:
          </label>
          <input
            type="text"
            id="previousCompany"
            name="previousCompany"
            disabled={isPending}
            required
            placeholder="Please add the Previous Company"
            className="border border-gray-300 text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="skills" className="mb-1 font-medium text-gray-700">
            Skills:
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            disabled={isPending}
            required
            placeholder="Please add the Skills"
            className="border border-gray-300 text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-green-500 text-white font-bold p-3 rounded-2xl hover:bg-green-600 transition duration-200"
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddInfo;

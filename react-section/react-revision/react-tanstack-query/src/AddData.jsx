import { useActionState } from "react";
import Spinner from "./component/Spinner";
import toast from "react-hot-toast";
import { useEffect } from "react";

const AddData = () => {
  const initialState = {
    name: "",
    country: "",
    experience: "",
    salary: "",
    previousCompany: "",
    skills: "",
  };
  const formSubmitHandler = async (_previousState, formData) => {
    try {
      const name = formData.get("name");
      const country = formData.get("country");
      const experience = formData.get("experience");
      const salary = formData.get("salary");
      const previousCompany = formData.get("previousCompany");
      const skills = formData.get("skills");
      console.log({
        name,
        country,
        experience,
        salary,
        previousCompany,
        skills,
      });
      return { success: true };
    } catch (error) {
      return { error: true };
    }
  };
  const [formState, formAction, isPending] = useActionState(
    formSubmitHandler,
    initialState
  );
  useEffect(() => {
    if (formState?.success) {
      toast.success("Data submitted successfully");
    }
    if (formState?.error) {
      toast.error("Something went wrong");
    }
  }, [formState]);
  if (isPending)
    return (
      <div>
        <Spinner />
      </div>
    );
  return (
    <>
      <form
        action={formAction}
        className="flex justify-center  flex-col p-6 ml-3 mr-3 bg-gray-300 rounded-2xl shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-2 border-white placeholder-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country:
          </label>
          <input
            type="text"
            placeholder="Enter your country"
            id="country"
            name="country"
            required
            className="mt-1 block w-full rounded-md border-2 border-white placeholder-white px-3 py-2 text-s focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700"
          >
            Total Experience:
          </label>
          <input
            type="number"
            placeholder="How many year of experience do you have"
            id="experience"
            name="experience"
            required
            className="mt-1 block w-full rounded-md border-2 border-white placeholder-white px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700"
          >
            Current Salary:
          </label>
          <input
            min="10000"
            type="number"
            name="salary"
            placeholder="Please enter your current salary per month"
            id="salary"
            required
            className="mt-1 block w-full rounded-md border-2 border-white placeholder-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="previousCompany"
            className="block text-sm font-medium text-gray-700"
          >
            Previous Company Name:
          </label>
          <input
            type="text"
            placeholder="Please enter your previous company name"
            id="previousCompany"
            name="previousCompany"
            required
            className="mt-1 block w-full rounded-md border-2 border-white placeholder-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Your Skills:
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            placeholder="Please add your skills"
            required
            className="mt-1 block w-full rounded-md border-2 border-white placeholder-white px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-green-300 border-2 border-green-400 p-3 cursor-pointer "
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddData;

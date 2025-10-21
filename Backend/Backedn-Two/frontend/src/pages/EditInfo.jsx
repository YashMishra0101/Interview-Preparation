import { useEffect, useRef } from "react";
import { useActionState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { GetDeveloperById, UpdateDeveloper } from "../api/developersApi";
import Loader from "../components/Loader";

const EditInfo = () => {
  const { id } = useParams(); // Get developer ID from URL
  const navigate = useNavigate();
  const formRef = useRef(null);

  // Fetch developer data
  const { data: developer, isLoading, isError } = useQuery({
    queryKey: ["developers", id],
    queryFn: () => GetDeveloperById(id),
    enabled: !!id, // Only run query if id exists
  });

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

      console.log("Updating data:", developerData);

      // Call API to update developer
      await UpdateDeveloper({ id, data: developerData });

      return {
        ...initialData,
        success: true,
        error: false,
      };
    } catch (error) {
      console.error("Form submission error:", error);
      return {
        ..._prevState,
        success: false,
        error: true,
      };
    }
  };

  const [formState, formAction, isPending] = useActionState(
    formSubmit,
    initialData
  );

  useEffect(() => {
    if (formState.success) {
      toast.success("Developer updated successfully!");
      setTimeout(() => {
        navigate("/"); // Redirect to list page
      }, 1500);
    }
    if (formState.error) {
      toast.error("Failed to update developer. Please try again.");
    }
  }, [formState, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (isError || !developer) {
    return (
      <div className="text-center p-6">
        <p className="text-red-500 text-lg">Developer not found</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-green-400 px-4 py-2 rounded-2xl"
        >
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-400">
        Edit Developer Information
      </h2>

      <form action={formAction} ref={formRef} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={developer.name}
            disabled={isPending}
            required
            placeholder="Please add the name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="country" className="block mb-1 font-medium">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            defaultValue={developer.country}
            disabled={isPending}
            required
            placeholder="Please add the country"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="experience" className="block mb-1 font-medium">
            Experience:
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            defaultValue={developer.experience}
            disabled={isPending}
            required
            placeholder="e.g., 5 years"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="currentPosition" className="block mb-1 font-medium">
            Current Position:
          </label>
          <input
            type="text"
            id="currentPosition"
            name="currentPosition"
            defaultValue={developer.currentPosition}
            disabled={isPending}
            required
            placeholder="e.g., Senior Developer"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="salary" className="block mb-1 font-medium">
            Salary:
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            defaultValue={developer.salary}
            disabled={isPending}
            required
            placeholder="e.g., 80000"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="previousCompany" className="block mb-1 font-medium">
            Previous Company:
          </label>
          <input
            type="text"
            id="previousCompany"
            name="previousCompany"
            defaultValue={developer.previousCompany}
            disabled={isPending}
            required
            placeholder="e.g., Google"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="skills" className="block mb-1 font-medium">
            Skills (comma-separated):
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            defaultValue={developer.skills?.join(", ")}
            disabled={isPending}
            required
            placeholder="e.g., React, Node.js, MongoDB"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <p className="text-sm text-gray-500 mt-1">
            Separate multiple skills with commas
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isPending}
            className="flex-1 bg-green-400 hover:bg-green-500 p-3 rounded-2xl cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed font-medium text-white transition-colors"
          >
            {isPending ? "Updating..." : "Update Developer"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex-1 bg-gray-400 hover:bg-gray-500 p-3 rounded-2xl cursor-pointer font-medium text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInfo;
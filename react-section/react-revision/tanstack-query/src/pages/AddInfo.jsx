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
        skills: skills.split(",").map((skill) => skill.trim()), // Convert comma-separated string to array
      };
      await  DeveloperInfoAdd(developerData);
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
      console.log("Form Submitted successfully");
      toast.success("Form Submitted successfully");
    }
    if (formState.error) {
      console.log("Something went wrong");
      toast.error("Something went wrong");
    }
  }, [formState]);

  return (
    <>
      <div>
        <form action={formAction}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              disabled={isPending}
              required
              placeholder="Please add the name"
            />
          </div>
          <div>
            <label htmlFor="country">Country: </label>
            <input
              type="text"
              id="country"
              name="country"
              disabled={isPending}
              required
              placeholder="Please add the country"
            />
          </div>
          <div>
            <label htmlFor="experience">Experience: </label>
            <input
              type="text"
              id="experience"
              name="experience"
              disabled={isPending}
              required
              placeholder="Please add the experience"
            />
          </div>
          <div>
            <label htmlFor="currentPosition">Current Position: </label>
            <input
              type="text"
              id="currentPosition"
              name="currentPosition"
              disabled={isPending}
              required
              placeholder="Please add the Current Position"
            />
          </div>
          <div>
            <label htmlFor="salary">Salary: </label>
            <input
              type="text"
              id="salary"
              name="salary"
              disabled={isPending}
              required
              placeholder="Please add the Salary"
            />
          </div>
          <div>
            <label htmlFor="previousCompany">Previous Company: </label>
            <input
              type="text"
              id="previousCompany"
              name="previousCompany"
              disabled={isPending}
              required
              placeholder="Please add the Previous Company"
            />
          </div>
          <div>
            <label htmlFor="skills">Skills : </label>
            <input
              type="text"
              id="skills"
              name="skills"
              disabled={isPending}
              required
              placeholder="Please add the Skills"
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="bg-green-400 p-2 rounded-2xl cursor-pointer"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddInfo;

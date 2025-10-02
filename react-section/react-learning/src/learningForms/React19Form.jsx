import { useEffect } from "react";
import { useActionState } from "react";
import toast from "react-hot-toast";

const React19Form = () => {
  const initialState = {
    message: "",
    error: false,
    success: false,
  };

  const formSubmitHandler = async (prevState, formData) => {
    const dName = formData.get("developerName");
    const dEmail = formData.get("developerEmailId");
    const dId = formData.get("developerId");

    try {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      console.log({ dName, dEmail, dId });
      return {
        message: "Form successfully submitted ✅",
        error: false,
        success: true,
      };
    } catch {
      return {
        message: "Something went wrong ❌",
        error: true,
        success: false,
      };
    }
  };

  const [formState, formAction, isPending] = useActionState(
    formSubmitHandler,
    initialState
  );

  useEffect(() => {
    if (formState.success) {
      toast.success(formState.message);
    }
    if (formState.error) {
      toast.error(formState.message);
    }
  }, [formState]);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <form
          action={formAction}
          className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            React 19 Form
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="developerName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Developer Name
            </label>
            <input
              type="text"
              id="developerName"
              name="developerName"
              required
              disabled={isPending}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="developerEmailId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Developer Email ID
            </label>
            <input
              type="email"
              id="developerEmailId"
              name="developerEmailId"
              required
              disabled={isPending}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="developerId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Developer ID
            </label>
            <input
              type="number"
              id="developerId"
              name="developerId"
              required
              disabled={isPending}
              placeholder="Enter your ID"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};
export default React19Form;

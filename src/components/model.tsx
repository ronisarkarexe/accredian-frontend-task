import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  name: string;
  email: string;
  message: string;
  otp: number;
};

const Modal = (props: { isOpen: boolean; onClose: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [isOtp, setIsOtp] = useState<boolean>(false);
  const [otpGen, setOtpGen] = useState<number | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!isOtp) {
      const { email } = data;
      const response = await fetch(
        "https://accredian-backend-task-chi.vercel.app/api/v1/otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch OTP");
      }
      const responseData = await response.json();
      if (responseData) {
        toast.success("OTP Generated!");
      }
      setIsOtp(true);
      setOtpGen(responseData?.data);
    } else {
      if (Number(data.otp) === otpGen) {
        const newData = {
          name: data.name,
          message: data.message,
          email: data.email,
        };
        const response = await fetch(
          "https://accredian-backend-task-chi.vercel.app/api/v1/refer",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData),
          }
        );
        const referData = await response.json();
        if (referData) {
          toast.success("Reefed successfully!");
          props.onClose();
          reset();
        }
      } else {
        console.error("Entered OTP does not match generated OTP.");
      }
    }
  };

  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-75 z-50 overflow-hidden">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md max-h-full mx-4 my-2 overflow-auto">
        <h2 className="text-xl mb-4">Refer</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {!isOtp ? (
              <>
                <div>
                  <input
                    className="w-full rounded-md border border-blue-400 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-600">
                      Name is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    className="w-full rounded-md border border-blue-400 p-3 text-sm my-2"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-600">
                      Email is required
                    </span>
                  )}
                </div>
                <div>
                  <textarea
                    className="w-full rounded-md border border-blue-400 p-3 text-sm"
                    placeholder="Message"
                    rows={3}
                    {...register("message", { required: false })}
                  />
                </div>
              </>
            ) : (
              <div>
                <input
                  className="w-full rounded-md border border-blue-400 p-3 text-sm"
                  placeholder="OTP"
                  type="number"
                  {...register("otp", { required: true })}
                />
                <span className="text-xs text-blue-600">
                  Check your email for OTP
                </span>
              </div>
            )}

            <div className="flex items-center justify-end mt-2">
              <input
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                value={!isOtp ? "Get OTP" : "Submit"}
              />
              <button
                className="bg-red-500 text-white px-4 py-2 rounded ml-3"
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Modal;

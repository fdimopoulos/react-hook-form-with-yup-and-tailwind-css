import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../schemas/userSchema";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
        navigate("/thank-you");
        reset();
    };

    return (
        <div className="flex justify-center items-center flex-col min-h-svh max-w-[500px] mx-auto">
            <h2 className="text-2xl text-gray-200 font-bold mb-6">
                Registration Form
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-4 p-4 w-full rounded-2xl shadow-[0px_5px_15px_rgba(0,0,0,0.4)]"
            >
                <label htmlFor="firstName" className="label">
                    First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    {...register("firstName")}
                    className={errors.firstName ? "input-error" : "input"}
                />
                <p className="error">{errors.firstName?.message}</p>
                <label htmlFor="lastName" className="label">
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    {...register("lastName")}
                    className={errors.lastName ? "input-error" : "input"}
                />
                <p className="error">{errors.lastName?.message}</p>
                <label htmlFor="email" className="label">
                    E-mail
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="example@example.com"
                    {...register("email")}
                    className={errors.email ? "input-error" : "input"}
                />
                <p className="error">{errors.email?.message}</p>
                <label htmlFor="password" className="label">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="*******"
                    {...register("password")}
                    className={errors.password ? "input-error" : "input"}
                />
                <p className="error">{errors.password?.message}</p>
                <label htmlFor="confirmPassword" className="label">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="*******"
                    {...register("confirmPassword")}
                    className={errors.password ? "input-error" : "input"}
                />
                <p className="error">{errors.confirmPassword?.message}</p>
                <button
                    className="bg-blue-400 hover:bg-blue-500 block w-full my-8 py-3 px-2 rounded-lg font-semibold uppercase"
                    type="submit"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default Form;

"use client";
import Button from "@/components/core/Button/Button";
import Input from "@/components/core/Input/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'next/navigation'

const schema = yup.object({
  email: yup
    .string()
    .nullable()
    .required("Email is required")
    .transform((value: string) => (value ? value : null))
    .email("Invalid Email format")
    .max(100, "Work Email must not exceed 100 digits")
    .matches(/^\S*$/, "Spaces are not allowed in the email"),
  password: yup.string().required("Password is required").min(6,"Password minimum length 6 character"),
});

export default function LogIn() {
    const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
    reset,
    setError,
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data: any) => {
    console.log(data);
    if(data){
        router.push('/dashboard', { scroll: false })
    }
  };
  return (
    <div className="md:mt-32 mt-10">
      <h3 className="text-2xl font-bold">Hi There</h3>
      <p className="text-xl my-3">Log in to your account</p>
      <form className="md:w-[400px] w-full" onSubmit={handleSubmit(formSubmit)}>
        <Input
          label="Email"
          placeholder="Enter Email"
          classNames="md:w-[400px] w-full my-6"
          registerProperty={register("email")}
          errorText={errors.email?.message}
          leftHelpText={"checkbox"}
          isRequired
          type="text"
          noMargin={true}
        />
        <Input
          label="Password"
          placeholder="Enter Password"
          classNames="md:w-[400px] w-full"
          registerProperty={register("password")}
          errorText={errors.password?.message}
          leftHelpText={"checkbox"}
          isRequired
          type="password"
          noMargin={true}
        />
        <Button
          type="submit"
          className="px-6 py-3 mb-4 bg-primary-500 flex justify-center font-medium text-white w-full mt-8"
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

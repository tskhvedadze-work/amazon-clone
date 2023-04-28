import { useForm, SubmitHandler } from "react-hook-form";

type RegisterFormValues = {
  email: string;
  password: string;
  repeat_password: string;
  gender: "female" | "male" | "other";
  birthdate: string;
  phoneNumber: string;
};

export default function RegisterView() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    if (data.password !== data.repeat_password) {
      setError("repeat_password", {
        message: "არ დაემთხვა პაროლი გამოუშვი ახალი",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input {...register("email")} placeholder="Email" />
      <input
        type="password"
        {...register("password", { required: true })}
        placeholder="Password"
      />
      {errors.password && <span>Password is required</span>}
      <input
        type="password"
        {...register("repeat_password", { required: true })}
        placeholder="Repeat password"
      />
      {errors.repeat_password && <span>{errors.repeat_password.message}</span>}
      <div>
        <label>Female</label>
        <input
          {...register("gender", { required: true })}
          type="radio"
          value="female"
        />
        <label>Male</label>
        <input
          {...register("gender", { required: true })}
          type="radio"
          value="male"
        />
        <label>Other</label>
        <input
          {...register("gender", { required: true })}
          type="radio"
          value="other"
        />
      </div>
      <select
        {...register("birthdate", { required: true })}
        placeholder="Birth Date"
      >
        <option value={2000}>2001</option>
        <option value={2001}>2001</option>
        <option value={2002}>2002</option>
        <option value={2003}>2003</option>
        <option value={2004}>2004</option>
      </select>
      <input
        {...register("phoneNumber", { required: true })}
        placeholder="Phone Number"
      />

      <input type="submit" />
    </form>
  );
}

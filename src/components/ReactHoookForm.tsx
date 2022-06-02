import { useForm } from "react-hook-form";

interface IStudents {
    name: string;
    password: string;
    email: string;
}

export default function ReactHookForm() {

    const { register, handleSubmit, getValues, formState, reset } = useForm<IStudents>();
    const onSubmit = (data: IStudents) => {
        alert(data.name + "---" + data.password);
        alert(getValues("name"));
    }
    return (
        <form>
            <input type="text" placeholder="username" {...register("name", {
                required: { value: true, message: "Name is required field" },
                minLength: { value: 4, message: "Name should have minimum of 4 letter" }
            })} />
            <input type="password" placeholder="password" {...register("password", {
                required: { value: true, message: "Password is required" }
            })} />
            <input type='email' placeholder="email" {...register("email", {
                pattern: { value: /[\w.]+@\w+\.[\w.]+/, message: "email is invalid" }
            })} />
            <button onClick={handleSubmit(onSubmit)} >submit</button>
            <button onClick={() => reset()} >reset</button>
            {formState.errors?.name?.message && <div>{formState.errors?.name?.message}</div>}
            {formState.errors?.password?.message && <div>{formState.errors?.password?.message}</div>}
            {formState.errors?.email?.message && <div>{formState.errors?.email?.message}</div>}
        </form>
    )
}
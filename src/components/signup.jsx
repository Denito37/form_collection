import { useForm } from "react-hook-form";

export default function SignUp(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("password"));
return(
    <div className=" m-auto my-4 p-4 bg-slate-600 rounded-2xl flex flex-col max-w-lg ">
        <h2 className=" text-center text-2xl font-medium m-2">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" >

            <input className=" p-1 mb-3 rounded-md" type="text" placeholder="name" {...register("name" , { minLength: 2 })} />
            {errors.name && <span>This is below minimum length</span>}

            <input className=" p-1 mb-3 rounded-md" type="text" placeholder="email" {...register("email" , { pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} />
            {errors.email && <span>This is not a valid email</span>}

            <input className=" p-1 mb-3 rounded-md" type="password" placeholder="password" {...register('password', {pattern:  /^[A-Za-z]\w{7,14}$/})} />
            {errors.password && <span>Your password must be between 7 to 15 characters, include only 
                letters, numeric digits, underscore and first character must be a letter</span>}

            <input type="submit" className=" bg-green-700 p-2 self-center rounded-2xl font-semibold transition-colors hover:bg-slate-50 hover:text-green-700" />

        </form>
    </div>
)
}
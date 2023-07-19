import { useForm } from "react-hook-form";

export default function Contact(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("name"));
return(
    <div className=" m-auto my-4 p-4 bg-slate-600 rounded-2xl flex flex-col max-w-lg ">
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" >

        <input type="text" placeholder="name" {...register("name" , { minLength: 3 })} />
        {errors.name && <span>This is below minimum length</span>}

        <input type="text" placeholder="email" {...register("email" , { pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} />
        {errors.email && <span>This is not a valid email</span>}

        <input type="text" placeholder="subject" {...register("subject")} />

        <textarea placeholder="message" name="message" id="message" cols="30" rows="10"></textarea>

        <input type="submit" />

    </form>
    </div>
)
}
import { useForm } from "react-hook-form";

export default function Contact(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("name"));
return(
    <div className=" m-auto my-4 p-4 bg-slate-600 rounded-2xl flex flex-col max-w-lg ">
        <h2 className=" text-center text-2xl font-medium m-2">Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" >

            <label htmlFor="name">Name:</label>
            <input className=" p-1 mb-3 rounded-md" type="text" id="name"  {...register("name" , { minLength: 2 })} />
            {errors.name && <span>This is below minimum length</span>}

            <label htmlFor="email">Email:</label>
            <input className=" p-1 mb-3 rounded-md" type="text" id="email" {...register("email" , { pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} />
            {errors.email && <span>This is not a valid email</span>}

            <label htmlFor="subject">Subject:</label>
            <input className=" p-1 mb-3 rounded-md" type="text" id="subject" {...register("subject", {maxLength:100})} />
            {errors.subject && <span>The limit of characters is 100</span>}

            <label htmlFor="message">Message:</label>
            <textarea className=" p-1 mb-3 rounded-md" {...register('message', { maxLength: 500})} name="message" id="message" cols="30" rows="10"></textarea>
            {errors.message && <span>The character limit is 500</span>}

            <input type="submit" className=" bg-green-700 p-2 self-center rounded-2xl font-semibold transition-colors hover:bg-slate-50 hover:text-green-700" />

        </form>
    </div>
)
}
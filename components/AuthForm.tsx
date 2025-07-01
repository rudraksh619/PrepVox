"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { email } from "zod/v4-mini"
import { toast } from "sonner"

import FormField from "@/components/FormField"
import { useRouter } from "next/router"

const authformSchema = (type:FormType) =>{
  
  return z.object({

    name : type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(3),

})} 

const AuthForm = ({type} : {type:FormType}) => {
  const formSchema = authformSchema(type);
    // define your form  
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password:"",
    },
  })

//    2. submit handler
const router = useRouter();
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if(type === "sign-in"){
       toast.success("Logined Succesfully")
       router.push('/')
      }
      else{
       toast.success('Account Created Successfuly');
       router.push('/sign-in')
      }

    } catch (error) {
      console.log(error);
      toast.error("something went wrong,please try again")
    }
  }

  const isSignIn = type === "sign-in" ;  
  
  

  return (
    <div className="card-border lg:min-w-[566px] ">
      <div className="flex card flex-col gap-6 py-14 px-10 ">
        <div className="flex  justify-center gap-2">
          <img src = "/logo.svg" alt = "logo" height={32} width = {32}/>
          <h1 className="text-primary-100">PrepVox</h1>
          </div>
          <h4 className="text-primary-200 mb-3">Practice job interview with PrepVox..</h4>
         


      <Form {...form}>
      <form 
      onSubmit={form.handleSubmit(onSubmit)}
       className=" w-full space-y-6 form mt-2">

      {!isSignIn && (<FormField 
      control={ form.control}
      name="name"
      label = "Name"
      placeholder = "Your Name" />
      )}
      <FormField control={ form.control}
       name="email"
       label = "Email"
       placeholder = "Your Email" />
      <FormField control={ form.control}
      name="password"
      label = "Password"
     placeholder = "Your Password" />

        <Button className="btn" type="submit">{isSignIn ? "Sign-in" : "Create an Account"}</Button>
      </form>

       <p className="text-center">{isSignIn ? "No account yet? " : "Have an Account? "}
        <Link  
        className="font-bold text-user-primary ml-1"
        href = {isSignIn ? '/sign-up' : '/sign-in'}>
        {isSignIn ? "sign up" : "sign in"}</Link>
       </p>
    </Form>
  </div>
    </div>
  )
}

export default AuthForm

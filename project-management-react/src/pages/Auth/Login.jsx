import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const Login = () => {
     const form = useForm({
    defaultValues: {
             email: "",
             password: "",
             
    },
  });

  const onSubmit = (data) => {
    console.log("create project data", data);
  };
  return (
      <div className="space-y-5">
          <h1>Register</h1>
                     <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
       

                      <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="email..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      
                      <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="password..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
              <Button type="submit" className="w-full my-5">
                Register
              </Button>
 
        
        </form>
      </Form>
    </div>
  )
}

export default Login
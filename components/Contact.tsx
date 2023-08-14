"use client";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Validation } from "@/lib/validation";
import { Textarea } from "./ui/textarea";

export function Contact() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof Validation>>({
    resolver: zodResolver(Validation),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  // ...

  function onSubmit(values: z.infer<typeof Validation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="bg-[#0a192f] w-full h-auto pt-4 pb-12" id="contact">
      <div className="max-w-[1080px] mx-auto px-5 flex justify-center items-center pt-[150px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col max-w-[600px] w-full gap-5">
            <div className="pb-8">
              <div className="flex items-center">
                <div className="text-[#64ffda] text-4xl">Contact</div>
              </div>
              <p className="text-gray-300 py-4 text-xl mt-2">
                // Submit the form below
              </p>
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      {...field}
                      className={`bg-[#ccd6f6] border border-transparent`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="bg-[#ccd6f6] border border-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-3">
                  <FormControl>
                    <Textarea
                      rows={10}
                      className="bg-[#ccd6f6] border border-transparent"
                      {...field}
                      placeholder="Message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className=" border-2 bg-transparent border-[#64ffda] text-[#64ffda] rounded tracking-wider px-4 py-3 my-8 mx-auto flex items-center">
              Let's Collaborate
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  subject: z.string().min(2).max(50),
});

export default function Home() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
      <div className="text-center">
        <h1>Flashia</h1>
        <h2>Estude com flashcards utilizando inteligência artificial 🤖</h2>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="subject">
                    Gerar flashcards sobre
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: Física Quântica"
                      id="subject"
                      aria-describedby="subject"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Digite o assunto que você quer estudar e nós geraremos os
                    flashcards para você.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Gerar</Button>
          </form>
        </Form>
      </div>
    </main>
  );
}

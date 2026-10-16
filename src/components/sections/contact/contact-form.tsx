"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm } from "@/lib/api";
import { budgetOptions, contactCopy, interestOptions } from "@/data/contact";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, fieldErrorId } from "@/components/ui/field";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email"),
  company: z.string().min(1, "Please enter your company"),
  interest: z.string().min(1, "Choose an area of interest"),
  budget: z.string().min(1, "Choose a budget range"),
  message: z.string().min(20, "Tell us a little more (at least 20 characters)"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
      budget: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactValues) {
    await submitContactForm(values);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="flex min-h-96 flex-col items-center justify-center gap-4 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-success/10 text-success">
          <Icon name="check" size={28} />
        </span>
        <h3 className="font-display text-2xl font-semibold">
          {contactCopy.successTitle}
        </h3>
        <p className="max-w-sm text-muted">{contactCopy.successDescription}</p>
      </Card>
    );
  }

  return (
    <Card>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid gap-6 sm:grid-cols-2"
      >
        <Field id="name" label="Name" error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Jane Doe"
            invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? fieldErrorId("name") : undefined}
            {...register("name")}
          />
        </Field>
        <Field id="email" label="Work email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? fieldErrorId("email") : undefined}
            {...register("email")}
          />
        </Field>
        <Field
          id="company"
          label="Company"
          error={errors.company?.message}
          className="sm:col-span-2"
        >
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Company name"
            invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? fieldErrorId("company") : undefined}
            {...register("company")}
          />
        </Field>
        <Field id="interest" label="I'm interested in" error={errors.interest?.message}>
          <Select
            id="interest"
            options={interestOptions}
            placeholder="Select an area"
            invalid={Boolean(errors.interest)}
            aria-describedby={errors.interest ? fieldErrorId("interest") : undefined}
            {...register("interest")}
          />
        </Field>
        <Field id="budget" label="Budget" error={errors.budget?.message}>
          <Select
            id="budget"
            options={budgetOptions}
            placeholder="Select a range"
            invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? fieldErrorId("budget") : undefined}
            {...register("budget")}
          />
        </Field>
        <Field
          id="message"
          label="Project details"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <Textarea
            id="message"
            placeholder="What are you trying to achieve, and by when?"
            invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? fieldErrorId("message") : undefined}
            {...register("message")}
          />
        </Field>
        <div className="sm:col-span-2">
          <Button
            type="submit"
            size="lg"
            icon="send"
            loading={isSubmitting}
            className="w-full sm:w-auto"
          >
            Send message
          </Button>
        </div>
      </form>
    </Card>
  );
}

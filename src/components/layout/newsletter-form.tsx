"use client";

import { useId, useState, type FormEvent } from "react";
import { subscribeToNewsletter } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Status = "idle" | "loading" | "success";

export function NewsletterForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");
    if (typeof email !== "string") return;
    setStatus("loading");
    await subscribeToNewsletter(email);
    form.reset();
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Label htmlFor={id}>Monthly growth notes</Label>
      <div className="flex gap-2">
        <Input
          id={id}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
        />
        <Button type="submit" icon="send" loading={status === "loading"}>
          Join
        </Button>
      </div>
      <p className="min-h-5 text-xs text-muted" aria-live="polite">
        {status === "success"
          ? "You're on the list."
          : "One email a month. Unsubscribe any time."}
      </p>
    </form>
  );
}

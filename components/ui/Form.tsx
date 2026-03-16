"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import GlassButton from "./Button";
import SocialIcons from "./SocialIcons";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!,
          name: form.name,
          email: form.email,
          subject: form.subject,
          company: form.company,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSent(true);
      setForm({ name: "", email: "", subject: "", company: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={sendEmail}
      className="w-full max-w-2xl mx-auto flex flex-col gap-6 text-white"
    >
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className="glass-input px-4 py-3"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Email</label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          className="glass-input px-4 py-3"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Reason for contact"
          value={form.subject}
          onChange={handleChange}
          className="glass-input px-4 py-3"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Company</label>
        <input
          type="text"
          name="company"
          placeholder="Company name (optional)"
          value={form.company}
          onChange={handleChange}
          className="glass-input px-4 py-3"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Description</label>
        <textarea
          name="message"
          placeholder="Tell me about your project or inquiry"
          value={form.message}
          onChange={handleChange}
          className="glass-textarea px-4 py-3 h-32 resize-none"
          required
        />
      </div>

      <GlassButton
        variant="gradient"
        size="md"
        className="mt-4"
      >
        {loading ? "Sending..." : "Send Message"}
      </GlassButton>

      {sent && (
        <p className="text-secondary text-center mt-4">
          Thank you! Your message has been sent successfully.
        </p>
      )}
      <SocialIcons />
    </form>
  );
};

export default ContactForm;

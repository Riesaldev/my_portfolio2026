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
        <label className="font-semibold">Nombre</label>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
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
          placeholder="tu@email.com"
          value={form.email}
          onChange={handleChange}
          className="glass-input px-4 py-3"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Asunto</label>
        <input
          type="text"
          name="subject"
          placeholder="Motivo del contacto"
          value={form.subject}
          onChange={handleChange}
          className="glass-input px-4 py-3"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Empresa</label>
        <input
          type="text"
          name="company"
          placeholder="Nombre de la empresa"
          value={form.company}
          onChange={handleChange}
          className="glass-input px-4 py-3"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Descripción</label>
        <textarea
          name="message"
          placeholder="Cuéntame sobre tu proyecto o consulta"
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
        {loading ? "Enviando..." : "Enviar mensaje"}
      </GlassButton>

      {sent && (
        <p className="text-secondary text-center mt-4">
          ¡Gracias! Tu mensaje ha sido enviado correctamente.
        </p>
      )}
      <SocialIcons />
    </form>
  );
};

export default ContactForm;

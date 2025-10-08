'use client';

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={5}
        value={form.message}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600">Failed to send message. Please try again later.</p>
      )}
    </form>
  );
}

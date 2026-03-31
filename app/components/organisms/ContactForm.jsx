"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/common/Container";

const budgetOptions = [
  "-None-",
  "₹1L – ₹3L",
  "₹3L – ₹5L",
  "₹5L – ₹10L",
  "₹10L+",
];

const startDateOptions = [
  "-None-",
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "3+ months",
];

/**
 * ContactForm — Figma-accurate 2-col layout.
 * Left: Mumbai image + contact info. Right: 6-field form.
 */
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    budget: "-None-",
    startDate: "-None-",
    idea: "",
    notRobot: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({
      ...f,
      [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.whatsapp.trim()) e.whatsapp = "WhatsApp number is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "A valid email is required.";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputCls =
    "w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 bg-white focus:ring-1 focus:ring-gray-200 transition";
  const labelCls = "block text-xs text-gray-600 mb-1";

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Mumbai image + contact info */}
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-100">
              <Image
                src="/images/mumbai.jpg"
                alt="Mumbai"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-900">Mumbai</p>
              <a
                href="tel:+919876543210"
                className="block text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                +91 9876543210
              </a>
              <a
                href="mailto:contact@fiveonline.in"
                className="block text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                contact@fiveonline.in
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Received!</h3>
                <p className="text-sm text-gray-500">
                  We review every application personally. If aligned, we schedule a strategic call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label className={labelCls}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={update("name")}
                    className={inputCls}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className={labelCls}>
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={update("whatsapp")}
                    className={inputCls}
                  />
                  {errors.whatsapp && (
                    <p className="text-xs text-red-500 mt-1">{errors.whatsapp}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className={labelCls}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update("email")}
                    className={inputCls}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Budget Range + Project Start Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Budget Range</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={update("budget")}
                      className={inputCls}
                    >
                      {budgetOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Project Start Date</label>
                    <select
                      name="startDate"
                      value={form.startDate}
                      onChange={update("startDate")}
                      className={inputCls}
                    >
                      {startDateOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Product / Brand Idea */}
                <div>
                  <label className={labelCls}>Product / Brand Idea</label>
                  <textarea
                    name="idea"
                    value={form.idea}
                    onChange={update("idea")}
                    rows={3}
                    className={inputCls + " resize-none"}
                  />
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="flex items-center gap-3 border border-gray-200 rounded px-4 py-3">
                  <input
                    type="checkbox"
                    id="notRobot"
                    name="notRobot"
                    checked={form.notRobot}
                    onChange={update("notRobot")}
                    className="w-4 h-4 accent-gray-900"
                  />
                  <label htmlFor="notRobot" className="text-sm text-gray-600 select-none cursor-pointer">
                    I&apos;m not a robot
                  </label>
                  <div className="ml-auto text-right">
                    <p className="text-[10px] text-gray-400 leading-tight">reCAPTCHA</p>
                    <p className="text-[9px] text-gray-300 leading-tight">Privacy - Terms</p>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Submit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7H7m10 0v10" />
                  </svg>
                </button>

                {/* Disclaimer */}
                <p className="text-xs text-gray-400 mt-2 border border-green-200 rounded-lg px-4 py-2.5 bg-green-50 text-green-700">
                  We review every application personally. If aligned, we schedule a strategic call.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

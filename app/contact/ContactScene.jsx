"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HumanCheck from "../components/ui/HumanCheck";
import Button from '@/app/components/common/Button';
import { ArrowRightIcon } from "../components/icons";

const bestFitCards = [
  {
    background: "#f5fff0",
    title: "CORPORATES",
    body: "Complex websites. Multiple stakeholders. Long-term scalability. We operate as digital consultants, not execution vendors.",
    icon: "/figma/contact/who-icon-1.png",
  },
  {
    background: "#ebffe2",
    title: "D2C BRANDS (SHOPIFY-FIRST)",
    body: "Scaling brands spending on performance marketing. If ROAS matters to you, we're aligned.",
    icon: "/figma/contact/who-icon-2.png",
  },
  {
    background: "#dcffcc",
    title: "AGENCY PARTNERS",
    body: "Speed, security, and structured ongoing improvements.",
    icon: "/figma/contact/who-icon-3.png",
  },
];

const notForPills = [
  "One-page brochure websites",
  "Just make it look good projects",
  "Rs30-50K website requests",
  "Urgent 7-day builds without strategy",
];

function HighlightChip({ children }) {
  return (
    <div className="inline-flex max-w-full items-center justify-center border border-[#6abd45] bg-[#eaffdf] px-5 py-2 text-center text-[15px] font-medium leading-6 text-black sm:text-[16px]">
      {children}
    </div>
  );
}

function FieldError({ message }) {
  if (!message) return null;

  return <p className="mt-2 text-[13px] text-[#d92d20]">{message}</p>;
}

export default function ContactScene() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    budget: "",
    startDate: "",
    idea: "",
    notRobot: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field) => (event) => {
    const { type, value, checked } = event.target;

    setForm((current) => ({
      ...current,
      [field]: type === "checkbox" ? checked : value,
    }));

    setErrors((current) => {
      if (!current[field]) return current;
      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });

    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";

    if (!form.whatsapp.trim()) {
      nextErrors.whatsapp = "WhatsApp number is required.";
    } else if (!/^[+0-9()\-\s]{8,}$/.test(form.whatsapp.trim())) {
      nextErrors.whatsapp = "Enter a valid WhatsApp number.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.notRobot) {
      nextErrors.notRobot = "Please complete the human verification.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const updateVerification = (verified) => {
    setForm((current) => ({
      ...current,
      notRobot: verified,
    }));

    setErrors((current) => {
      if (!current.notRobot) return current;
      const nextErrors = { ...current };
      delete nextErrors.notRobot;
      return nextErrors;
    });

    setSubmitted(false);
  };

  return (
    <main className="bg-white text-black">
      <section className="mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-12">
        <div className="mx-auto max-w-[1080px] text-center">
          <h1 className="text-[48px] leading-[0.96] text-black sm:text-[68px] lg:text-[96px] lg:leading-[100px]">
            Build Revenue Engine.
            <br />
            Not Just Websites.
          </h1>
          <p className="mx-auto mt-8 max-w-[640px] text-[18px] leading-[28px] text-black">
            We partner with serious brands who see their website as a revenue
            engine, not a design expense.
          </p>

          <div className="mt-10">
            <Button href="#contact-form-panel" variant="primary" size="md">
              Book a Strategy Call
              <ArrowRightIcon />
            </Button>
          </div>

          <div className="mt-6">
            <HighlightChip>Typical engagements begin at Rs1L+</HighlightChip>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-12">
        <h2 className="text-center text-[42px] leading-[1.1] text-black sm:text-[48px] lg:text-[54px] lg:leading-[64px]">
          Who We&apos;re Best Suited For
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bestFitCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col border border-transparent px-8 py-10"
              style={{ backgroundColor: card.background }}
            >
              <div className="flex h-[86px] w-[86px] items-center justify-center rounded-full bg-black">
                <Image
                  src={card.icon}
                  alt=""
                  width={60}
                  height={60}
                  className="max-h-[60px] w-auto"
                />
              </div>

              <h3 className="mt-12 text-[20px] font-semibold leading-[28px] text-black">
                {card.title}
              </h3>
              <p className="mt-5 text-[16px] leading-[24px] text-black">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] text-center px-6 lg:px-[60px] py-12">
        <h2 className="text-[42px] leading-[1.1] text-black sm:text-[48px] lg:text-[54px] lg:leading-[64px]">
          Who We&apos;re Not For
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {notForPills.map((label) => (
            <div
              key={label}
              className="rounded-full border border-[#dddddd] bg-white px-5 py-3 text-[17px] leading-[27px] text-black"
            >
              {label}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <HighlightChip>We focus on long-term revenue impact.</HighlightChip>
        </div>
      </section>

      <section className="bg-[#f8f8f8] px-6 lg:px-[60px] py-12 mb-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 w-full max-w-[1440px] gap-10">
          <div className="self-center">
            <div className="bg-white">
              <div className="relative aspect-[494/353]">
                <Image
                  src="/figma/contact/mumbai.jpg"
                  alt="Mumbai office"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="space-y-4 px-8 py-8">
                <h3 className="text-[20px] font-semibold leading-none text-black">
                  Mumbai
                </h3>
                <a
                  href="tel:+919876543210"
                  className="block text-[18px] leading-[30px] text-black"
                >
                  +91 9876543210
                </a>
                <a
                  href="mailto:contact@fiveonline.in"
                  className="block text-[18px] leading-[30px] text-black"
                >
                  contact@fiveonline.in
                </a>
              </div>
            </div>
          </div>
          <form
            id="contact-form-panel"
            className="bg-white px-6 py-8 sm:px-8 lg:px-10"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="space-y-6">
              <div>
                <label className="mb-3 block text-[18px] leading-none text-black">
                  Name <span className="text-[#ff3b30]">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={updateField("name")}
                  aria-invalid={Boolean(errors.name)}
                  className="h-[54px] w-full border border-black bg-white px-4 text-[18px] text-black outline-none"
                />
                <FieldError message={errors.name} />
              </div>

              <div>
                <label className="mb-3 block text-[18px] leading-none text-black">
                  WhatsApp Number <span className="text-[#ff3b30]">*</span>
                </label>
                <input
                  name="whatsapp"
                  type="tel"
                  value={form.whatsapp}
                  onChange={updateField("whatsapp")}
                  aria-invalid={Boolean(errors.whatsapp)}
                  className="h-[54px] w-full border border-black bg-white px-4 text-[18px] text-black outline-none"
                />
                <FieldError message={errors.whatsapp} />
              </div>

              <div>
                <label className="mb-3 block text-[18px] leading-none text-black">
                  Email <span className="text-[#ff3b30]">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField("email")}
                  aria-invalid={Boolean(errors.email)}
                  className="h-[54px] w-full border border-black bg-white px-4 text-[18px] text-black outline-none"
                />
                <FieldError message={errors.email} />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-[16px] leading-none text-black">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={updateField("budget")}
                    className="h-[50px] w-full border border-black bg-white px-4 text-[18px] text-black outline-none"
                  >
                    <option value="">-None-</option>
                    <option>Rs1L - Rs3L</option>
                    <option>Rs3L - Rs5L</option>
                    <option>Rs5L - Rs10L</option>
                    <option>Rs10L+</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-[16px] leading-none text-black">
                    Project Start Date
                  </label>
                  <select
                    name="startDate"
                    value={form.startDate}
                    onChange={updateField("startDate")}
                    className="h-[50px] w-full border border-black bg-white px-4 text-[18px] text-black outline-none"
                  >
                    <option value="">-None-</option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>1-3 months</option>
                    <option>3+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-3 block text-[18px] leading-none text-black">
                  Product / Brand Idea
                </label>
                <textarea
                  name="idea"
                  rows={4}
                  value={form.idea}
                  onChange={updateField("idea")}
                  className="min-h-[110px] w-full resize-y border border-black bg-white px-4 py-3 text-[18px] text-black outline-none"
                />
              </div>

              {/* <HumanCheck
                value={form.notRobot}
                onChange={updateVerification}
                error={errors.notRobot}
              /> */}
            </div>

            <div className="mt-8 border-t border-[#ececec] pt-6">
              <Button type="submit" variant="primary" size="md">
                Submit
                <ArrowRightIcon />
              </Button>

              <div className="mt-6 bg-[#eaffdf] px-5 py-3">
                <p className="text-[15px] leading-[22px] text-black">
                  {submitted
                    ? "Application received. We review every application personally and follow up if aligned."
                    : "We review every application personally. If aligned, we schedule a strategic call."}
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

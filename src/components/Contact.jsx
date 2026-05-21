import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_d17yyos",
        "template_h7upvir",
        {
          from_name:  form.name,
          to_name:    "Taj Sharma",
          from_email: form.email,
          to_email:   "sharma.tajinder01@gmail.com",
          message:    form.message,
        },
        "RqZXyXTtiiuXFvYD8"
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong — please try again.");
      });
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
      <motion.div
        variants={slideIn("up", "tween", 0.2, 0.75)}
        className="card-glow bg-surface rounded-2xl p-8 sm:p-10"
      >
        <p className={styles.sectionSubText}>Let's connect</p>
        <h3 className={`${styles.sectionHeadText} mb-8`}>Contact.</h3>

        {sent ? (
          <div className="py-10 text-center">
            <p className="font-mono text-accent text-label uppercase tracking-widest mb-3">
              Message received
            </p>
            <p className="text-text-secondary text-[15px]">
              I'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <label className="flex flex-col gap-2">
              <span className="font-mono text-text-muted text-[11px] uppercase tracking-widest">
                Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-primary border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted font-sans text-[15px] outline-none focus:border-accent transition-colors"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-mono text-text-muted text-[11px] uppercase tracking-widest">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="bg-primary border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted font-sans text-[15px] outline-none focus:border-accent transition-colors"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-mono text-text-muted text-[11px] uppercase tracking-widest">
                Message
              </span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                required
                className="bg-primary border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted font-sans text-[15px] outline-none focus:border-accent transition-colors resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-fit font-mono text-label font-semibold px-8 py-3 rounded-lg bg-accent text-primary hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending…" : "Send Message →"}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

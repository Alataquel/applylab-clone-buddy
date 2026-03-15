import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  institution: z.string().trim().max(200).optional(),
  role: z.enum(["student", "career_team", "other"]),
  message: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const RequestPilot = () => {
  const [form, setForm] = useState<Partial<FormData>>({ role: "student" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <motion.p variants={itemVariants} className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Get started</motion.p>
            <motion.h1 variants={itemVariants} className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-4">
              Request a pilot.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-sm text-gray-500 leading-relaxed max-w-md">
              Whether you're a student looking for early access or a university exploring a partnership — we'd like to hear from you.
            </motion.p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl p-10 shadow-md text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
              >
                <ArrowRight className="w-5 h-5 text-primary" />
              </motion.div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Request received.</h2>
              <p className="text-sm text-gray-500">We'll be in touch within 48 hours.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-100 space-y-6"
            >
              {/* Role selector */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label className="text-xs text-gray-500 font-medium mb-2 block">I am a</label>
                <div className="flex gap-2">
                  {[
                    { value: "student", label: "Student" },
                    { value: "career_team", label: "Career Team" },
                    { value: "other", label: "Other" },
                  ].map((r) => (
                    <motion.button
                      key={r.value}
                      type="button"
                      onClick={() => setForm({ ...form, role: r.value as FormData["role"] })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        form.role === r.value
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      {r.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <label className="text-xs text-muted-foreground font-medium mb-2 block">Full name</label>
                <input
                  type="text"
                  value={form.name || ""}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-transparent rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all hover:border-primary/20"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label className="text-xs text-muted-foreground font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email || ""}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-transparent rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all hover:border-primary/20"
                  placeholder="you@university.edu"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </motion.div>

              {/* Institution */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                <label className="text-xs text-muted-foreground font-medium mb-2 block">Institution (optional)</label>
                <input
                  type="text"
                  value={form.institution || ""}
                  onChange={(e) => setForm({ ...form, institution: e.target.value })}
                  className="w-full bg-secondary border border-transparent rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all hover:border-primary/20"
                  placeholder="University name"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label className="text-xs text-muted-foreground font-medium mb-2 block">Message (optional)</label>
                <textarea
                  rows={3}
                  value={form.message || ""}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-transparent rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-all hover:border-primary/20"
                  placeholder="Anything else you'd like us to know"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 }}
                type="submit"
                className="w-full bg-foreground text-background font-medium py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit request
              </motion.button>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestPilot;

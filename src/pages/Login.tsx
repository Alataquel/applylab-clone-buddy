import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Login = () => {
  const [role, setRole] = useState<"student" | "staff">("student");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-sm"
      >
        {/* Back link */}
        <motion.a
          variants={itemVariants}
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
          whileHover={{ x: -4 }}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to home
        </motion.a>

        {/* Header */}
        <motion.h1 variants={itemVariants} className="text-2xl font-bold text-foreground tracking-tight mb-1">Welcome back</motion.h1>
        <motion.p variants={itemVariants} className="text-sm text-muted-foreground mb-8">Sign in to your ApplyLab account.</motion.p>

        {/* Role tabs */}
        <motion.div variants={itemVariants} className="flex gap-1 mb-6 bg-secondary rounded-lg p-1">
          {(["student", "staff"] as const).map((r) => (
            <motion.button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                role === r ? "bg-card text-foreground shadow-precision" : "text-muted-foreground"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <motion.div variants={itemVariants}>
            <label className="text-xs font-medium text-foreground mb-1.5 block">
              {role === "student" ? "University email" : "Staff email"}
            </label>
            <input
              type="email"
              placeholder={role === "student" ? "you@university.edu" : "name@university.edu"}
              className="w-full bg-secondary border border-border/50 rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all hover:border-primary/30"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="text-xs font-medium text-foreground mb-1.5 block">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-secondary border border-border/50 rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all pr-10 hover:border-primary/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          <motion.button
            variants={itemVariants}
            type="submit"
            className="w-full bg-foreground text-background font-medium py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign in
          </motion.button>
        </form>

        {/* Student-only links */}
        {role === "student" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 flex flex-col items-center gap-2"
          >
            <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Forgot password?
            </button>
            <p className="text-xs text-muted-foreground">
              Don't have an account?{" "}
              <button className="text-primary hover:underline font-medium">Sign up</button>
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, GraduationCap, Building2 } from "lucide-react";

const Login = () => {
  const [showPasswordStudent, setShowPasswordStudent] = useState(false);
  const [showPasswordStaff, setShowPasswordStaff] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Student side — white */}
      <div className="flex-1 bg-white flex items-center justify-center px-6 py-16 lg:py-0 relative">
        <div className="w-full max-w-sm">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </a>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Student login</h1>
          </div>
          <p className="text-sm text-gray-500 mb-8 pl-[46px]">Sign in with your university email.</p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-700 mb-1.5 block">University email</label>
              <input
                type="email"
                placeholder="you@university.edu"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-gray-700 mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  type={showPasswordStudent ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordStudent(!showPasswordStudent)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                >
                  {showPasswordStudent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gray-900 text-white font-medium py-2.5 rounded-lg text-sm hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign in
            </motion.button>
          </form>

          <div className="mt-6 flex flex-col items-center gap-2">
            <button className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
              Forgot password?
            </button>
            <p className="text-xs text-gray-500">
              Don't have an account?{" "}
              <button className="text-primary hover:underline font-medium">Sign up</button>
            </p>
          </div>
        </div>

        {/* Divider label — visible on large screens */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-gray-200 items-center justify-center">
          <span className="text-[10px] font-bold text-gray-500">or</span>
        </div>
      </div>

      {/* Mobile divider */}
      <div className="flex lg:hidden items-center gap-4 px-8">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs font-medium text-gray-400">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Staff side — dark */}
      <div className="flex-1 bg-background flex items-center justify-center px-6 py-16 lg:py-0">
        <div className="w-full max-w-sm">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </a>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">Staff login</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8 pl-[46px]">Access your institutional dashboard.</p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Staff email</label>
              <input
                type="email"
                placeholder="name@university.edu"
                className="w-full bg-secondary border border-border/50 rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all hover:border-primary/30"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  type={showPasswordStaff ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-secondary border border-border/50 rounded-lg px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all pr-10 hover:border-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordStaff(!showPasswordStaff)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPasswordStaff ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-foreground text-background font-medium py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign in
            </motion.button>
          </form>

          <div className="mt-6 flex flex-col items-center gap-2">
            <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

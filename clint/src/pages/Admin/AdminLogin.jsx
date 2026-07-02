import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ShieldCheck, Loader2, ArrowLeft, CheckCircle } from 'lucide-react';
import api from '../../services/api';

const AdminLogin = () => {
  // Authentication States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Forgot Password States
  const [isForgotMode, setIsForgotMode] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const navigate = useNavigate();

  // Hardcoded Credentials (The "Database")
  const ADMIN_EMAIL = 'dheerajkamboj25@gmail.com';
  const [adminPassword, setAdminPassword] = useState('admin123');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validation Logic
    setTimeout(() => {
      if (email.toLowerCase() === ADMIN_EMAIL.toLowerCase() && password === adminPassword) {
        localStorage.setItem('adminAuth', 'true');
        navigate('/admin/dashboard');
      } else {
        setError('Invalid email address or password. Please try again.');
        setIsLoading(false);
      }
    }, 1200);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');

    // 1. Empty Check
    if (!email || email.trim() === '') {
      setError('Please enter your email address.');
      return;
    }

    // 2. Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address format.');
      return;
    }

    // 3. Admin Match Check
    if (email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      setError('This email is not registered as an administrator.');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await api.post('/forgot-password', { email });
      if (response.data.status) {
        setResetEmailSent(true);
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to send recovery email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F5F9] relative overflow-hidden font-sans">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
      <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-[100px] -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-blue-300/20 rounded-full blur-[100px] -bottom-20 -right-20"></div>

      <div className="bg-white p-10 rounded-[2rem] shadow-[0_20px_60px_rgba(15,23,42,0.1)] z-10 w-full max-w-md border border-slate-100 transition-all duration-500">

        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4 shadow-sm">
            <ShieldCheck className="text-blue-600 w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {isForgotMode ? "Reset Password" : "Admin Portal"}
          </h2>
          <p className="text-slate-500 mt-2 text-sm font-medium">
            {isForgotMode
              ? "Enter your email to receive recovery instructions"
              : "Authorized Personnel Access Only"}
          </p>
        </div>

        {!resetEmailSent ? (
          <form onSubmit={isForgotMode ? handleForgotPassword : handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Admin Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-bold"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            {/* Password Field - Only show in Login Mode */}
            {!isForgotMode && (
              <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Security Password</label>
                  <button
                    type="button"
                    onClick={() => { setIsForgotMode(true); setError(''); }}
                    className="text-[11px] text-blue-600 hover:text-blue-800 font-black uppercase tracking-tighter transition-colors"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-bold"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-3 animate-shake">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0"></div>
                <p className="text-red-600 text-xs font-bold leading-tight">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="space-y-3 pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0F172A] hover:bg-blue-600 disabled:bg-slate-300 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 uppercase text-xs tracking-widest"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  isForgotMode ? "Send Reset Link" : "Secure Sign In"
                )}
              </button>

              {isForgotMode && (
                <button
                  type="button"
                  onClick={() => { setIsForgotMode(false); setError(''); }}
                  className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-slate-800 font-bold text-xs transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Login
                </button>
              )}
            </div>
          </form>
        ) : (
          /* Success Message for Reset */
          <div className="text-center py-4 animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Email Sent!</h3>
            <p className="text-slate-500 text-sm mt-3 px-4 font-medium">
              We've sent a recovery link to <span className="text-slate-900 font-bold">{email}</span>. Please check your inbox.
            </p>
            <button
              onClick={() => { setResetEmailSent(false); setIsForgotMode(false); }}
              className="mt-8 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-black py-4 rounded-2xl transition-all uppercase text-xs tracking-widest"
            >
              Back to Sign In
            </button>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-10 pt-6 border-t border-slate-50 text-center">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            © 2026 DIKOTA ENTERPRISE • V2.4.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
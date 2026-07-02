import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle, Award, FileCheck, Home, ChevronRight, Download } from 'lucide-react';

const Quality = () => {
  const certificates = [
    { src: "https://www.indosurgicals.com/images/iso-9001-2015-indosurgicals.jpg", title: "ISO 9001:2015", desc: "Quality Management" },
    { src: "https://www.indosurgicals.com/images/iso-13485-2016-indosurgicals.jpg", title: "ISO 13485:2016", desc: "Medical Devices" },
    { src: "https://www.indosurgicals.com/images/ce-certificate.jpg", title: "CE Certificate", desc: "EU Compliance" },
    { src: "https://www.indosurgicals.com/images/gmp-certificate.jpg", title: "GMP Certificate", desc: "Manufacturing" },
    { src: "https://www.indosurgicals.com/images/md-5-indosurgicals.jpg", title: "MD5 CDSCO", desc: "Govt License" },
    { src: "https://www.indosurgicals.com/images/barc-certificate-indosurgicals.jpg", title: "BARC Certificate", desc: "Radiation Safety" }
  ];

  return (
    <div className="w-full animate-in fade-in duration-700">
      
      {/* --- HEADER SECTION: No Padding/Width Limits --- */}
      <div className="w-full border-b border-slate-100 pb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100 shrink-0">
              <ShieldCheck className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                Quality <span className="text-blue-600">Policy</span>
              </h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">
                International Accreditations & Standards
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-widest bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
            <Link to="/" className="text-slate-400 hover:text-blue-600 transition-all flex items-center gap-2">
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={12} className="text-slate-300" />
            <span className="text-blue-600">Quality Standards</span>
          </nav>
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="mt-16 grid grid-cols-1 xl:grid-cols-12 gap-16">
        
        {/* LEFT: Text Content (8 Columns) */}
        <div className="xl:col-span-8 space-y-12">
          <div className="space-y-6">
            <p className="text-2xl font-bold text-slate-800 leading-tight">
              At <span className="text-blue-600 italic underline decoration-blue-100 underline-offset-8">IndoSurgicals</span>, quality is not a department—it is our core identity.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed">
              We are committed to delivering high-precision medical equipment that meet all statutory and regulatory requirements worldwide. Our certifications are a testament to our focus on patient safety.
            </p>
          </div>

          {/* Feature Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "ISO Certified", d: "Holding ISO 9001:2015 and 13485:2016 for medical device quality." },
              { t: "Global Compliance", d: "CE marking ensures our products meet European safety directives." },
              { t: "Govt Approved", d: "Licensed by CDSCO and BARC for radiation and medical safety." },
              { t: "Verified Models", d: "Legal Metrology approved Stadiometers and Infantometers." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:text-blue-600 transition-colors">
                  <CheckCircle size={20} />
                </div>
                <h4 className="text-slate-900 font-bold text-sm uppercase tracking-tight mb-2">{item.t}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Quick Summary / Notice (4 Columns) */}
        <div className="xl:col-span-4">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden sticky top-10">
            <div className="relative z-10">
              <Award className="text-blue-400 mb-6" size={42} />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Compliance Notice</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Our instruments undergo a 100% testing protocol, ensuring every tool meets international regulatory benchmarks for hygiene and precision.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase text-blue-300 bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20">
                  <FileCheck size={16} /> Digital Verification
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase text-blue-300 bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20">
                  <FileCheck size={16} /> Safe Handling Certified
                </div>
              </div>
            </div>
            {/* Background Blur Effect */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/20 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </div>

      {/* --- CERTIFICATE GALLERY: Full Width Grid --- */}
      <div className="mt-24 pb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-12 w-2 bg-blue-600 rounded-full"></div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Official Certificates</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="group">
              <div className="aspect-[3/4] bg-white border border-slate-200 rounded-3xl p-4 shadow-sm group-hover:shadow-2xl group-hover:border-blue-500 group-hover:-translate-y-2 transition-all duration-500 overflow-hidden flex items-center justify-center">
                <img 
                  src={cert.src} 
                  alt={cert.title} 
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="mt-4 px-2">
                <p className="text-xs font-black text-slate-900 uppercase tracking-tight truncate">{cert.title}</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 transition-all">
            <Download size={16} /> Request Full Compliance Dossier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quality;
import React from 'react';

const NoticeCard = () => {
  return (
    <section className="mt-16">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="bg-slate-900 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Security & Payment Verification</span>
          </div>
          <span className="bg-blue-600 text-[9px] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Official</span>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            
            {/* Left: Contact Verification */}
            <div className="space-y-4">
              <h3 className="text-slate-900 font-bold text-base uppercase tracking-tight flex items-center gap-2">
                Communication Channels
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To prevent fraudulent activities, please ensure all communications regarding orders and invoices originate only from our authorized channels:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-[13px] font-medium text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Email: <span className="text-blue-600 ml-1">info@indosurgicals.com</span>
                </li>
                <li className="flex items-center gap-3 text-[13px] font-medium text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  WhatsApp: <span className="text-slate-900 ml-1">+91-7505456099</span>
                </li>
              </ul>
            </div>

            {/* Right: Bank Details Block */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl">
              <h4 className="text-slate-900 font-bold text-[12px] uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                Bank Remittance Details
              </h4>
              <div className="space-y-3 font-mono text-[12px]">
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="text-slate-400">BENEFICIARY</span>
                  <span className="text-slate-900 font-bold text-right">INDOSURGICALS PVT LTD</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="text-slate-400">A/C NUMBER</span>
                  <span className="text-slate-900 font-bold">000705044179</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">IFSC CODE</span>
                  <span className="text-blue-700 font-bold">ICIC0001818</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Warning */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-[11px] text-red-500 font-medium italic">
              * Verification is advised before initiating any high-value transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeCard;
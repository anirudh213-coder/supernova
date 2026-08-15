import PillButton from '../../components/ui/PillButton';

export function AboutCtaBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-cyan-950/40 via-[#131B2E] to-slate-900 border border-cyan-500/20 p-8 sm:p-12 rounded-3xl">
      <div className="max-w-2xl">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Ready to Upgrade Your Signal Chain?
        </h3>
        <p className="text-slate-400 text-base">
          Explore technical specs, browse architecture documentation, or get in touch with our engineering team.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4 shrink-0">
        {/* Utilizing your expandable PillButton component */}
        <PillButton 
          href="#contact" 
          variant="primary" 
          label="Contact Engineering"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />
        <PillButton 
          href="#specs" 
          variant="secondary" 
          label="View Specs"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
        />
      </div>
    </div>
  );
}
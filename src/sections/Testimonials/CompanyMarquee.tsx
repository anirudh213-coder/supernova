import { realCompanies } from '../../data/testimonials';

export function CompanyMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-slate-800/80 bg-[#131B2E]/40 backdrop-blur-md rounded-2xl">
      <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#0B0F17] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0B0F17] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-continuous-left-to-right space-x-12 sm:space-x-16 items-center">
        {[...realCompanies, ...realCompanies, ...realCompanies].map((company, index) => (
          <div
            key={`${company.id}-${index}`}
            className="flex items-center text-slate-400 opacity-75 hover:text-cyan-400 hover:opacity-100 transition-colors duration-300 cursor-pointer"
            title={company.name}
          >
            {company.svg}
          </div>
        ))}
      </div>
    </div>
  );
}
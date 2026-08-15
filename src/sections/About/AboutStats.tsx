import { StatBlock } from '../../components/ui/StatBlock';

export function AboutStats() {
  return (
    <div className="bg-[#131B2E]/40 border border-slate-800/60 rounded-3xl p-8 sm:p-12 mb-20 backdrop-blur-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Utilizing your generic StatBlock for About metrics */}
        <StatBlock value="<0.1ms" label="Roundtrip Latency" valueColor="text-cyan-400" />
        <StatBlock value="132 dB" label="Dynamic Range" />
        <StatBlock value="192 kHz" label="32-Bit Float Audio" valueColor="text-cyan-400" />
        <StatBlock value="500+" label="Studios Equipped" />
      </div>
    </div>
  );
}
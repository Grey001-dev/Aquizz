import React from "react";
import {
  ArrowLeft,
  Share2,
  CheckCircle,
  Circle,
  UserPlus,
  Send,
  Users,
  Trophy,
  FileText,
  Settings,
} from "lucide-react";

const TournamentLobby = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/20 p-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button className="p-2 hover:bg-primary/10 rounded-full">
            <ArrowLeft size={20} />
          </button>

          <div className="text-center">
            <h1 className="text-lg font-bold">Cyber-High Invitational</h1>
            <p className="text-xs text-primary uppercase">
              Regional Qualifiers
            </p>
          </div>

          <button className="p-2 hover:bg-primary/10 rounded-full">
            <Share2 size={20} />
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-md mx-auto w-full p-4 space-y-6">

        {/* Countdown */}
        <section>
          <h2 className="text-sm text-slate-400 uppercase mb-2">
            Tournament Starts In
          </h2>

          <div className="flex gap-3">
            {["Days", "Hrs", "Min", "Sec"].map((label, i) => (
              <div key={i} className="flex-1 text-center bg-primary/10 border border-primary/20 rounded-xl py-4">
                <span className="text-2xl font-bold text-primary">02</span>
                <p className="text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-slate-800/20 border border-primary/10 rounded-2xl p-5 space-y-4">

          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold">Alpha Wolves</h2>
              <p className="text-sm text-slate-400">
                Competitive • Diamond Rank
              </p>
            </div>
            <div className="bg-primary px-3 py-1 rounded-full text-xs">
              4/5 Members
            </div>
          </div>

          {/* Members */}
          <div className="space-y-3">

            {[
              { name: "WolfLeader_01", status: "Ready", captain: true },
              { name: "PixelPioneer", status: "Ready" },
              { name: "ShadowStrike", status: "Not Ready" },
            ].map((member, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-slate-800/40 rounded-xl">
                <div>
                  <p className="font-bold text-sm">
                    {member.name}
                    {member.captain && (
                      <span className="text-primary text-xs ml-1">
                        (Captain)
                      </span>
                    )}
                  </p>
                  <p className="text-xs">{member.status}</p>
                </div>

                {member.status === "Ready" ? (
                  <CheckCircle size={18} className="text-emerald-400" />
                ) : (
                  <Circle size={18} className="text-slate-500" />
                )}
              </div>
            ))}

            {/* Current User */}
            <div className="flex justify-between items-center p-3 bg-slate-800/40 rounded-xl border border-primary">
              <p>You (AlphaStudent)</p>

              <button className="relative w-10 h-5 bg-primary rounded-full">
                <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span>
              </button>
            </div>

            {/* Invite */}
            <button className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-primary/20 rounded-xl p-3 text-primary">
              <UserPlus size={16} />
              Invite Teammate
            </button>

          </div>
        </section>

        {/* Chat */}
        <section>
          <div className="flex justify-between mb-2">
            <h2 className="text-sm text-slate-400 uppercase">
              Team Chat
            </h2>
            <button className="text-primary text-xs">
              Open Full Chat
            </button>
          </div>

          <div className="bg-slate-800/20 border border-primary/10 rounded-2xl p-4 h-32 relative">
            <p className="text-xs">
              <span className="text-primary font-bold">
                WolfLeader_01:
              </span>{" "}
              Let's practice mid-lane strategy.
            </p>

            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-slate-800 rounded-full px-3 py-1">
              <span className="text-xs text-slate-500">
                Send a message...
              </span>
              <Send size={16} className="text-primary" />
            </div>
          </div>
        </section>

      </main>

      {/* Bottom Nav */}
      <nav className="bg-background-light dark:bg-[#231b27] border-t border-primary/10 p-4">
        <div className="flex justify-around">

          <div className="flex flex-col items-center text-primary text-xs">
            <Users size={18} />
            Lobby
          </div>

          <div className="flex flex-col items-center text-slate-400 text-xs">
            <Trophy size={18} />
            Bracket
          </div>

          <div className="flex flex-col items-center text-slate-400 text-xs">
            <FileText size={18} />
            Rules
          </div>

          <div className="flex flex-col items-center text-slate-400 text-xs">
            <Settings size={18} />
            Settings
          </div>

        </div>
      </nav>
    </div>
  );
};

export default TournamentLobby;
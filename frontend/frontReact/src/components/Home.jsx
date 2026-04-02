import { Gamepad2, Trophy, Users, Lock, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UsernameContext } from "./UsernameContext";
import { useContext } from "react";

const Home = () => {
  const navigate = useNavigate();
  const {username}=useContext(UsernameContext)

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden p-4">

        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div
            className="text-primary cursor-pointer"
            onClick={() => navigate("/settings")}
          >
            <Settings size={26} />
          </div>
        </div>

        {/* Hero */}
        <div className="pb-6">
          <h2 className="text-[28px] font-bold leading-tight">
            Welcome {username}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Continue your preparation and compete with others.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {/* Practice */}
          <div className="rounded-2xl bg-white dark:bg-primary/5 border border-primary/20 p-5 hover:bg-primary/5 transition cursor-pointer"
               onClick={() => navigate("/practice")}
          >
            <Gamepad2 className="text-primary mb-3" size={32} />
            <h3 className="font-bold text-lg">Practice</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Improve your skills with guided sessions
            </p>
          </div>

          {/* Tournaments */}
          <div className="rounded-2xl bg-white dark:bg-primary/5 border border-primary/20 p-5 hover:bg-primary/5 transition cursor-pointer"
               onClick={() => navigate("/tournaments")}
          >
            <Trophy className="text-primary mb-3" size={32} />
            <h3 className="font-bold text-lg">Tournaments</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Compete and climb the leaderboard
            </p>
          </div>

          {/* Live Rooms */}
          <div className="rounded-2xl bg-white dark:bg-primary/5 border border-primary/20 p-5 hover:bg-primary/5 transition cursor-pointer"
               onClick={() => navigate("/live")}
          >
            <Users className="text-primary mb-3" size={32} />
            <h3 className="font-bold text-lg">Live Rooms</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Join real-time quiz battles
            </p>
          </div>

          {/* Private Rooms */}
          <div className="rounded-2xl bg-white dark:bg-primary/5 border border-primary/20 p-5 hover:bg-primary/5 transition cursor-pointer"
               onClick={() => navigate("/private")}
          >
            <Lock className="text-primary mb-3" size={32} />
            <h3 className="font-bold text-lg">Private Rooms</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Play with friends privately
            </p>
          </div>

        </div>

        {/* Bottom Settings Card */}
        <div className="mt-8 rounded-2xl bg-white dark:bg-primary/5 border border-primary/20 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="text-primary" size={24} />
            <div>
              <h3 className="font-bold">Settings</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Manage your account preferences
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/settings")}
            className="px-4 py-2 rounded-lg bg-primary text-white font-semibold"
          >
            Open
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;
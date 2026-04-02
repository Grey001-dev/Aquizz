import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import Practice from "./Practice";
import { UsernameContext } from "./UsernameContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUsername}=useContext(UsernameContext)
  const navigate=useNavigate()
  let data;
  
  const loginUser = async () => {
    console.log(email, password);
    const res = await fetch("https://aquizz.onrender.com/api/aquizz/user/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({
        email, password
      })
    })

    data = await res.json();
    if(res.ok){
      console.log(data);
      const FetchedUsername=data.user.username
      setUsername(FetchedUsername)
      localStorage.setItem("username",FetchedUsername)
      navigate("/home")
    } else{
      alert(data.message);
    }
  };
  
  if(data){
    console.log(data)
  }
  return (
    
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      
      
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

        {/* Header */}
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="text-primary flex size-12 items-center cursor-pointer">
            <span className="material-symbols-outlined text-3xl">
             <button>..</button>
            </span>
          </div>
          <h2 className="text-lg font-bold flex-1">
            Login to your account
          </h2>
        </div>

        {/* Hero Section */}
        <div className="px-4 pt-6 pb-3">
          <h1 className="text-[32px] font-bold leading-tight">
            Level Up Your Prep
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Join thousands of students smashing their JAMB goals.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 px-4 py-3">

          {/* Google Button */}
          <button className="flex items-center justify-center gap-3 w-full h-14 rounded-xl bg-white dark:bg-primary/10 border border-primary/20 hover:bg-primary/5 transition-colors">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_6IhH76-hwDZm2UhJwfKkcoeR5dIw7NIcBv0ol2wp-66ai0Ol8gITzgDQlO3bVksOXBhTy9mXzEpKHGPH_oY9wRiueW74rE7VH3NJcSEhdcKSNMGwdcygxUUv6_cKzq98k105WtaK_LRHFJ6gnWulz97mZY5r7TjcWeF2iiGwJ9S739vILyq-aV7ZFnBIkLLcnhzWLmuwySWAQtaQNwyPFo23ZXt1eX_56ZhI5Dq2IcQSRFBWwFRhOJanNdchFj8Tw6_g6hAPeP0"
              className="w-5 h-5"
              alt="Google"
            />
            <span className="font-bold">Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-primary/20"></div>
            <span className="text-primary/40 text-xs font-bold uppercase tracking-widest">
              or
            </span>
            <div className="h-px flex-1 bg-primary/20"></div>
          </div>

          {/* Email */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-bold text-primary/80 ml-1">
              Email or Phone
            </span>
            <input
              type="text"
              placeholder="student@jamb.com"
              className="w-full rounded-xl bg-white dark:bg-primary/5 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* Password */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-bold text-primary/80 ml-1">
              Create password
            </span>
            <input
              type="password"
              placeholder="******"
              className="w-full rounded-xl bg-white dark:bg-primary/5 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {/* Button */}
          <button
            onClick={loginUser}
            className="flex w-full items-center justify-center rounded-xl h-14 bg-primary text-white font-bold shadow-lg shadow-primary/20 mt-2"
          >
            <span>Kick off where you stopped</span>
            <span className="material-symbols-outlined ml-2">
              rocket_launch
            </span>
          </button>

          {/* Footer */}
          <p className="flex w-full justify-center">
            Do not have an account?
            <span className="ml-1 text-primary cursor-pointer" onClick={()=>navigate("/signup")}>
              Signup
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
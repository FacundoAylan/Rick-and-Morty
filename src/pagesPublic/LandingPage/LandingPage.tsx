import { useNavigate } from "react-router"
import { useEffect } from "react"

export const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section 
      className="w-full h-screen bg-black flex flex-col justify-center items-center font-new"
    >
        <h1 className="text-9xl text-green-400 animate-bounce-glow ">
          Rick and Morty
        </h1>

        <p className="flex flex-col items-center text-4xl text-green-400 mt-8 animate-bounce-glow">
          Created by <span className="font-bold">Facundo Aylan</span>
        </p>

      <img
        className=" fixed bottom-0 h-[55%] object-cover animate-bounce-glow"
        src="/image/portal.webp"
        alt="Protal gif"
      />
    </section>
  )
}

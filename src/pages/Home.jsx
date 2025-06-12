import Lanyard from "../3rdparty-styles/Lanyard";
import ScrambledText from "../3rdparty-styles/IntroText";

function Home() {
  return (
    <div className="flex flex-col min-h-screen md:block relative">
      {/* Lanyard: block on mobile, absolute overlay on md+ */}
      <div className="hidden md:block md:absolute md:top-0 md:left-0 md:w-full md:h-full overflow-hidden z-10">
        <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} />
      </div>

      {/* Content: centered on mobile, left on md+ */}
      <div className="relative flex flex-col justify-center items-center text-center min-h-[calc(100vh-16rem)] w-full px-4 md:items-start md:text-start md:min-h-screen md:justify-center">
        <h1 className="font-bold text-[2.5rem] sm:text-[3rem] md:text-[4rem] text-white">
          Angel Kyle Alaba
        </h1>
        <p className="text-white font-medium text-xl sm:text-2xl md:text-[3rem]">
          Aspiring{" "}
          <span className="font-bold text-violet-600">Full Stack Developer</span>
        </p>
      </div>
    </div>
  );
}

export default Home;

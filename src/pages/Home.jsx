import Lanyard from "../3rdparty-styles/Lanyard";
import ScrambledText from "../3rdparty-styles/IntroText";

function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} />
      </div>

      <div className="relative p-20 flex justify-start items-center text-start h-[50rem]">
        <ScrambledText
          className="scrambled-text-demo"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".;,;:!@#$%^&*()_+[]{}|\\/?><`~"
        >
          <h1 className="font-bold text-[70px]">Angel Kyle Alaba</h1>
          <p className=" font-medium">Aspiring <span className=" text-violet-600">Full Stack Developer</span></p>
        </ScrambledText>
      </div>
    </div>
  );
}

export default Home;

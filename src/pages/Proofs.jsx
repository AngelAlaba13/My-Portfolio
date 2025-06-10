import CountUp from "../3rdparty-styles/Counting";

function Proofs() {
    return (
        <>
            <div className="relative flex h-screen ">
                
                <div className=" h-min w-screen flex flex-col justify-center items-center">
                    <p>Cathered up to</p>
                    <CountUp
                        from={0}
                        to={42}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-[100px] font-bold text-white "
                    />
                    {/* test */}
                    {/* why wont work */}
                <p>programming projects</p>
                </div>
            </div>
        </>
    );
}

export default Proofs;
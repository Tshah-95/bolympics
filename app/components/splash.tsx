import { CheckBadge } from "./check-badge";

export const SplashSection = ({
  stepCount,
  header,
  featureList,
}: {
  stepCount: string;
  header: string;
  featureList: string[];
}) => {
  return (
    <>
      <div className="flex animate-slide-down-fade-2 justify-center w-full text-5xl sm:text-6xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 from-65%">
        <h1>step {stepCount}</h1>
      </div>
      <div className="flex flex-col md:flex-row items-stretch animate-slide-down-fade-3 max-w-5xl w-full h-[100vh] 2xs:h-[75vh] md:h-[50vh] justify-between font-mono text-sm rounded-lg bg-slate-700 shadow-md-white">
        <div className="flex flex-col items-center flex-1">
          <div
            className="flex justify-center items-center flex-1 data-[step=one]:bg-blue-300 data-[step=two]:bg-red-300 data-[step=three]:bg-green-300 w-full rounded-tr-lg rounded-tl-lg md:rounded-tr-none"
            data-step={stepCount}
          >
            <h2 className="text-3xl font-bold text-slate-700 text-center items-center">
              {header}
            </h2>
          </div>
          <div className="flex justify-center items-center text-slate-200 flex-1">
            <div className="w-fit flex flex-col gap-3 justify-center items-start">
              {featureList.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 items-center data-[step=one]:text-blue-400 data-[step=two]:text-red-400 data-[step=three]:text-green-400"
                  data-step={stepCount}
                >
                  <CheckBadge />
                  <p className="text-white flex items-center">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-1 bg-slate-600 rounded-br-lg rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg"></div>
      </div>
    </>
  );
};

export const SplashCard = () => {};

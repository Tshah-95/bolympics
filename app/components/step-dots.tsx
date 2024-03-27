import Link from "next/link";

const steps = [
  { name: "Invite Guests", href: "#", status: "complete", number: 1 },
  { name: "Build Event", href: "#", status: "current", number: 2 },
  { name: "Organize Day", href: "#", status: "complete", number: 3 },
];

export default function StepDots({}) {
  const currentStep = steps.find((step) => step.status === "current");
  return (
    <nav
      className="flex items-center justify-center text-white bg-slate-500 px-5 py-3 rounded-md"
      aria-label="Progress"
    >
      <p className="text-sm font-medium select-none">
        {`Step ${currentStep?.number} - `}
        {currentStep?.name}
      </p>
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {steps.map((step) => (
          <li key={step.name}>
            {step.status === "complete" ? (
              <Link
                href={step.href}
                className="block h-3 w-3 rounded-full bg-red-300 hover:bg-white"
              >
                <span className="sr-only">{step.name}</span>
              </Link>
            ) : step.status === "current" ? (
              <Link
                href={step.href}
                className="relative flex items-center justify-center"
                aria-current="step"
              >
                <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
                  <span className="h-full w-full rounded-full bg-white" />
                </span>
                <span
                  className="relative block h-3 w-3 rounded-full bg-red-300 hover:bg-white"
                  aria-hidden="true"
                />
                <span className="sr-only">{step.name}</span>
              </Link>
            ) : (
              <Link
                href={step.href}
                className="block h-2.5 w-2.5 rounded-full bg-slate-700 hover:bg-slate-400"
              >
                <span className="sr-only">{step.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

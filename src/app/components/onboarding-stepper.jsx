import React from "react";

const OnboardingStepper = ({ currentPage }) => {
  return (
    <nav aria-label="Onboarding Progress">
      <div
        className="flex justify-center items-center"
        data-testid="onboarding-stepper"
      >
        <ol className="flex space-x-4">
          <li>
            <div className="flex space-x-4">
              <div
                className={`w-4 h-4 rounded-full ${
                  currentPage === 1 ? "bg-green-400" : "bg-gray-300"
                }`}
                aria-current={currentPage === 1 ? "step" : undefined}
                // 🟢
                role="presentation"
                aria-label="Step 1"
              ></div>
              <div
                className={`w-4 h-4 rounded-full ${
                  currentPage === 2 ? "bg-green-400" : "bg-gray-300"
                }`}
                aria-current={currentPage === 2 ? "step" : undefined}
                // 🟢
                role="presentation"
                aria-label="Step 2"
              ></div>
            </div>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default OnboardingStepper;

// Accessibility improvements:
// Wrapped the stepper in a nav element with aria-label="Onboarding Progress" to signify that it's a navigation component that indicates the progress of the onboarding process.
// Used an ordered list (<ol>) to represent the steps in a semantic and structured manner.
// Added aria-current="step" to the current step to indicate the current progress to screen reader users.
// Added role="presentation" and aria-label to each step to provide a meaningful label, while also indicating that these are presentational elements and not interactive buttons.

const OnboardingStepper = ({ currentPage }) => {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="flex space-x-4">
        <div
          className={`w-4 h-4 rounded-full ${currentPage === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
        ></div>
        <div
          className={`w-4 h-4 rounded-full ${currentPage === 2 ? 'bg-blue-500' : 'bg-gray-300'}`}
        ></div>
      </div>
    </div>
  );
};

export default OnboardingStepper;
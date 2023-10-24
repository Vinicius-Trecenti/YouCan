import React from 'react';

interface CustomProgressBarProps {
  progress: number;
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({ progress }) => {
  const barStyles = {
    width: `${progress}%`,
  };

  return (
    <div className="custom-progress-bar">
      <div className="bar" style={barStyles}>
        {progress}%
      </div>
    </div>
  );
};

export default CustomProgressBar;

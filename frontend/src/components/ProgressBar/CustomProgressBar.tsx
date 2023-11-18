interface CustomProgressBarProps {
	progress: number;
}

export default function CustomProgressBar({ progress }: CustomProgressBarProps) {
	const barStyles = {
		width: `${progress}%`,
	};

	return (
		<div className="custom-progress-bar">
			<div className="bar" style={barStyles}>
				{progress}%
			</div>
		</div>
	)
}
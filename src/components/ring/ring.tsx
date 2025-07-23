import { cx } from "class-variance-authority";
import type { RingProps } from "@/types";

const Ring = ({ progress, className, thickness = "medium" }: RingProps) => {
	const diameter = 20;
	const radius = diameter / 3;
	const circumference = 2 * Math.PI * radius;
	const strokeDasharray = circumference;
	const strokeDashoffset = circumference - progress * circumference;
	const progressPercentage = Math.round(progress * 100);

	return (
		<svg
			width={diameter}
			height={diameter}
			className={cx("transform -rotate-90", className)}
			viewBox={`0 0 ${diameter} ${diameter}`}
			role="progressbar"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={progressPercentage}
			aria-label={`Progress: ${progressPercentage}%`}
		>
			<title>Progress: {progressPercentage}%</title>
			<circle
				cx={diameter / 2}
				cy={diameter / 2}
				r={radius}
				stroke="currentColor"
				strokeWidth={thickness === "thin" ? 2 : thickness === "medium" ? 4 : 6}
				fill="none"
				opacity="0.2"
				className="transition-opacity duration-200"
			/>
			<circle
				cx={diameter / 2}   
				cy={diameter / 2}
				r={radius}
				stroke="currentColor"
				strokeWidth={thickness === "thin" ? 2 : thickness === "medium" ? 4 : 6}
				fill="none"
				strokeLinecap="round"
				strokeDasharray={strokeDasharray}
				strokeDashoffset={strokeDashoffset}
				className="transition-all duration-500 ease-out-quint will-change-transform"
				style={{
					transitionTimingFunction: "cubic-bezier(.23, 1, .32, 1)"
				}}
			/>
		</svg>
	);
};

export default Ring;

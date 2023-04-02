
export enum LogoSizing {
	small = "small",
	medium = "medium",
	big = "big",
}

export type LogoProps = {
	sizing?: LogoSizing
}

function Logo({ sizing = LogoSizing.medium }: LogoProps) {
	return (

		<>
			{sizing === LogoSizing.small ?
				<>
					<div className="text-sm md:text-sm text-white text-4xl font-bold">
						AURION<span className="text-orange-500">CRUD</span>
					</div>
				</>
				: sizing === LogoSizing.medium ?
					<>
						<div className="text-3xl md:text-3xl text-white text-4xl font-bold">
							AURION<span className="text-orange-500">CRUD</span>
						</div>
					</>
					:
					<>
						<div className="text-4xl md:text-4xl text-white text-4xl font-bold">
							AURION<span className="text-orange-500">CRUD</span>
						</div>
					</>
			}
		</>
	);
}

export default Logo;
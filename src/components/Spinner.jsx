const Spinner = ({ className }) => (
	<div className={`spinner-container relative w-full h-full min-h-[100px] text-center text-[32px] ${className}`}>
		<div className="spinner flex justify-between items-center gap-2 w-[200px] absolute bottom-1/2 right-1/2 translate-x-[50%] translate-y-[50%]">
			<div className="spinner__bracket text-white">[</div>
			<div className="spinner__inner relative text-dark flex-grow h-[28px] text-[20px] font-bold">
				<span className="relative">%</span>
			</div>
			<div className="spinner__bracket text-white">]</div>
		</div>
	</div>
)


export default Spinner;

const Spinner = ({ className }) => (
	<div className={`spinner-container relative w-full h-full min-h-[100px] text-center text-[32px] ${className}`}>
		<div className="spinner flex justify-between items-center w-[200px] absolute bottom-1/2 right-1/2 translate-x-[50%] translate-y-[50%]">
			<div className="spinner__bracket text-white mr-2">[</div>
			<div className="spinner__inner relative text-dark flex-grow h-[28px] text-[20px] font-regular">
				<span className="relative">%</span>
			</div>
			<div className="spinner__bracket text-white ml-2">]</div>
		</div>
	</div>
)


export default Spinner;

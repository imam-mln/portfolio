export default function ServiceCard({title, desc, icon}) {
	return (
		<div className='card w-full h-full bg-white shadow-xl w-full text-black max-w-xs py-5 md:py-10'>
			<div className='m-auto pb-3 md:pb-7'>
				<div className='m-auto p-3 md:p-5 rounded-full bg-indigo-600'>{icon}</div>
			</div>
			<div className='card-body py-1 px-3'>
				<h2 className='card-title text-xs md:text-xl m-auto font-extrabold'>{title}</h2>
				<h2 className='text-center text-gray-400 text-[9px] md:text-sm'>{desc}</h2>
			</div>
		</div>
	)
}

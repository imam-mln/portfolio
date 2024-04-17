export default function ProjectCard({title, desc, img, link}) {
	return (
		<div className='m-auto card card-compact max-w-xs shadow-xl group'>
			{/* IMAGE PROJECT */}
			<figure className='relative h-auto'>
				<div className='absolute h-full w-full bg-black bg-opacity-50 invisible group-hover:visible'></div>
				<button className='hidden text-black border-none hover:text-white bg-white btn absolute group-hover:block'>Details</button>
				<img className='max-w-xs' src={img} alt={title} />
			</figure>
			{/* DESCRIPTION PROJECT */}
			<div className='card-body flex-row px-10 text-black max-w-sm m-auto'>
				<div className='max-w-52'>
					<h2 className='card-title'>
						<span className='text-sm truncate '>{title}</span>
					</h2>
					<p className='text-xs text-gray-400 truncate '>{desc}</p>
				</div>
				<div className='card-actions'>
					<a href={link} target='_blank'>
						<button className='btn-sm text-white bg-indigo-600 hover:bg-black border-none rounded-full'>Open</button>
					</a>
				</div>
			</div>
		</div>
	)
}

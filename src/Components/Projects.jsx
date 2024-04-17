import {useState, useEffect} from "react"
import Datas from "../Data/Projects.js"

export default function Projects({datas = Datas, itr}) {
	const idx = `${itr != undefined ? itr : datas.length}`
	// console.log(datas)
	return (
		<div className='grid md:grid-cols-3 gap-y-10'>
			{datas.slice(0, idx).map((el) => {
				return (
					<div key={el.title} className='m-auto card card-compact md:max-w-xs shadow-lg group'>
						{/* IMAGE PROJECT */}
						<figure className='relative h-auto'>
							<div className='absolute h-full w-full bg-black bg-opacity-50 invisible group-hover:visible'></div>
							<button className='hidden text-black border-none hover:text-white bg-white btn absolute group-hover:block'>Details</button>
							<img className='max-w-xs' src={el.img} alt={el.title} />
						</figure>
						{/* DESCRIPTION PROJECT */}
						<div className='card-body flex-row px-10 text-black max-w-sm m-auto'>
							<div className='max-w-52'>
								<h2 className='card-title'>
									<span className='text-sm truncate '>{el.title}</span>
								</h2>
								<p className='text-xs text-gray-400 truncate '>{el.desc}</p>
							</div>
							<div className='card-actions'>
								<a href={el.link} target='_blank'>
									<button className='btn-sm text-white bg-indigo-600 hover:bg-black border-none rounded-full'>Open</button>
								</a>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

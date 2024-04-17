export default function SkillToolsCard({title, lvl, icon}) {
	var el = []
	for (let i = 1; i < 6; i++) {
		i <= lvl ? el.push(<div key={`${title}${i}`} className='w-10 h-10 max-w-[6px] max-h-[6px] md:max-w-[10px] md:max-h-[10px] rounded-full bg-white'></div>) : el.push(<div key={`${title}${i}`} className='w-10 h-10 max-w-[6px] md:max-w-[10px] md:max-h-[10px] rounded-full bg-white bg-opacity-35 max-h-[6px]'></div>)
	}

	return (
		<div key={title} className='m-auto text-white tracking-wide card flex-row shadow-lg md:rounded-full rounded-l-full rounded-br-full border-t-2 bg-indigo-600 '>
			<div className='max-w-16 md:max-w-52 bg-white border-indigo-600 border-4 rounded-full p-1 md:p-3'>{icon}</div>

			<div className='md:pl-5 my-auto gap-x-10'>
				<h1 className='text-[9px] md:text-sm'>{title}</h1>
				<div className='flex gap-x-[2px] md:gap-x-1'>{el}</div>
			</div>
		</div>
	)
}

export default function CardItem({card: {title, image, description}}) {
	return (
		<div className="bg-white flex flex-col gap-y-2 text-center items-center rounded-lg py-10">
			<img src={image} className="w-40 h-40 mb-4"/>
			<h3 className="text-lg font-semibold text-brand-color px-8 leading-6">{title}</h3>
			<p className="text-sm text-gray-600 px-4">
				{description}
			</p>
		</div>
	)
}

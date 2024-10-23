export default function Category({ category: {id, title, image} }) {
    return (
        <a href="#" className="flex flex-col group items-center gap-y-2 text-center py-4 transition hover:bg-purple-100 rounded">
            <img src={image} alt={title} className="w-12 h-12 rounded-lg border border-gray-200" />
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color tracking-tight tracking-tight">{title}</span>
        </a>
    )
}
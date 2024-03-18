const Heading =({label, headerDescriptionLabel}) =>{
    return <div className="text-center p-4">
        <div className="text-2xl font-bold mb-4">{label}</div>
        <div className="text-slate-500 ">{headerDescriptionLabel}</div>
    </div>
}
export default Heading
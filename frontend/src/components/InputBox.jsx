const InputBox =({label, placeholder}) =>{
    return <div>
        <input className="w-full p-2 rounded-xl bg-fuchsia-200 placeholder-slate-500 pl-4 my-4 " type="text" name={label} id="" placeholder={placeholder}/>
    </div>
}

export default InputBox
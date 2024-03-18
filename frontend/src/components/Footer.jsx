import { NavLink } from "react-router-dom"

const Footer =({label, footerLink, to})=>{
    return <div >
        <div className="m-4 pt-2 text-slate-500">{label} <NavLink to={to} className="underline underline-offset-2 text-fuchsia-700" >{footerLink}</NavLink></div>
    </div>
}

export default Footer
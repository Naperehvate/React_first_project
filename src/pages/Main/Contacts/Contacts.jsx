import {useState} from "react";

const Contacts = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");

    return (
        <div className="container">
            <h2 className="text-center mb-5">Contacts page</h2>

            <div className="form-group">
                <label className="form-label">Имя: </label>
                <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="form-group">
                <label className="form-label">Почта: </label>
                <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>

            <p className="mt-5">Имя: {name}</p>
            <p>Почта: {email}</p>
        </div>
    )
}

export default Contacts;
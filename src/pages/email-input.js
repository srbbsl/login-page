import { useState } from "react";


export default function EmailInput () {
    const [email, setEmail] = useState();

    const handleChangeEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    return (
        <div>
            <h1>Email Input</h1>
            <form>
                <label>
                    Email:
                    <input 
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                        placeholder="user@example.com"
                    />
                </label>
                <button>Next</button>
            </form>
        </div>
    );
}
import { useState } from "react";

const StateFullForm = () => {

    const [email.setEmail] = useState(null);
    const handleSubmit = e => {

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border-2 border-solid border-black " type="text" name="name" placeholder="Your Name" />
                <br />
                <input className="border-2 border-solid border-black " type="email" name="email" placeholder="Your email" />
                <br />
                <input className="border-2 border-solid border-black " type="password" name="password" placeholder="Password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default StateFullForm;
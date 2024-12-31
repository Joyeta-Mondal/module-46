const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('form submitted')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border-2 border-solid border-black " type="text" name="name" placeholder="Your Name" />
                <br />
                <input className="border-2 border-solid border-black " type="email" name="email" placeholder="Your email" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;

const Clock = ({ locale }) => {
    const handleClick = (e) => {
        e.preventDefault()
        console.log('clicked')
        return false;
    }
    return (
        <div>
            <h1 className="heading">
                <span className="text">{new Date().toLocaleTimeString(locale)}</span>
            </h1>
            <button onClick={(e) => handleClick(e)}>Toha islam</button>
        </div >
    );
};

export default Clock;
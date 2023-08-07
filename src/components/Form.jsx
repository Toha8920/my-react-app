import { useState } from "react";

const Form = () => {
    const [form, setForm] = useState('Toha');
    const [text, setText] = useState('Javascript is awesome');
    const [library, setLibrary] = useState('React');
    const [isAwesome, setIsAwesome] = useState(true)

    const handleChange = (e) => {
        if (e.target.type === 'text') {
            setForm(e.target.value);
            console.log(e.target.value)
        }
        else if (e.target.type === 'textarea') {
            setText(e.target.value)
            console.log(e.target.value)
        }
        else if (e.target.type === 'select-one') {
            setLibrary(e.target.value);
            console.log(e.target.value)
        }
        else if (e.target.type === 'checkbox') {
            setIsAwesome(e.target.value);
            console.log(e.target.value)
        }

        else {
            console.log('nothing is here')
        }
    }


    return (
        <div>
            <form>
                <input type="text" placeholder="Enter name" value={form} onChange={handleChange} />
                <br />
                <br />
                <textarea name="text" value={text} onChange={handleChange}>
                </textarea>
                <br />
                <br />
                <select name="" id="" onChange={handleChange} value={library}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
                <br />
                <br />
                <input type="checkBox" value={isAwesome} onChange={handleChange} />
            </form>
        </div>
    );
};

export default Form;
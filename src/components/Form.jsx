import { useState } from "react";

const Form = () => {
    const [form, setForm] = useState('Toha');
    const [text, setText] = useState('Javascript is awesome');
    const [library, setLibrary] = useState('React');
    const [isAwesome, setIsAwesome] = useState(false);

    const state = {
        form,
        text,
        library,
        isAwesome
    }


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
            setIsAwesome(e.target.checked);
            console.log(e.target.checked)
        }

        else {
            console.log('nothing is here')
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(state)
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
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
                <input type="checkBox" checked={isAwesome} onChange={handleChange} />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;
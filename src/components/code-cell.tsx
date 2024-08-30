import { useState } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';

const CodeCell = () => {
    const [code, setCode] = useState('');
    const [input, setInput] = useState('');

    const onClick = async () => {
        const output = await bundle(input);

        setCode(output);
    };

    return (
        <>
            <CodeEditor initialValue="const a = 1;" onChange={(value) => setInput(value)} />
            {/* <textarea
                style={{ width: '500px', height: '200px' }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></textarea> */}
            <div>
                <button onClick={onClick}>Submit</button>
            </div>
            <Preview code={code} />
        </>
    );
};

export default CodeCell;

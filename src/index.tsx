import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { createRoot } from 'react-dom/client';
import { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm'; // Transpiling JSX code with Babel
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';
import CodeEditor from './components/code-editor';

const App = () => {
    const ref = useRef<any>(); // Stores the esbuild service instance
    const iframe = useRef<any>();
    const [input, setInput] = useState('');

    // Transpiling JSX code with Babel
    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
        });
    };

    // Call the 'startService()' function on the first render of the component
    useEffect(() => {
        startService();
    }, []);

    const onClick = async () => {
        if (!ref.current) {
            return;
        }

        iframe.current.srcdoc = html;

        const result = await ref.current.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [unpkgPathPlugin(), fetchPlugin(input)],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window',
            },
        });

        // setCode(result.outputFiles[0].text);
        iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*');
    };

    const html = `
        <html>
            <head></head>
            <body>
                <div id='root'></div>
                <script>
                    window.addEventListener('message', (event) => {
                        try {
                            eval(event.data);
                        } catch (err) {
                            const root = document.querySelector('#root');
                            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>'
                            console.error(error);
                        }
                    }, false);
                </script>
            </body>
        </html>
    `;

    return (
        <>
            <CodeEditor initialValue="" onChange={(value) => setInput(value)} />
            <textarea
                style={{ width: '500px', height: '200px' }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></textarea>
            <div>
                <button onClick={onClick}>Submit</button>
            </div>
            <iframe ref={iframe} sandbox="allow-scripts" srcDoc={html} />
        </>
    );
};

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(<App />);

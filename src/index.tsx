import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
// import CodeCell from './components/code-cell/code-cell';
import TextEditor from './components/text-editor/text-editor';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                {/* <CodeCell /> */}
                <TextEditor />
            </div>
        </Provider>
    );
};

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

root.render(<App />);

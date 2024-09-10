import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list/cell-list';
// import CodeCell from './components/code-cell/code-cell';
// import TextEditor from './components/text-editor/text-editor';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                {/* <CodeCell /> */}
                {/* <TextEditor /> */}
                <CellList />
            </div>
        </Provider>
    );
};

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

root.render(<App />);

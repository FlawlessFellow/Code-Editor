import './action-bar.css';
import { useActions } from '../../hooks/use-actions';
import ActionBarButton from '../action-bar-button/action-bar-button';

interface ActionBarProps {
    id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions();

    return (
        <div className="action-bar">
            <ActionBarButton onClick={() => moveCell(id, 'up')} icon="fas fa-arrow-up" />
            <ActionBarButton onClick={() => moveCell(id, 'down')} icon="fas fa-arrow-down" />
            <ActionBarButton onClick={() => deleteCell(id)} icon="fas fa-times" />
        </div>
    );
};

export default ActionBar;

import { Fragment } from 'react';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import CellListItem from '../cell-list-item/cell-list-item';
import AddCell from '../add-cell/add-cell';

const CellList: React.FC = () => {
    const cells = useTypedSelector(({ cells: { order, data } }) => order.map((id) => data[id]));

    const renderedCells = cells.map((cell) => (
        <Fragment key={cell.id}>
            <CellListItem key={cell.id} cell={cell}></CellListItem>
            <AddCell previousCellId={cell.id} />
        </Fragment>
    ));

    return (
        <div>
            <AddCell forceVisible={cells.length === 0} previousCellId={null} />
            {renderedCells}
        </div>
    );
};

export default CellList;

import { useState, useEffect } from "react";
import { columnsFromBackend } from '../KanbanData';

const useKanban = () => {
    const [kdata, setKdata]  = useState(columnsFromBackend);
    return {kdata, setKdata};
}

export default useKanban;
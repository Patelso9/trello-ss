'use client'

import { useBoardStore } from '@/store/BoardStore';
import React, { useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
    const getBoard = useBoardStore((state) => state.getBoard)

    useEffect(()=>{
      getBoard();
    }, [getBoard]);

  return (
    <h1>Hello</h1>
//   <DragDropContext>

//     <Droppable droppableId='board' direction='horizontal' type='column'>
//         {(provided) => (
//             <div>
//                 {/* {Rendering all columns} */}
//             </div>
//         )}

//     </Droppable>

//         <div>Board</div>
//     </DragDropContext>
  )
}

export default Board
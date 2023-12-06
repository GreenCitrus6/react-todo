import { useState } from 'react';
import DeleteItem from './buttons/deleteitem.js'

export default function ToDoItem({ toDoInnerText, taskList, itemKey, deleteTask}) {
    let [completionStatus, setCompletionStatus] = useState(false);
    function handleToggleComplete() {
        if (completionStatus) {
            setCompletionStatus(false);
        } else {
            setCompletionStatus(true);
        }
        
        taskList.find(item => item.key === itemKey).completed = !taskList.find(item => item.key === itemKey).completed;
    }
    
    return(
        <li className="m-2 flex flex-row justify-between">
            <div>
            <input type="checkbox" className="h-4 w-4" onClick={() => {
            handleToggleComplete();}} /> <span className={completionStatus ? 'text-gray-400 text-lg align-middle line-through' : 'text-gray-700 text-lg align-middle'}>{toDoInnerText}</span>
            </div>
             <DeleteItem taskList={taskList} itemKey={itemKey} deleteTask={deleteTask} /></li>
    );
}
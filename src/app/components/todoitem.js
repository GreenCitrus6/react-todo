import { useState } from 'react';
import DeleteItem from './buttons/deleteitem.js'

export const ItemCheckbox = ( {handleToggleComplete, completionStatus} ) => {
    const [isChecked, setIsChecked] = (completionStatus ? useState(true) : useState(false));

    function  checkHandler(){
        setIsChecked(!isChecked);
        handleToggleComplete();
    }

    return(
        <input type="checkbox" className="h-4 w-4" defaultChecked={isChecked} onClick={() => {
            checkHandler();}} />
    );
}

export default function ToDoItem({ toDoInnerText, taskList, setTaskList, itemKey, deleteTask }) {
    let [completionStatus, setCompletionStatus] = (taskList.find(item => item.key === itemKey).completed ? useState(true) : useState(false));
    const handleToggleComplete = () => {
        let tempTaskList = taskList;
        if (completionStatus) {
            setCompletionStatus(false);
        } else {
            setCompletionStatus(true);
        }
        tempTaskList.find(item => item.key === itemKey).completed = !tempTaskList.find(item => item.key === itemKey).completed;
        setTaskList(tempTaskList);
        localStorage.setItem('localTaskList', JSON.stringify(taskList));
    }

    return(
        <li className="m-2 flex flex-row justify-between">
            <div>
            {/* <input type="checkbox" className="h-4 w-4" id={itemKey+"-Checkbox"} onClick={() => {
            handleToggleComplete();}} /> */}<ItemCheckbox handleToggleComplete={handleToggleComplete} taskList={taskList} itemKey={itemKey} completionStatus={completionStatus} /> <span className={completionStatus ? 'text-gray-400 text-lg align-middle line-through' : 'text-gray-700 text-lg align-middle'}>{toDoInnerText}</span>
            </div>
             <DeleteItem taskList={taskList} itemKey={itemKey} deleteTask={deleteTask} /></li>
    );
}
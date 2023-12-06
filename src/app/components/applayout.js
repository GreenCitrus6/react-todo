'use client';
import InputField from "./inputfield";
import AddButton from "./buttons/addbutton";
import ClearButton from "./buttons/clearbutton";
import { useEffect, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoItem from "./todoitem";

{/* DEVELOPMENT TO DO LIST
    [x]add functionality to clear all tasks marked as complete
    [x]add functionality to delete a single item from the task list
    [x]add local storage feature so that tasks persist when the user refreshes the page
    [x]add enter key functionality for input field
    [ ]fix bugs
        [x]when the last item is removed by either method, it is still stored in local storage and appears upon reload
        [x]when a task is added and the input field is made blank, you can keep adding it by pressing the add button
        [ ]
    [ ]refactor components to be more neat
        [ ]remove unused code
        [ ]change variable names to be more understandable
        [ ]comment code with explanations
*/}

export default function AppLayout(props) {
    //Get the current user input in InputField
    const [task, setTask] = useState('');
    const parseInputField = (task) => {
        setTask(task);
    }
    //Adding that task to the task list array upon pressing the add button
    const [taskList, setTaskList] = useState([]);
    const addTask = (task, taskList) => {
        setTaskList(
            [
                ...taskList,
                { key: uuidv4(), item: task, completed: false }
            ]
        );
    }
    //Load locally stored task list upon initialization
    useEffect(() => {
        const retrievedTaskList = JSON.parse(localStorage.getItem('localTaskList'));
        if (retrievedTaskList) {
            setTaskList(retrievedTaskList);
        }
    }, []);
    //Prevent writing to the task list on initial load, otherwise save tasklist to local storage
    const isMounted = useRef(false);
    useEffect(() => {
        if(isMounted.current) {
            localStorage.setItem('localTaskList', JSON.stringify(taskList));
        } else {
            isMounted.current = true;
        }
    }, [taskList]);
    //Remove tasks that have been marked as complete, passed to ClearButton
    const clearComplete = (taskList) => {
        let clearedTaskList = [];

        taskList.map((item) => {
            if (!item.completed) {
                clearedTaskList.push(item);
            }
        })

        setTaskList(clearedTaskList);
    }
    //Remove a single task, passed to DeleteItem
    const deleteTask = (taskList, itemKey) => {
        let clearedTaskList = [];        

        taskList.map((item) => {
            if (item.key !== itemKey) {
                clearedTaskList.push(item);
            }
        })

        setTaskList(clearedTaskList);
    }

    return(
        <main className="border-4 border-gray-600 flex flex-col justify-between rounded-3xl w-5/6 max-w-6xl p-5 h-4/5">
          <div className="h-5/6">
            <h1 className="font-bold text-3xl text-gray-600">To Do List:</h1>
            <ul id="todoUl" className="mt-3 h-[90%] overflow-y-scroll">
                {   /* Render a <ToDoItem /> for every item in the taskList array */
                    taskList.map((item) => <ToDoItem key={item.key} itemKey={item.key} toDoInnerText={item.item} completion={item.completed} taskList={taskList} deleteTask={deleteTask} />)
                }
            </ul>
            </div>
            <BottomContainer parseInputField={parseInputField} addTask={addTask} task={task} taskList={taskList} clearComplete={clearComplete} />
        </main>
    );
}

function BottomContainer({ parseInputField, addTask, task, taskList, clearComplete }) {
    return (
        <div className="block sm:flex sm:items-center">
          <InputField parseInputField={parseInputField}/>
          <div className="flex flex-row justify-between items-center sm:pl-2">
            <AddButton addTask={addTask} task={task} taskList={taskList} />
            <ClearButton taskList={taskList} clearComplete={clearComplete} />
          </div>
        </div>
    );
}
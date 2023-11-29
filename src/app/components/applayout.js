'use client';
import InputField from "./inputfield";
import AddButton from "./buttons/addbutton";
import ClearButton from "./buttons/clearbutton";
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoItem from "./todoitem";

{/* DEVELOPMENT TO DO LIST
    [x]add functionality to clear all tasks marked as complete
    [x]add functionality to delete a single item from the task list
    [ ]add local storage feature so that tasks persist when the user refreshes the page
    [ ]refactor components to be more neat
        [ ]remove unused code
        [ ]change variable names to be more understandable
        [ ]comment code with explanations
*/}

export default function AppLayout(props) {
    //fetching the current user input in the text box
    const [task, setTask] = useState('');

    const parseInputField = (task) => {
        setTask(task);
        // console.log(task);
    }
    //adding that task to the task list array upon pressing the add button
    const [taskList, setTaskList] = useState([]);
    const addTask = (task, taskList) => {
        setTaskList(
            [
                ...taskList,
                { key: uuidv4(), item: task, completed: false }
            ]
        );
    }
    //load locally stored task list upon initialization
    useEffect(() => {
        const retrievedTaskList = JSON.parse(localStorage.getItem('localTaskList'));
        if (retrievedTaskList) {
            setTaskList(retrievedTaskList);
        }
    }, []);
    //save task list to local storage
    useEffect(() => {
        if (taskList.length > 0) {localStorage.setItem('localTaskList', JSON.stringify(taskList))}
    }, [taskList]);
    //remove tasks that have been marked as complete
    const clearComplete = (taskList) => {
        let clearedTaskList = [];
        

        taskList.map((item) => {
            if (!item.completed) {
                clearedTaskList.push(item);
            }
        })

        setTaskList(clearedTaskList);

        console.log(taskList);
    }
    //remove a single task
    const deleteTask = (taskList, itemKey) => {
        let clearedTaskList = [];        

        taskList.map((item) => {
            if (item.key !== itemKey) {
                clearedTaskList.push(item);
            }
        })

        setTaskList(clearedTaskList);

        console.log(taskList);
    }

    return(
        <main className="border-4 border-gray-600 flex flex-col justify-between rounded-3xl w-5/6 p-5 h-4/5">
          <div className="h-5/6">
            <h1 className="font-bold text-3xl text-gray-600">To Do List:</h1>
            <ul id="todoUl" className="mt-3 h-[90%] overflow-y-scroll">
                {
                    taskList.map((item) => <ToDoItem key={item.key} itemKey={item.key} toDoInnerText={item.item} completion={item.completed} taskList={taskList} deleteTask={deleteTask} />)
                }
            </ul>
            </div>
            <BottomContainer parseInputField={parseInputField} addTask={addTask} task={task} taskList={taskList} clearComplete={clearComplete} />
        </main>
    );
}

function BottomContainer({ parseInputField, addTask, task, taskList, refreshUI, clearComplete }) {
    return (
        <div className="block sm:flex sm:items-center">
          <InputField parseInputField={parseInputField}/>
          <div className="flex flex-row justify-between items-center sm:pl-2">
            <AddButton addTask={addTask} task={task} taskList={taskList} refreshUI={refreshUI} />
            <ClearButton taskList={taskList} refreshUI={refreshUI} clearComplete={clearComplete} />
          </div>
        </div>
    );
}
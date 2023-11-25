'use client';
import InputField from "./inputfield";
import AddButton from "./buttons/addbutton";
import ClearButton from "./buttons/clearbutton";
import { useState } from 'react';

export default function AppLayout(props) {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');

    const parseInputField = (task) => {
        setTask(task);
        console.log(task);
    }
    
    return(
        <main className="border-4 border-gray-600 flex flex-col justify-between rounded-3xl w-5/6 p-5 h-4/5">
          <div className="h-5/6">
            <h1 className="font-bold text-3xl text-gray-600">To Do List:</h1>
            <ul className="mt-3 h-[90%] overflow-y-scroll">
                {props.children}
            </ul>
            </div>
            <BottomContainer parseInputField={parseInputField} />
        </main>
    );
}

function BottomContainer({ parseInputField }) {
    return (
        <div className="block sm:flex sm:items-center">
          <InputField parseInputField={parseInputField}/>
          <div className="flex flex-row justify-between items-center sm:pl-2">
            <AddButton />
            <ClearButton />
          </div>
        </div>
    );
}
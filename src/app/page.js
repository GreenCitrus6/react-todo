import Image from 'next/image'
import ToDoItem from './components/todoitem';
import InputField from './components/inputfield';
import AddButton from './components/buttons/addbutton';
import ClearButton from './components/buttons/clearbutton';

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center h-screen text-gray-700 overscroll-none">
      <main className="border-4 border-gray-600 flex flex-col justify-between rounded-3xl w-5/6 p-5 h-4/5">
        <div className="h-5/6">
          <h1 className="font-bold text-3xl text-gray-600">To Do List:</h1>
          <ul className="mt-3 h-[90%] overflow-y-scroll">
            <ToDoItem />
          </ul>
        </div>
        <div className="block sm:flex sm:items-center">
          <InputField />
          <div className="flex flex-row justify-between items-center sm:pl-2">
            <AddButton />
            <ClearButton />
          </div>
        </div>
      </main>
    </div>
  );
}

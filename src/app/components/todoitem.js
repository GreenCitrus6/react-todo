
export default function ToDoItem({ toDoInnerText, completion}) {
    
    return(
        <li className="m-2"><input type="checkbox" className="h-4 w-4" /> <span className="text-gray-700 text-lg align-middle">{toDoInnerText}</span></li>
    );
}
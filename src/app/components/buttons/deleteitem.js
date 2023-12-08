
export default function DeleteItem({deleteTask, taskList, itemKey}) {
    function handleDeleteItem(){
        deleteTask(taskList, itemKey);
    }
        return(
            <button title="Remove this task" onClick={handleDeleteItem}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        );
    }
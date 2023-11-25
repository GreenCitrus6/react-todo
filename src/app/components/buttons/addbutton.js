

export default function AddButton({addTask, task, taskList}) {
    function handleAddBtnPress(){
        if (task) {
            addTask(task, taskList);
            document.getElementById('taskInputField').value = '';
        } else {
            return;
        }
    }
    
    return(
        <button className="w-1/2 flex sm:aspect-square p-2 mt-3 sm:mt-0 border-gray-600 border-2 rounded-full justify-center content-center" onClick={handleAddBtnPress}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
      </button>
    );
}
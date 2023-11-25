
export default function InputField({ parseInputField }) {
    let input = '';
    function handleFetchUserInput() {
        input = document.getElementById("taskInputField").value;
        parseInputField(input);
    }
    return(
        <input type="text" id="taskInputField" className="border-gray-500 border-2 rounded-xl h-9 w-full p-2" onKeyUp={ handleFetchUserInput } />
    );
}
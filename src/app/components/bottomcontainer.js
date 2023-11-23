import InputField from "./inputfield";
import AddButton from "./buttons/addbutton";
import ClearButton from "./buttons/clearbutton";

export default function BottomContainer(props) {
    return (
        <div className="block sm:flex sm:items-center">
          <InputField />
          <div className="flex flex-row justify-between items-center sm:pl-2">
            <AddButton />
            <ClearButton />
          </div>
        </div>
    );
}
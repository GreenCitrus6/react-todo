import BottomContainer from "./bottomcontainer";

export default function AppLayout(props) {
    return(
        <main className="border-4 border-gray-600 flex flex-col justify-between rounded-3xl w-5/6 p-5 h-4/5">
          <div className="h-5/6">
            <h1 className="font-bold text-3xl text-gray-600">To Do List:</h1>
            <ul className="mt-3 h-[90%] overflow-y-scroll">
                {props.children}
            </ul>
            </div>
            <BottomContainer />
        </main>
    );
}
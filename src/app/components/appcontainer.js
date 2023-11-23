
export default function AppContainer(props) {
    return (
        <div className="flex flex-row justify-center items-center h-screen text-gray-700 overscroll-none">
            {props.children}
        </div>
    );
}
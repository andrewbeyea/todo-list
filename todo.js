const Todo = ({index, todo, remove}) => {
    function handle() {
        remove(index);
    }
    return <div className="todo" onClick={handle}>{todo.text} (-)
    </div>;
}
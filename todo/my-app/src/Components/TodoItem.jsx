function TodoItem(props){
    const {title,status}=props;
    return (
        <div>
            {title}-{status ? "completed" : "Not completed"}
        </div>
    )
}
export default TodoItem;
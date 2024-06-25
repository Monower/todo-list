const NewTodo = ({ newTodos, setTodos }) => {
    // console.log('from new todo component: ',newTodos);
    return (
        <div>
            <form onSubmit={(e) => { 
                e.preventDefault();
                console.log(e.target);
                setTodos((prev) => [...prev, {
                    id: Date.now(),
                    title: e.target[0].value,
                    description: e.target[1].value,
                    status: 0
                }]);
            }}>
                <input type="text" placeholder="Enter new todo" name="title" />
                <textarea id="" placeholder="Enter description" name="description"></textarea>
                <button type="submit">Add</button>
            </form>
            
            { 
                newTodos?.map((item)=> item?.title)
            }
        </div>
    )
};

export default NewTodo;
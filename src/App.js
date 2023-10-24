// import this below to use state
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    // Global state to allow us to use it in multiple components, pass down this stuff as props into components
    // setTasks is the function used to allow to change the state
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Meeting at school",
            day: "Feb 6th at 1:30pm",
            reminder: true,
        },
        {
            id: 3,
            text: "Buy groceries",
            day: "Feb 5th at 2:30pm",
            reminder: false,
        },
    ]);
    // Add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };

        setTasks([...tasks, newTask]);
    };
    // Delete task
    const deleteTask = (id) => {
        // Changing the immutable state
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className="container">
            {/* Actual project code */}
            <Header onAdd={() => setShowAddTask} />
            {/* && shorthand is a shorthand for the ternary operator without a false statement */}
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                "No Tasks To Show"
            )}
            {/* Demo for learning */}
            {/* Props example */}
            {/* <Header title="Hello" /> */}
        </div>
    );
};

export default App;

// Can create fragmants for the parent container <></>

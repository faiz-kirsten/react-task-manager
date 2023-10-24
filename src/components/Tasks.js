import Task from "./Task";

// Demo for learning
// const tasks = [
//     {
//         id: 1,
//         text: "Doctors Appointment",
//         day: "Feb 5th at 2:30pm",
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: "Meeting at school",
//         day: "Feb 6th at 1:30pm",
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: "Buy groceries",
//         day: "Feb 5th at 2:30pm",
//         reminder: false,
//     },
// ];

// const Tasks = () => {
//     return (
//         <>
//             {tasks.map((task) => (
//                 // when using the map function each item in here needs to have a unique key - thats why task.id is used
//                 <h3 key={task.id}>{task.text}</h3>
//             ))}
//         </>
//     );
// };
// Project code
const Tasks = ({ tasks, onDelete, onToggle }) => {
    // setTasks will be used to change the state of this component

    return (
        <>
            {tasks.map((task) => (
                // when using the map function each item in here needs to have a unique key - thats why task.id is used
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    );
};

export default Tasks;

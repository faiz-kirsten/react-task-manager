// Importing an icon
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            className={`task ${task.reminder ? "reminder" : ""}`}
            onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}{" "}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(task.id)} // ensures that we can pass the id of task into the click event
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;

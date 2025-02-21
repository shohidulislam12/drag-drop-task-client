import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import TaskUpdateModal from "./TaskUpdateModal";
import TaskAddModal from "./TaskAddModal";
import { MdDelete } from "react-icons/md";


const TaskCard = ({task,handledelete,handleupdate}) => {
    const date = new Date();
    const isOverdue = task.dueDate && new Date(task.dueDate) < new Date()
    const [isModalOpen, setIsModalOpen] = useState(false); 
console.log(task)


    return (
        <div className="border p-2 my-2 rounded-sm  " draggable>
                {task.dueDate && (
        <p className={`text-sm ${isOverdue ? "text-red-600" : "text-gray-600"}`}>
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}
            <h2>Title:{task.title}</h2>
            <p>Descrition:{task.description}</p>
            <span className=""><button className="  dark:text-white border p-1  "><FaEdit onClick={()=>{setIsModalOpen(true)}}></FaEdit></button> <button className="border p-1  dark:text-white" onClick={()=>handledelete(task._id)}><MdDelete /></button></span>
            {/* <TaskAddModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onTaskAdded={handleTaskAdded}
          ></TaskAddModal> */}
    <TaskUpdateModal task={task}
    isOpen={isModalOpen}
    handleupdate={handleupdate}
    onClose={() => setIsModalOpen(false)}>

    </TaskUpdateModal>
          
        </div>
    );
};

export default TaskCard;
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "./auth/AuthProvider";
import { toast } from "react-toastify";
import TaskAddModal from "./TaskAddModal";
import TaskCard from "./TaskCard";
import { useQuery } from "@tanstack/react-query";

const TaskManege = () => {
  const { user, loading } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const dragItem = useRef();
  const dragContainer = useRef();


  const { refetch, isLoading } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/tasks/${user?.email}`
      );
      setTasks(response.data);
      return response.data;
    },
    enabled: !!user?.email,
  });
  if (loading || isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  // Handle task addition
  const handleTaskAdded = async ({ title, description,dueDate, category }) => {
    if (!user?.email) {
      toast("Please login first");
      return;
    }
    const formData = {
      title,
      description,
      category,
      dueDate,
      userEmail: user.email,
    
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/tasks`,
        formData
      );
      if (data.insertedId) {
        toast("Task added successfully");
        refetch();
      }
    } catch (error) {
      console.error("Error adding task:", error);
      toast("Failed to add task");
    }
  };

  // Update task
  const handleupdate = async (id, updatedTask) => {
    console.log("Updating task:", id, updatedTask);
    await axios.put(`${import.meta.env.VITE_BASE_URL}/tasks/${id}`, updatedTask);
    refetch();
  };

  // Delete task
  const handledelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/tasks/${id}`);
      refetch();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  // Group tasks by category
  const groupedTasks = {
    "To-Do": tasks.filter((task) => task.category === "To-Do"),
    "In Progress": tasks.filter((task) => task.category === "In Progress"),
    "Done": tasks.filter((task) => task.category === "Done"),
  };

  // Custom drag handlers
  const handleDragStart = (e, task, container) => {
    dragItem.current = task;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
    console.log("Dragging:", task, "from", container);
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handler for drop events to update task category
  const handleDrop = (e, targetContainer) => {
    e.preventDefault();
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
  
    if (sourceContainer !== targetContainer) {
      // Update local state: update the task's category
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === item._id ? { ...task, category: targetContainer } : task
        )
      );
      // Send full updated task object to backend
      handleupdate(item._id, { ...item, category: targetContainer });
    }
  };
  

  return (
    <div className="dark:bg-[#420878] dark:text-white flex-col cards mx-auto p-5 bg-purple-300 min-h-screen">
      <div className="flex items-center dark:bg-gray-400 bg-blue-50 justify-around md:w-1/2 mx-auto w-full">
        <h2 className="text-center border p-2 w-1/3">Add Your Task</h2>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white p-2"
          >
            + Add task
          </button>
          <TaskAddModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onTaskAdded={handleTaskAdded}
          />
        </div>
      </div>

      {/* Render columns for each category with custom drag and drop */}
      <div className="grid md:grid-cols-3 gap-5 my-5 grid-cols-1">
        {Object.keys(groupedTasks).map((category) => (
          <div
            key={category}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
            onDrop={(e) => handleDrop(e, category)}
            onDragOver={handleDragOver}
          >
            <h2 className="text-lg font-semibold mb-4">{category}</h2>
            {groupedTasks[category].map((task) => (
              <div
                key={task._id}
                draggable
                onDragStart={(e) => handleDragStart(e, task, category)}
                onDragEnd={handleDragEnd}
              >
                <TaskCard
                  task={task}
                  handleupdate={handleupdate}
                  handledelete={handledelete}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {!user?.email && (
        <p className="text-3xl my-12">First Login to use this app</p>
      )}
    </div>
  );
};

export default TaskManege;

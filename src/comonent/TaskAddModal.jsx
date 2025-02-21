
import axios from "axios";
import { useState } from "react";

const TaskAddModal = ({ isOpen, onClose, onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("To-Do");
const [dueDate,setDueDate]=useState('')
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

      onTaskAdded({title,description,category,dueDate});
      setTitle("");
      setDescription("");
      setDueDate('')
      setCategory("To-Do");
      onClose();
 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-box  dark:bg-gray-500  relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Add Your Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title:</label>
            <input
              type="text"
              placeholder="Enter title.(max-50 charecter)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="input  dark:text-black input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description:</label>
            <textarea
              placeholder="Enter task description(max-20 charecter)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea   dark:text-black textarea-bordered w-full h-24"
            />
          </div>
          <div>
          <label className="block text-sm font-medium mb-1">Due Date:</label>
          <input
            type="date" // Add dueDate input
            value={dueDate}
            onChange={(e) =>setDueDate(e.target.value)}
            className="input dark:text-black  input-bordered w-full"
          />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select dark:text-black  select-bordered w-full"
            >
              <option value="To-Do">To-Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
   
          </div>
          <button type="submit" className="btn dark:bg-gray-500 dark:text-white btn-primary w-full">
            Submit Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskAddModal;

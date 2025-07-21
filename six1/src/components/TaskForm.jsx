import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, dueDate });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
   <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-cyan-50 to-blue-100">
  <form 
    onSubmit={handleSubmit} 
    className="space-y-4 w-full max-w-md mx-auto p-8 rounded-xl shadow-lg"
    style={{
      background: "linear-gradient(135deg, rgba(224, 247, 250, 0.9) 0%, rgba(178, 235, 242, 0.9) 50%, rgba(128, 222, 234, 0.9) 100%)",
      border: "1px solid #b2ebf2",
      margin:"6"
    }}
  >
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-cyan-800 mb-6">
        Add New Task
      </h2>
      
      <div className="space-y-16">
        <label htmlFor="task-title" className="block text-sm font-medium text-cyan-800">
          Task Title
        </label>
        <input
          id="task-title"
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white/80"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="task-description" className="block text-sm font-medium text-cyan-800">
          Description
        </label>
        <textarea
          id="task-description"
          placeholder="Enter task details"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white/80"
          rows={4}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="task-due-date" className="block text-sm font-medium text-cyan-800">
          Due Date :
        </label>
        <  input

          id="task-due-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className=" space-y-16 w-full p-30 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white/80"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full mt-6 py-3 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
      >
        Add Task
      </button>
    </div>
  </form>
</div>
  );
}

export default TaskForm;

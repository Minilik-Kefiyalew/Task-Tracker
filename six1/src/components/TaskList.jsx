import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className=" p-6 text-center">
        <p className=" text-gray-500 italic bg-white/80 p-4 rounded-lg inline-block">
           No tasks found. Add one to get started!
        </p>
      </div>
    );
  }

  return (
    <div 
      className="p-6 bg-gradient-to-b from-cyan-50 to-blue-100 rounded-xl"
      style={{ minHeight: "3000px" }}
    >
      <div className=" min-h-screen max-w-3xl mx-auto">
        <h2 className="min-h-screen text-2xl font-bold text-cyan-800 mb-6 text-center">
          Your Tasks
        </h2>
        <div className="grid gap-6">
          {tasks.map((task) => (
            <TaskCard 
              key={task.id || task.title} 
              task={task} 
              className="min-h-screen bg-white/90 hover:bg-white transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
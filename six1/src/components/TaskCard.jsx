function TaskCard({ task }) {
  if (!task) return null;

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-md bg-blue p-6 rounded-xl shadow-md border border-gray-100">
        <h3 className="text-lg font-semibold text-center text-gray-800 m-6 bg-blue p-6">
          {task.title}
        </h3>
        <p className="text-gray-600 text-center mb-4">
          {task.description}
        </p>
        <p className="text-sm text-gray-500 text-center">
          Due: {task.dueDate}
        </p>
      </div>
    </div>
  );
}

export default TaskCard;
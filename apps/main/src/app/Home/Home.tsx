import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
  const [tasks, setTasks] = useState(null);

  const fetchTasks = async () => {
    const results: any = await axios.get('http://localhost:8000/api/tasks');
    console.log(results.data);
    setTasks(results.data);
  }

  useEffect(() => {
    fetchTasks();
  }, ([]));

  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      { tasks && (
        tasks.map((task:any) => (
          <div className="m-4 border border-1" id={task.id}>
            <div>{task.title}</div>
            <div>{task.description}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;

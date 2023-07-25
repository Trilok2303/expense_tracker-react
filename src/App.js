import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '' && newAmount.trim() !== '') {
      const newTaskObject = {
        task: newTask,
        Amount: parseFloat(newAmount), // Convert the amount to a number
      };

      setTasks([...tasks, newTaskObject]);
      setNewTask('');
      setNewAmount('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const getTotalExpense = () => {
    return tasks.reduce((total, task) => total + task.Amount, 0).toFixed(2);
  };

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;

  return (
    <div className="App">
      <div className='header'>
        <h1>Expense Tracker</h1>
      </div>

      <div>
        <input
          type="textarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Message"
        />
        <input
          type="Number"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
          placeholder="Amount"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.task}</td>
              <td>{today}</td>
              <td>{task.Amount}</td>
              <td>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <strong>Total Expense:</strong> {getTotalExpense()}
      </div>
    </div>
  );
}

export default App;

import { useState,useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Data from './components/Data'

function App() {

  const [tasks,setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors appointment',
            day: 'Feb 5',
            reminder: true,
    
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6',
            reminder: true,
    
        },
        {
            id: 3,
            text: 'Food shoping',
            day: 'Feb 7',
            reminder: false,
    
        }
    
    ]
  )
  const [data,setData] = useState([])


  useEffect(()=>{
    fetchTasks()
  },[])

  const fetchTasks = async() => {
    const res = await fetch('https://ypa.herokuapp.com/api/members')
    const data = await res.json()
    
    setData(data)
  }


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id ))
  }

  const toggleReminder = (id) => {
    setTasks( 
      tasks.map((task)=>
        task.id === id ? {...task ,reminder: !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      {tasks.length > 0 ? (<Tasks tasks={tasks}  onDelete={deleteTask}  onToggle={toggleReminder}   />) : 'No tasks to show' }
      <Data data={data}/>
    </div>
  );
}

export default App;

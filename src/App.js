
import { useState } from "react"
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from "./Components/AddTask"
import Footer from "./Components/Footer"
import About from "./Components/About"
// import SocialFollow from "./Components/SocialFollow"

function App() {
  // add task
  const [showAddTask, setShowAddTask] = useState
  (false) 
  const [tasks, setTasks] = useState ([
    {
        id : 1,
        test: 'Outreach Meeting',
        day: 'Jan 1st at 2:00pm',
        reminder: true,  
    },
    {
        id : 2,
        test: 'Meeting at Office',
        day: 'Jan 2nd at 2:30pm',
        reminder: true,
    },
    {
        id : 3,
        test: 'Food Shopping (Bodija)',
        day: 'Dec 24th at 2:30pm',
        reminder: false,
    },
    ])

    // Add Task function
   const addTask = (task) => {
    const id = Math.floor(Math.random()*
    10000) + 1
    const newTask = { id, ...task }
    setTasks ([...tasks, newTask])
   }

    //Delete task function
    const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !== id))
    } 

    // Toggle Reminder
    const toggleReminder = (id) => {
      // console.log(id)
      setTasks(
        tasks.map((task) =>
        task.id === id ? { ...task, reminder:
        !task.reminder} : task
        )
      )
    }

  return (
    <Router>
     {/* <Routes> */}
      
    <div className="container"> 
       <Header onAdd={() => setShowAddTask
      (!showAddTask)} 
       showAdd={showAddTask}/>
      <Routes>
       <Route path="/" element={
        <>
           {showAddTask && <AddTask onAdd={addTask} />} 
       {tasks.length > 0 ? (<Tasks tasks={tasks} 
       onDelete={deleteTask} onToggle={toggleReminder}
        /> 
      ) :(
        'No Tasks To Show. Please Add Task'
       )}
        </>
       } />
       <Route path='/about' element={<About />} />
       </Routes>
       {/* <About /> */}
       <Footer />
      
    </div>
    {/* </Routes> */}
    </Router>
  )
}
 

export default App;

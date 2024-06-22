
// import axios from 'axios';
// import WorkoutCard from './assets/components/WorkoutCard'; // Assuming you have a WorkoutCard component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import WorkoutLogPage from './assets/pages/WorkoutLogPage';
import AddWorkoutPage from './assets/pages/AddWorkoutPage';
import NavBar from './assets/components/NavBar';
import { WorkoutProvider } from './assets/context/WorkoutContext';

const App = () => {
  return (
    <WorkoutProvider>
   
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/log" element={<WorkoutLogPage />} />
            <Route path="/add" element={<AddWorkoutPage />} />
          </Routes>
        </>
    
    </WorkoutProvider>
  );
};




// Spread out this logic among components, utilized context for to make this datat accessible accross files 




  // const [workouts, setWorkouts] = useState([]);

  // // Function to fetch all workouts from the server
  // function getWorkouts() {
  //   axios.get("/api/workout")
  //     .then(res => {
  //       if (Array.isArray(res.data)) {
  //         setWorkouts(res.data);
  //       } else {
  //         console.error("API response is not an array:", res.data);
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }

  // // Function to add a new workout
  // function addWorkout(newWorkout) {
  //   axios.post('/api/workout', newWorkout)
  //     .then(res => {
  //       console.log(res.data)
  //       setWorkouts(prevWorkouts => [...prevWorkouts, res.data]);
  //     })
  //     .catch(err => console.log(err));
  // }

  // // Function to delete a workout
  // function deleteWorkout(workoutId) {
  //   axios.delete(`/api/workout/${workoutId}`)
  //     .then(res => {
  //       setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout._id !== workoutId));
  //     })
  //     .catch(err => console.log(err));
  // }

  // // Function to edit/update a workout
  // function editWorkout(updates, workoutId) {
  //   axios.put(`/api/workout/${workoutId}`, updates)
  //     .then(res => {
  //       const updatedWorkout = res.data;
  //       const index = workouts.findIndex(workout => workout._id === workoutId);
  //       if (index !== -1) {
  //         const newWorkouts = [...workouts];
  //         newWorkouts[index] = updatedWorkout;
  //         setWorkouts(newWorkouts);
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }

  // // Fetch workouts on initial render
  // useEffect(() => {
  //   getWorkouts();
  // }, []);

  // return (
  //   <div className="App">
  //     <h1>Workout Tracker</h1>
  //     <AddWorkoutForm submit={addWorkout} btnText="Add Workout" />
  //     <div className="workout-list">
  //       {workouts.map(workout => (
  //         <WorkoutCard
  //           key={workout._id}
  //           workout={workout}
  //           deleteWorkout={deleteWorkout}
  //           editWorkout={editWorkout}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );


export default App;

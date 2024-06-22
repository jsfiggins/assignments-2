import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  const getWorkouts = () => {
    axios.get('/api/workout')
      .then(res => {
        if (Array.isArray(res.data)) {
          setWorkouts(res.data);
        } else {
          console.error('API response is not an array:', res.data);
        }
      })
      .catch(err => console.log(err));
  };

  const addWorkout = (newWorkout) => {
    axios.post('/api/workout', newWorkout)
      .then(res => {
        setWorkouts(prevWorkouts => [...prevWorkouts, res.data]);
      })
      .catch(err => console.log(err));
  };

  const deleteWorkout = (workoutId) => {
    axios.delete(`/api/workout/${workoutId}`)
      .then(() => {
        setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout._id !== workoutId));
      })
      .catch(err => console.log(err));
  };

  const editWorkout = (updates, workoutId) => {
    axios.put(`/api/workout/${workoutId}`, updates)
      .then(res => {
        const updatedWorkout = res.data;
        setWorkouts(prevWorkouts => {
          const index = prevWorkouts.findIndex(workout => workout._id === workoutId);
          if (index !== -1) {
            prevWorkouts[index] = updatedWorkout;
          }
          return [...prevWorkouts];
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, deleteWorkout, editWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

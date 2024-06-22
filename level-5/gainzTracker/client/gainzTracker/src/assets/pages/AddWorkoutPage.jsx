import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import AddWorkoutForm from '../components/AddWorkoutForm';

const AddWorkoutPage = () => {
  const { addWorkout } = useContext(WorkoutContext);

  return (
    <div>
      <h1>Add Workout</h1>
      <AddWorkoutForm submit={addWorkout} btnText="Save Workout" />
    </div>
  );
};

export default AddWorkoutPage;

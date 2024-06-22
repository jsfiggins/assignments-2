import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import WorkoutCard from '../components/WorkoutCard';

const WorkoutLogPage = () => {
  const { workouts, deleteWorkout } = useContext(WorkoutContext);

  return (
    <div>
      <h1>Workout Log</h1>
      <div className="workout-list">
        {workouts.map(workout => (
          <WorkoutCard
            key={workout._id}
            workout={workout}
            deleteWorkout={deleteWorkout}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutLogPage;

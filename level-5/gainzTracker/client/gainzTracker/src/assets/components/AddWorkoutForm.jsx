import React, { useState } from 'react';

export default function AddWorkoutForm({ submit, btnText }) {
  const initialExercise = { name: '', sets: [{ setCount: 1, reps: '', weight: '' }], restTime: '', notes: '' };
  const [exercises, setExercises] = useState([initialExercise]);

  function handleExerciseChange(index, e) {
    const { name, value } = e.target;
    const updatedExercises = [...exercises];
    updatedExercises[index][name] = value;
    setExercises(updatedExercises);
  }

  function handleSetChange(exerciseIndex, setIndex, e) {
    const { name, value } = e.target;
    const updatedExercises = [...exercises];
    updatedExercises[exerciseIndex].sets[setIndex][name] = value;
    setExercises(updatedExercises);
  }

  function addExercise() {
    setExercises([...exercises, initialExercise]);
  }

  function addSet(exerciseIndex) {
    const updatedExercises = [...exercises];
    const newSetCount = updatedExercises[exerciseIndex].sets.length + 1;
    updatedExercises[exerciseIndex].sets.push({ setCount: newSetCount, reps: '', weight: '' });
    setExercises(updatedExercises);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formattedData = { exercises };
    submit(formattedData);
    setExercises([initialExercise]); // Reset form after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      {exercises.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex}>
          <input
            type="text"
            name="name"
            value={exercise.name}
            onChange={(e) => handleExerciseChange(exerciseIndex, e)}
            placeholder="Exercise Name"
            required
          />
          <div>
            {exercise.sets.map((set, setIndex) => (
              <div key={setIndex}>
                <input
                  type="number"
                  name="reps"
                  value={set.reps}
                  onChange={(e) => handleSetChange(exerciseIndex, setIndex, e)}
                  placeholder="Reps"
                  required
                />
                <input
                  type="number"
                  name="weight"
                  value={set.weight}
                  onChange={(e) => handleSetChange(exerciseIndex, setIndex, e)}
                  placeholder="Weight"
                  required
                />
              </div>
            ))}
            <button type="button" onClick={() => addSet(exerciseIndex)}>Add Set</button>
          </div>
          <input
            type="text"
            name="restTime"
            value={exercise.restTime}
            onChange={(e) => handleExerciseChange(exerciseIndex, e)}
            placeholder="Rest Time"
            required
          />
          <input
            type="text"
            name="notes"
            value={exercise.notes}
            onChange={(e) => handleExerciseChange(exerciseIndex, e)}
            placeholder="Notes"
          />
        </div>
      ))}
      <button type="button" onClick={addExercise}>Add Exercise</button>
      <button type="submit">{btnText}</button>
    </form>
  );
}

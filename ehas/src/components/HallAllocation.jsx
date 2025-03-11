import { useState } from 'react';

const HallAllocation = () => {
  const [students, setStudents] = useState([]);
  const [halls, setHalls] = useState(['Hall A', 'Hall B', 'Hall C']);
  const [selectedHall, setSelectedHall] = useState('');

  const handleAllocateHall = (studentIndex) => {
    if (selectedHall) {
      const updatedStudents = [...students];
      updatedStudents[studentIndex].hall = selectedHall;
      setStudents(updatedStudents);
    }
  };

  return (
    <div>
      <h2>Hall Allocation</h2>
      {students.map((student, index) => (
        <div key={index}>
          {student.name} - {student.rollNumber}
          <select
            onChange={(e) => setSelectedHall(e.target.value)}
            value={student.hall || ''}
          >
            <option value="">Select Hall</option>
            {halls.map((hall) => (
              <option key={hall} value={hall}>{hall}</option>
            ))}
          </select>
          <button onClick={() => handleAllocateHall(index)}>Assign</button>
        </div>
      ))}
    </div>
  );
};

export default HallAllocation;
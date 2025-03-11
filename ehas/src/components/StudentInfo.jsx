import { useState } from 'react';

const StudentInfo = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  const handleAddStudent = () => {
    if (name && rollNumber) {
      setStudents([...students, { name, rollNumber }]);
      setName('');
      setRollNumber('');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ padding: '30px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '400px', textAlign: 'center' }}>
        <h2>Student Information</h2>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '90%', padding: '12px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          style={{ width: '90%', padding: '12px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={handleAddStudent}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '15px 30px',
            margin: '10px 0',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            fontSize: '16px'
          }}
        >
          Add Student
        </button>

        <ul>
          {students.map((student, index) => (
            <li key={index}>{student.name} - {student.rollNumber}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentInfo;
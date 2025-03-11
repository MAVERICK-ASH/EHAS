import { useState } from 'react';

const Tassign = () => {
  const [teachers, setTeachers] = useState([]);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');

  const handleAddTeacher = () => {
    if (name && subject) {
      setTeachers([...teachers, { name, subject }]);
      setName('');
      setSubject('');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ padding: '30px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '400px', textAlign: 'center' }}>
        <h2>Teacher Assignment</h2>
        <input
          type="text"
          placeholder="Teacher Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '90%', padding: '12px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ width: '90%', padding: '12px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={handleAddTeacher}
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
          Add Teacher
        </button>

        <ul>
          {teachers.map((teacher, index) => (
            <li key={index}>{teacher.name} - {teacher.subject}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tassign;

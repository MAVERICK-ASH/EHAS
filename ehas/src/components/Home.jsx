const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
      <div style={{ padding: '50px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '80%', maxWidth: '1200px', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Welcome to the Exam Hall Allotment System</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px' }}>
          The Exam Hall Allotment System is designed to automate the seating arrangement and faculty assignment process at GEC Wayanad.
          This system will eliminate inefficiencies, reduce errors, and improve the overall exam hall allocation process.
        </p>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Contributors</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem' }}>
          <li>Ashish M (Roll No: 29)</li>
          <li>Sharon BK (Roll No: 58)</li>
          <li>Shakeelu Rahman MM (Roll No: 57)</li>
          <li>Theertha K (Roll No: 64)</li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '20px' }}><strong>Guided by:</strong> Danya Raj P (AP CSE)</p>
      </div>
    </div>
  );
};

export default Home;

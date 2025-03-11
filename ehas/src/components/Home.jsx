const Home = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ padding: '30px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '600px', textAlign: 'center' }}>
          <h1>Welcome to the Exam Hall Allotment System</h1>
          <p>
            The Exam Hall Allotment System is designed to automate the seating arrangement and faculty assignment process at GEC Wayanad.
            This system will eliminate inefficiencies, reduce errors, and improve the overall exam hall allocation process.
          </p>
          <h2>Contributors</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Ashish M (Roll No: 29)</li>
            <li>Sharon BK (Roll No: 58)</li>
            <li>Shakeelu Rahman MM (Roll No: 57)</li>
            <li>Theertha K (Roll No: 64)</li>
          </ul>
          <p><strong>Guided by:</strong> Danya Raj P (AP CSE)</p>
        </div>
      </div>
    );
  };
  
  export default Home;
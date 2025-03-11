import './Navbar.css';

const Navbar = ({ setActiveTab }) => {
  return (
    <nav className="navbar">
      <div className="logo">EXAM HALL SEATING ARRANGEMENT SYSTEM</div>
      <div className="links">
        <span onClick={() => setActiveTab('home')}>HOME</span>
        <span onClick={() => setActiveTab('student')}>STUDENT INFO</span>
        <span onClick={() => setActiveTab('teacher')}>TEACHER ASSIGNING</span>
        <span onClick={() => setActiveTab('hall')}>HALL ALLOCATION</span>
        <span onClick={() => setActiveTab('generator')}>HALL GENERATOR</span>
      </div>
    </nav>
  );
};

export default Navbar;

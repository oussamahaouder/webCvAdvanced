import "./about.css";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
        My curriculum comprised of courses like Database Systems, Analysis of Algorithms, Web Technologies,
         Software Engineering, Networking, Specification and design of Graphical User interface has assisted me 
         to gain profound knowledge in the field of Computer Science. I studied two years in preparatory 
         classes , in which I learned basic mathematics and algorithmic processing .I am currently a fullstack web developer.
         <br/><br/>
        
        </p>
      </div>
      </div>
  
    
  );
};

export default About;
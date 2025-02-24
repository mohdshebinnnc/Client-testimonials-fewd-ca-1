import './App.css'
import TestimonialCard from "./components/TestimonialCard"

const App = () => {
    const container={
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f4f4",
      padding: "20px",
    }
    const heading={
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    }
    const cardContainer={
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    }
  ;

  return (
    <div style={container}>
      <h1 style={heading}>Client Testimonials</h1>
      <div style={cardContainer}>
        <TestimonialCard 
          name="Emily Watson" 
          review="This service was amazing! Highly recommended." 
        />
        <TestimonialCard 
          name="John Doe" 
          review="Fantastic experience! Will definitely use again." 
        />
      </div>
    </div>
  );
};

export default App;

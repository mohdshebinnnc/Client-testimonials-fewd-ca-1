const TestimonialCard = ({ name, review }) => {
  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      margin: "10px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
    },
    name: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    review: {
      fontSize: "16px",
      color: "#555",
    },
  };

  return (
    <div style={styles.card}>
      <p style={styles.name}>{name}</p>
      <p style={styles.review}>{review}</p>
    </div>
  );
};

export default TestimonialCard;
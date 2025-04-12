import m from "../images/emp2.jpg";


const Update = () => {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <h1 style={{ color: "black" }}>Update Page</h1>
    <img src={m} alt="home" style={{ Width: "600px", height: "400px" }} />
  </div>
  );
};

export default Update;
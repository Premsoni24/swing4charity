import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    setUser(u);
  }, []);

  const addScore = async () => {
    const res = await axios.post("http://localhost:5000/score/add", {
      userId: user._id,
      score: Math.floor(Math.random() * 45)
    });
    setUser(res.data);
  };

  const subscribe = async () => {
    const res = await axios.post("http://localhost:5000/user/subscribe", {
      userId: user._id
    });
    setUser(res.data);
  };

  const setCharity = async (name) => {
    const res = await axios.post("http://localhost:5000/user/charity", {
      userId: user._id,
      charity: name
    });
    setUser(res.data);
  };

  const runDraw = async () => {
    const res = await axios.get("http://localhost:5000/draw/run");
    alert("Draw result check console");
    console.log(res.data);
  };

  if (!user) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome: {user.email}</h2>

      <button onClick={subscribe}>
        {user.subscribed ? "Subscribed ✅" : "Subscribe"}
      </button>

      <h3>Charity</h3>
      <button onClick={() => setCharity("Red Cross")}>Red Cross</button>
      <button onClick={() => setCharity("UNICEF")}>UNICEF</button>

      <p>Selected: {user.charity}</p>

      <h3>Scores</h3>
      {user.scores?.map((s, i) => (
        <p key={i}>{s}</p>
      ))}

      <button onClick={addScore}>Add Score</button>

      <br /><br />
      <button onClick={runDraw}>Run Draw</button>
    </div>
  );
}
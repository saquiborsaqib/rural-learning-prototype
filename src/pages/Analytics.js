import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getOfflineData } from "../utils/localStorage";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const [data,setData] = useState({labels:[], datasets:[]});

  useEffect(()=>{
    const fetchData = async ()=>{
      const lessons = await getOfflineData("lessons") || [];
      const labels = lessons.map(l=>l.title);
      const completed = lessons.map(l=>l.completed?1:0);
      setData({
        labels,
        datasets:[{
          label:"Completed Lessons",
          data:completed,
          backgroundColor:"rgba(75,192,192,0.6)"
        }]
      });
    }
    fetchData();
  },[]);

  return (
    <div style={{padding:"20px"}}>
      <h2>Analytics</h2>
      <Bar data={data} options={{ animation:{duration:1000}, plugins:{tooltip:{enabled:true}} }}/>
    </div>
  );
};

export default Analytics;

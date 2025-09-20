import React, { useEffect, useState } from "react";
import LessonCard from "../components/LessonCard";
import { saveOfflineData, getOfflineData } from "../utils/localStorage";

const Lessons = () => {
  const [lessons,setLessons] = useState([]);

  useEffect(()=>{
    const fetchLessons = async ()=>{
      let data = await getOfflineData("lessons");
      if(!data){
        data = [
          {id:1, title:"Math Basics", completed:false},
          {id:2, title:"Science Experiments", completed:false}
        ];
        await saveOfflineData("lessons",data);
      }
      setLessons(data);
    }
    fetchLessons();
  },[]);

  const handleComplete = async (id)=>{
    const updated = lessons.map(l => l.id===id ? {...l,completed:true}:l);
    setLessons(updated);
    await saveOfflineData("lessons",updated);

    let userProgress = await getOfflineData("userProgress") || {points:0};
    userProgress.points +=10;
    await saveOfflineData("userProgress",userProgress);
  };

  const handleQuizComplete = async (bonusPoints)=>{
    let userProgress = await getOfflineData("userProgress") || {points:0};
    userProgress.points += bonusPoints;
    await saveOfflineData("userProgress",userProgress);
  };

  return (
    <div style={{padding:"20px"}}>
      <h2>Lessons</h2>
      {lessons.map(l => <LessonCard key={l.id} lesson={l} onComplete={handleComplete} onQuizComplete={handleQuizComplete}/>)}
    </div>
  );
};

export default Lessons;



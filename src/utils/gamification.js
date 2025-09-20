export const calculatePoints = (lessonsCompleted, quizzesCompleted) => lessonsCompleted * 10 + quizzesCompleted * 5;

export const getLevel = (points) => {
  if (points < 50) return 1;
  if (points < 100) return 2;
  if (points < 200) return 3;
  return 4;
};

export const getBadges = (points) => {
  const badges = [];
  if (points >= 10) badges.push("First Steps");
  if (points >= 50) badges.push("Intermediate Learner");
  if (points >= 100) badges.push("Advanced Learner");
  return badges;
};

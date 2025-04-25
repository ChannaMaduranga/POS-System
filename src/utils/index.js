export const getRandomBG = () => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-teal-500",
  ];
  const color = colors[Math.floor(Math.random()*colors.length)];
  return color;
};

export const getAvatarName = (name)=>{
  if(!name) return "";
  return name.split(" ").map(word=>word[0]).join("").toUpperCase()
}

export const formatDate = (date) => {
  const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
];
return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2,'0')}, ${date.getFullYear()}`;
}
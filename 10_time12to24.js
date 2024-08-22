const convert12To24 = (time12) => {
  const [time, modifier] = time12.split(" "); //01:02 PM
  let [hours, minutes] = time.split(":");
  
  if (hours === "12") hours = "00";
  if (modifier === "PM") {
    hours = parseInt(hours) + 12;
  }

  return `${hours}:${minutes}`
}
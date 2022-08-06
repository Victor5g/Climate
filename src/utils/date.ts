import { weekNames } from "./weeks";
import { monthNames } from "./months";

export const getCurrentDate = () => {
  let instance = new Date();
  let date = instance.getDate();
  let day = weekNames[instance.getDay()];
  let month = monthNames[instance.getMonth()];
  let year = instance.getFullYear();
  return { week: day, date: `${date} de ${month} de ${year}` };
};

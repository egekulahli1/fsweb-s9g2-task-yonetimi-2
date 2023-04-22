import React from "react";
import { differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const daysLeft = differenceInDays(new Date(taskObj.deadline), new Date());

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        {daysLeft > 0 && (
          <span className={daysLeft <= 3 ? "bg-deadline-red px-2" : ""}>
            {daysLeft} gün sonra
          </span>
        )}
        {daysLeft === 0 && (
          <span className="bg-deadline-red px-2">Bugün</span>
        )}
        {daysLeft < 0 && (
          <span className="bg-deadline-red px-2">Süre doldu</span>
        )}
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;

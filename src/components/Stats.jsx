import { useState } from "react";
import { Task } from "./Task";

export const Stats = ({ tasks }) => {
  // const [stats, setStats] = useState([]);

  const unstarted = () => {
    let unstartedCount = 0;
    tasks.map((task) =>
      task.status == "unstarted" ? unstartedCount++ : unstartedCount
    );
    return unstartedCount;
  };
  const completed = () => {
    let completedCount = 0;
    tasks.map((task) =>
      task.status == "completed" ? completedCount++ : completedCount
    );
    return completedCount;
  };
  const inProgress = () => {
    let inProgressCount = 0;
    tasks.map((task) =>
      task.status == "in progress" ? inProgressCount++ : inProgressCount
    );
    return inProgressCount;
  };

  return (
    <div>
      <p>stats</p>
      <p style={{ color: "red" }}>
        completed {completed() + "/" + tasks.length}{" "}
      </p>
      <p style={{ color: "red" }}>
        unstarted {unstarted() + "/" + tasks.length}
      </p>
      <p style={{ color: "red" }}>
        in progress {inProgress() + "/" + tasks.length}
      </p>
    </div>
  );
};

import { TaskContext } from "./TaskContext";
import { useContext } from "react";

function useTaskContext() {

    return useContext(TaskContext);

}

export { useTaskContext };
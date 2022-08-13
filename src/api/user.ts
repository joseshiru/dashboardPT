import axios from "../helpers/axios";
import { User } from "../models/user";
import { Task } from "../models/task";
const path = "/users";

export const getAll = (): Promise<User[]> => {
  return axios.get(`${path}`).then((response) => response.data);
};

export const getTodoByUserId = (id: number): Promise<Task[]> => {
  return axios.get(`${path}/${id}/todos`).then((response) => response.data);
};

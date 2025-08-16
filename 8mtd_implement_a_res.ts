interface UserData {
  id: number;
  username: string;
  email: string;
}

interface Goal {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  progress: number;
  userId: number;
}

interface Habit {
  id: number;
  title: string;
  description: string;
  frequency: string; // daily, weekly, monthly
  startDate: Date;
  userId: number;
}

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
  userId: number;
  goalId?: number;
  habitId?: number;
}

interface TrackerData {
  users: UserData[];
  goals: Goal[];
  habits: Habit[];
  tasks: Task[];
}

class TrackerApp {
  private data: TrackerData;

  constructor() {
    this.data = {
      users: [],
      goals: [],
      habits: [],
      tasks: [],
    };
  }

  addUser(user: UserData) {
    this.data.users.push(user);
  }

  addGoal(goal: Goal) {
    this.data.goals.push(goal);
  }

  addHabit(habit: Habit) {
    this.data.habits.push(habit);
  }

  addTask(task: Task) {
    this.data.tasks.push(task);
  }

  getUsers() {
    return this.data.users;
  }

  getGoals() {
    return this.data.goals;
  }

  getHabits() {
    return this.data.habits;
  }

  getTasks() {
    return this.data.tasks;
  }
}

const trackerApp = new TrackerApp();
export default trackerApp;
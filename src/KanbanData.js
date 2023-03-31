import { v4 as uuidv4 } from 'uuid';
export const data = [
  {
    id: uuidv4(),
    Task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.',
    Decription: "1",
    // Assigned_To: 'Beltran',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '25-May-2020',
  },
  {
    id: uuidv4(),
    Task: 'Fix Styling',
    Decription: "2",
    // Assigned_To: 'Dave',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '26-May-2020',
  },
  {
    id: uuidv4(),
    Task: 'Handle Door Specs',
    Decription: "3",
    // Assigned_To: 'Roman',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '27-May-2020',
  },
  {
    id: uuidv4(),
    Task: 'morbi',
    Decription: "4",
    // Assigned_To: 'Gawen',
    // Assignee: 'Kai',
    // Status: 'Done',
    // Priority: 'High',
    Due_Date: '23-Aug-2020',
  },
  {
    id: uuidv4(),
    Task: 'proin',
    Decription: "5",
    // Assigned_To: 'Bondon',
    // Assignee: 'Antoinette',
    // Status: 'In Progress',
    // Priority: 'Medium',
    Due_Date: '05-Jan-2021',
  },
];

export const data1 = [
  {
    id: uuidv4(),
    Task: 'qweqweqweqweqweq',
    Decription: "111111",
    // Assigned_To: 'Beltran',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '25-May-2023',
  }
];

export const columnsFromBackend = {
  [uuidv4()]: {
    title: 'To-do',
    items: data1,
  },
  [uuidv4()]: {
    title: 'In Progress',
    items: data,
  },
  [uuidv4()]: {
    title: 'Done',
    items: [],
  },
  [uuidv4()]: {
    title: 'Discard',
    items: [],
  }
};
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


axios.get(url).then(response => {
  const todo: Todo = response.data;


  logTodo(todo);
  console.log(printTodo(todo));
});

const logTodo = (todo: Todo) => {
  const{id, title, completed}=todo;
  console.log(`

  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}

  `);
};


const printTodo = (todo: Todo):string => {
  const{id, title, completed}=todo;
  return (`

  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}

  `);
};

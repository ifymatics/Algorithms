// fetch("http://localhost:3001/", {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//       body: JSON.stringify(todoForm),
//     })
//       .then((response) => {
//         if (response.status === 201) {
//           return response.json();
//         }
//         return response.text().then((text) => {
//           throw new Error(text);
//         });
//       })
//       .then((todo) => {
//         setTodos([...todos, todo]);
//       })
//       .catch(({ message }) => setError(JSON.parse(message)));
let x = 10;
--x;
console.log(x);

fetch("https://api.github.com/users/therahulkumar9")
  .then((response) => response.json())
  .then((data) => console.log(data.name))

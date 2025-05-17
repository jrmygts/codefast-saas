import Link from "next/link";

// Every react component receives a parameter that is called props of type Object.
const ButtonLogin = ({ isLoggedIn, name, children }) => {
  // const person = { name: "Bob", age: 21 };
  // If I want to call part of this object i would have to use person.name or person.age.
  // const { name, age } = person; Like this we are extracting the name and age so we can access this part of the object by using name and age.
  // Basically extracting the properties out of the id to remove the need to use something like props.name. think cleaner code.

  if (isLoggedIn) {
    // Props are used to pass data back and forth between components.
    // As a developer you want to avoid writing repetitive code as much as possible.
    return (
      <Link href="/dashboard" className="btn btn-primary">
        <p>Welcome back {name}</p>
        {/* Everything that is inbetween the opening and closing tags of a component called to page.js
         - Is callable as {props.children}
        - you cannot change this naming convention. */}
        {children}
      </Link>
    );
  }
  return <button>Login</button>;
};

// this is how we have already learned to declare a JavaScript function.(this is the most common syntax to declare a function but both of these work).
// const doThis = (pass parameters here) => {
//   do this
// }
//
// here is the syntax for another way to declare a function
// function doThat(pass parameters here) {
//   do that
// }

export default ButtonLogin;

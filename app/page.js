import Link from "next/link";
import ButtonLogin from "@/components/ButtonLogin";
export default function Home() {
  const isLoggedIn = true;
  const name = "Jeremy";
  return (
    <main>
      {/*In JavaScript we cannot use the dash sign inside of the variable so the syntax is different with JSX from HTML.*/}
      {/*Since it is JavaScript instead of HTML we need to use camelCase syntax as well for the styles.*/}
      {/*Do not forget that 1rem === 16px*/}
      {/*If you name the parent element of something flex then you can stack elements that aren't block level*/}
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
          <div className="font-bold">CodeFastSaas</div>
          {/*The hidden in tailwind is the same thing as display: none in css.*/}
          <div className="space-x-4 hidden max-md:hidden">
            <a className="link text-black">Pricing</a>
            <a className="link text-black">FAQ</a>
          </div>
          <div>
            {/*Components rely on props if we weren't passing props to this component the elif statement would evaluate to false and just return button login text*/}
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      <section className="p-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} name={name}></ButtonLogin>
      </section>
    </main>
  );
}

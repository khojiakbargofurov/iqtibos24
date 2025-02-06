import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <>
        <section class="px-4 py-36 mx-auto max-w-7xl">
          <main className="grid min-h-[51.8vh] place-items-center px-8">
            <div className="text-center">
              <p className="text-9xl font-semibold text-primary">404</p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-6 text-lg leading-7">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-10">
                <Link to="/">
                  <button className="btn btn-outline">Go back home</button>
                </Link>
              </div>
            </div>
          </main>
        </section>
      </>
    );
  }

  return (
    <>
      <section class="px-4 py-36 mx-auto max-w-7xl">
        <main className="grid min-h-[51.8vh] place-items-center px-8">
          <h4 className="text-center font-bold text-4xl">
            There was an error...
          </h4>
          <div className="mt-10">
            <Link to="/">
              <button className="btn btn-outline">Go back home</button>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
}

export default Error;

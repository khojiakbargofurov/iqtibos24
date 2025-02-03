import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <section class="px-4 py-24 mx-auto max-w-7xl">
        <div class="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div>
            <p class="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Error 404
            </p>
            <h1 class="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left  md:text-4xl">
              Oops! The page you're looking for isn't here.
            </h1>
            <p class="mb-5 text-base text-left md:text-xl">
              You might have the wrong address, or the page may have moved.
            </p>
            <Link
              to="/"
              class="w-full mb-2 btn btn-md btn-light sm:w-auto sm:mb-0"
            >
              Back to homepage
            </Link>
            <a
              href="https://www.khojiakbar.uz/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full mb-2 btn btn-md btn-white sm:w-auto sm:mb-0"
            >
              Contact us
            </a>
          </div>
          <div>
            <div class="w-full h-full py-48 bg-gray-200 rounded-lg font-bold text-4xl">404 Page Not found</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Error;

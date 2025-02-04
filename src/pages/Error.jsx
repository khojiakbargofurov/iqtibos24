

function Error() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
            Error 404
          </p>
          <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left md:text-4xl">
            Oops! The page you're looking for isn't here.
          </h1>
          <p className="mb-5 text-base text-left md:text-xl">
            You might have the wrong address, or the page may have moved.
          </p>
          <div className="flex gap-4">
            <Link to="/" className="btn btn-md btn-light">
              Back to homepage
            </Link>
            <a
              href="https://www.khojiakbar.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md btn-white"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;

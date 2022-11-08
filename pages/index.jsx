export default function Home() {
  return (
    <div className="text-secondary fs-3 fw-bold text-center">Monochrome
      <div className="mt-5 text-center">

        {/*mobile */}
        <a className="button button-primary"
          href=""
          title="New in">
          New in
        </a>

        {/* desktop */}
        <a className="mx-2 button button-large"
          href=""
          title="View all">
          View all
        </a>

        {/* footer */}
        <button className="button button-primary button-secondary"
          type="submit"
          title="Submit">
          Submit
        </button>

        {/* log in */}
        <button className="ms-2 button button-primary button-inverted"
          type="submit"
          title="Sign in">
          Sign in
        </button>

        <button className="ms-2 button button-primary button-inverted"
          type="submit"
          title="Register">
          Register
        </button>

      </div>
    </div >

  );
}

import { Helmet, HelmetProvider } from "react-helmet-async"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Not Found!</title>
        </Helmet>
      </HelmetProvider>
      <div>
        <div>Not Found!!</div>
        <Link to={"/"}>Back</Link>
      </div>
    </>
  )
}

export default NotFound

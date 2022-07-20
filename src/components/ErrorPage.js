import React from 'react';
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
      <div className="error-page">
      ERROR! Page is not found!
      <Link to="/">
        Back to Home
      </Link>
      </div>
  )
}

export default ErrorPage
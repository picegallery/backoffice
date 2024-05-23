import React, { FC } from 'react'
import Link from 'next/link'

const Index: FC = () => {
  return (
    <div>
      <h1>Welcome Home Page!</h1>
      <Link href="/users/page">
        <a>Go to Users Page</a>
      </Link>
    </div>
  )
}

export default Index
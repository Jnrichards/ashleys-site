import React from "react"
import { Link } from "gatsby"
import Title from '../Globals/Title'

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              perspiciatis unde laborum at blanditiis beatae voluptates repellat
              optio officia voluptatum, dolorum illo et doloribus dolore
              voluptas eos maiores iusto soluta saepe ut quas dicta! Error eius
              amet incidunt eum, laudantium sunt. At velit aspernatur ut ex
              earum sequi quae nobis?
            </p>
            <Link to="/about/">
                <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

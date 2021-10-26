import { BlitzPage, useQuery } from "blitz"
import { Suspense } from "react"
import getQuestion from "app/queries/getQuestion"
import { Form, Field } from "react-final-form"

const Content = () => {
  const [question] = useQuery(getQuestion, null)

  return (
    <div>
      <h1>Strange Form</h1>
      <Form
        initialValues={{ name: "strange", set: new Set() }}
        onSubmit={async () => {}}
        render={({ handleSubmit, submitError }) => (
          <form onSubmit={handleSubmit} className="form">
            <Field name="name" component="input" placeholder="First Name" />

            {submitError && (
              <div role="alert" style={{ color: "red" }}>
                {submitError}
              </div>
            )}

            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  )
}

const Page: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  )
}

Page.suppressFirstRenderFlicker = true

export default Page

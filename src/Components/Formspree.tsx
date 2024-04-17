import { useContext } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Input, Textarea, Button, Alert } from "@mantine/core"
import { WindowsSize } from "../App"

function ContactForm() {
  const [state, handleSubmit] = useForm("xeqyazpl"),
    winsiz = useContext(WindowsSize)

  if (state.succeeded) {
    return (
      <Alert variant="light" color="teal" title="Notification">
        Message successfully delivered!!
      </Alert>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* INPUT NAME */}
        <div>
          <Input.Wrapper
            label="Name"
            withAsterisk
            size={winsiz < 768 ? "sm" : "md"}>
            <Input
              variant="filled"
              placeholder="Your name"
              id="name"
              type="text"
              name="name"
              required
            />
          </Input.Wrapper>
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        {/* INPUT COMPANY */}
        <div>
          <Input.Wrapper label="Company" size={winsiz < 768 ? "sm" : "md"}>
            <Input
              variant="filled"
              placeholder="Your company name"
              id="company"
              type="text"
              name="company"
            />
          </Input.Wrapper>
          <ValidationError
            prefix="Company"
            field="company"
            errors={state.errors}
          />
        </div>
        {/* INPUT EMAIL */}
        <div>
          <Input.Wrapper
            label="Email"
            withAsterisk
            size={winsiz < 768 ? "sm" : "md"}>
            <Input
              variant="filled"
              placeholder="Email Address"
              id="email"
              type="email"
              name="email"
              required
            />
          </Input.Wrapper>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        {/* INPUT PHONE */}
        <div>
          <Input.Wrapper
            label="Phone"
            withAsterisk
            size={winsiz < 768 ? "sm" : "md"}>
            <Input
              variant="filled"
              placeholder="Phone Number"
              id="phone"
              type="number"
              name="phone"
              required
            />
          </Input.Wrapper>
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
      </div>
      <div className="col-span-12 mt-2">
        <Textarea
          variant="filled"
          radius="sm"
          size={winsiz < 768 ? "sm" : "md"}
          label="Message"
          withAsterisk
          minRows={4}
          maxRows={6}
          autosize
          placeholder="Tell me about your project?"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="py-5">
        <Button
          type="submit"
          disabled={state.submitting}
          variant="filled"
          color="grey"
          fullWidth>
          Submit
        </Button>
      </div>
    </form>
  )
}
function App() {
  return <ContactForm />
}
export default App

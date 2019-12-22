import React from 'react'

interface iProps {
  bar?: string
}

// Check something
const WHAT_THIS = "something"

function Component(props: iProps) {
  const foo: string = `foo ${props.bar}`

  return (
    <div>
      Foo = {foo}
    </div>
  )
}

interface iState {

}

class App extends React.Component<iProps, iState> {
  private keepItSecret = (): void => {
    console.log("keep it safe")
  }

  render() {
    return (
      <div>
        {this.keepItSecret}
        <Component bar="foo" />
      </div>
    )
  }
}
import * as React from 'react'

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

export class App extends React.Component<iProps, iState> {
  private keepItSecret = (): void => {
    console.log("keep it safe")
  }

  get somethingForYou(): string {
    this.keepItSecret()
    return "Here you go"
  }

  render() {
    return (
      <div>
        {this.somethingForYou}
        <Component bar={WHAT_THIS} />
      </div>
    )
  }
}
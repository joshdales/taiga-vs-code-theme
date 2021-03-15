import React from 'react'

// Check something
const WHAT_THIS = "something"

function Component(props) {
  const foo = `foo ${props.bar}`

  return (
    <div className="class">
      Foo = {foo}
    </div>
  )
}

export class App extends React.Component {
  keepItSecret = () => {
    console.log("keep it safe")
  }

  get somethingForYou() {
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

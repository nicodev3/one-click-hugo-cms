import React from "react";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;
    return <div>
      <p>{ entry.getIn(["data", "description"]) }</p>
      { widgetFor("body") }
    </div>;
  }
}

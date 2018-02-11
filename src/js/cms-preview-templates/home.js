import React from "react";

export default class PostPreview extends React.Component {
  render() {
    const {widgetFor} = this.props;
    return <div>
      { widgetFor("body") }
    </div>
  }
}
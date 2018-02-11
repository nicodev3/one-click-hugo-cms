import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    return <div>
      { widgetFor("body") }
    </div>
  }
}
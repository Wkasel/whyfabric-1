import React from "react";

class ReadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charLimit: props.charLimit
    };
    this.initialState = this.state;
  }

  getReadMoreContent() {
    const { charLimit } = this.state;
    const { children, readMoreText, readLessText, className } = this.props;
    if (children.length > charLimit) {
      return (
        <span className="short-text">
          {children.substr(0, charLimit)}...
          <span
            className="readMoreText"
            style={{
              display: "block",
              fontSize: "0.8rem",
              color: "#29b6f6",
              cursor: "pointer"
            }}
            role="presentation"
            onClick={this.showLongText.bind(this)}
          >
            {readMoreText}
          </span>
        </span>
      );
    } else if (children.length < charLimit) {
      return <span className="short-text">{children}</span>;
    }
    return (
      <span className="short-text">
        {children}
        <span
          className="readMoreText"
          style={{
            display: "block",
            fontSize: "0.8rem",
            color: "#29b6f6",
            cursor: "pointer"
          }}
          role="presentation"
          onClick={this.showShortText.bind(this)}
        >
          {readLessText}
        </span>
      </span>
    );
  }

  showLongText() {
    const { children } = this.props;
    this.setState({ charLimit: children.length });
    this.getReadMoreContent();
  }

  showShortText() {
    this.setState(this.initialState);
    this.getReadMoreContent();
  }

  render() {
    return <div>{this.getReadMoreContent()}</div>;
  }
}

export default ReadMore;

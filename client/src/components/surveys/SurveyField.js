import React from "react";

class SurveyField extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input {...this.props.input} style={{ marginBottom: "5px" }} />
        <div className="red-text" style={{ marginBottom: "5px" }}>
          {this.props.meta.touched && this.props.meta.error}
        </div>
      </div>
    );
  }
}

export default SurveyField;

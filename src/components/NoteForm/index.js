import React from "react";

import NoteTitleInput from "../NoteTitleInput";

import styles from "./NoteForm.module.css";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onTitleChange = (event) => {
    const { value } = event.target;
    if (value.length > 150) {
      alert("Title cannot be longer than 150 characters!");
      return;
    }
    this.setState({
      title: value,
    });
  };
  onBodyChange = (event) => {
    this.setState({
      body: event.target.value,
    });
  };
  onSubmit = () => {
    const { onAddNote } = this.props;
    const { title, body } = this.state;
    if (title === "" || body === "") {
      if (title === "") {
        alert("Title cannot be empty!");
      }
      if (body === "") {
        alert("Body cannot be empty!");
      }
      return
    }
    onAddNote({
      id: new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toString(),
    });
    this.setState({
      title: "",
      body: "",
    });
    alert("Note Added!");
  };
  render() {
    const { title, body } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Add a Note!</h1>
        <NoteTitleInput
          title={title}
          onTitleChange={this.onTitleChange}
        />
        <textarea
          className={styles.bodyInput}
          placeholder="Write down your thoughts..."
          value={body}
          required={true}
          onChange={this.onBodyChange}
        />
        <button className={styles.submit} type="button" onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default NoteInput;

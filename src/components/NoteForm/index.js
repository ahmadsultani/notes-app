import React from "react";

import NoteTitleInput from "../NoteTitleInput";

import styles from "./NoteForm.module.css";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      charLeft: 150,
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onTitleChange = (event) => {
    if (this.state.charLeft <= 0) return;
    const { value } = event.target;
    this.setState({
      title: value,
      charLeft: 150 - value.length,
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
      charLeft: 150,
    });
    alert("Note Added!");
  };
  render() {
    const { title, charLeft, body } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Add a Note!</h1>
        <NoteTitleInput
          title={title}
          onTitleChange={this.onTitleChange}
          charLeft={charLeft}
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

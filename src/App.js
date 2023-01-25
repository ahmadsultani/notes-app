import { Component } from "react";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

import { initialNotes } from "./_initialData";

import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: initialNotes,
      isSearching: false,
      searchedText: "",
    };
    this.onAddNote = this.onAddNote.bind(this);
    this.onToggleArchive = this.onToggleArchive.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  onAddNote = (note) => {
    this.setState({
      notes: [...this.state.notes, note],
    });
  };
  onToggleArchive = (noteId) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === noteId) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    });
    this.setState({
      notes,
    });
  };
  onDeleteNote = (noteId) => {
    const notes = this.state.notes.filter((note) => note.id !== noteId);
    this.setState({
      notes,
    });
  };
  onSearch = (event) => {
    const searchedText = event.target.value.toLowerCase();
    this.setState({
      isSearching: true,
      searchedText,
    });
  };

  render() {
    let notes = this.state.notes;
    if (this.state.isSearching) {
      notes = notes.filter((note) => (
        note.title.toLowerCase().includes(this.state.searchedText)
      ));
    }
    const notesActive = notes.filter((note) => !note.archived);
    const notesArchived = notes.filter((note) => note.archived);
      
    return (
      <div className={styles.App}>
        <Navbar onSearch={this.onSearch}/>
        <NoteForm onAddNote={this.onAddNote} />
        <NoteList
          notes={notesActive}
          onToggleArchive={this.onToggleArchive}
          onDeleteNote={this.onDeleteNote}
          type="Active"
        />
        <NoteList
          notes={notesArchived}
          onToggleArchive={this.onToggleArchive}
          onDeleteNote={this.onDeleteNote}
          type="Archived"
        />
      </div>
    );
  }
}

export default App;

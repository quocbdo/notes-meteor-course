import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export const NoteListHeader = (props) => {
  return (
    <div>
      <button onClick={() => {
        props.meteorCall('notes.insert');
      }}>Create Note</button>
    </div>
  );
};

NoteListHeader.propTypes = {
  meteorCall: React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  };
}, NoteListHeader);

// NoteListHeader
// 1. Create NoteList Header functional component
// 2. Render a button to the screen "Create Note"
// 3. Setup onClick handler for button
// 4. props.meteorCall trigger notes.insert meteor method
// 5. Render container component in NoteList
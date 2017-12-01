import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';

import { NoteListHeader } from './NoteListHeader';

if (Meteor.isClient) {
  describe('NoteListHeader', function() {
    
    it('should call meteorCall on click', function() {
      const spy = expect.createSpy();
      const wrapper = mount(<NoteListHeader meteorCall={spy}/>);
      
      wrapper.find('button').simulate('click');
      
      // spy.calls[0].arguments[0];
      expect(spy).toHaveBeenCalledWith('notes.insert');
    });
    
  });
}

// If on client, setup describe block

// it should call meteorCall on click

// 1. Create a spy
// 2. Render component with spy
// 3. Simulate button click
// 4. Assert spy was called correctly

/*global expect, it, describe, jest */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('AddTodo Component', () =>{
    let component;
    const submitMock =jest.fn();

    beforeEach(() =>{
        component = shallow(
            <AddTodo
            submitTodo = {submitMock}
            />
        );
    });

    it('Should render correctly',() =>{
        expect(component.exists()).toEqual(true);
    });

        it('Should have one input', () =>{
            expect(component.find('.todo-input').length).toEqual(1);
      });

      describe('Add Todo Button', () => {
          it('should exist' ,() =>{
              expect(component.find('.todo-submit').length).toEqual(1);

          });
      });

      it('Should call the SubmitTodo method when clicked', () =>{
          const component = mount(<AddTodo submitTodo = {submitMock}/>);

          expect(submitMock.mock.calls.length).toEqual(0);
          component.find('form').simulate('submit');
          expect(submitMock.mock.calls.length).toEqual(1);
      });


    
});
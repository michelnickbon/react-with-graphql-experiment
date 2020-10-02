import React from "react";
import Result from "../components/Result"
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test("Result component is receiving and displaying API data", async () => {

  // Mock API data
  const GetGraphQLDataMock = jest.fn();
  const resolvedValue = {"data":"Country"};
  GetGraphQLDataMock.mockResolvedValue(resolvedValue);
  const response = await GetGraphQLDataMock()

  // Mount
  const wrapper = shallow(<Result result={response}/>);
  const props = wrapper.props().children;

  // Validate
  expect(typeof props).toBe('object');
  expect(props).toBe(resolvedValue);

});

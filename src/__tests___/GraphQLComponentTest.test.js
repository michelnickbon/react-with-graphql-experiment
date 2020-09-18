import React from 'react';
import renderer from 'react-test-renderer';
import GraphQLComponent from '../components/GraphQLComponent';

test('Snapshot is rendered', () => {
    const component = renderer.create(<GraphQLComponent />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
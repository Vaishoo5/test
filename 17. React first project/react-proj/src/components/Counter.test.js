// import React from 'react';
// import {render,fireEvent} from '@testing-library/react';
// import LifeCycle from './LifeCycle';

// test('renders the LifeCycle component',()=>{
// 	const{getByText,getByTestId}=render(<LifeCycle/>);
// 	const countDisplay=getByTestId('count-display');
// 	const incrementButton=getByTestId('increment-button');
// 	const decrementButton=getByTestId('decrement-button');

// 	expect(countDisplay).toHaveTextContent('0');
// 	fireEvent.click(incrementButton)
// 	expect(countDisplay).toHaveTextContent('1');
// 	fireEvent.click(decrementButton)
// 	expect(countDisplay).toHaveTextContent('0');
// })
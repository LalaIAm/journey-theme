import '../src/shared/fonts/styles.css';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';
import { withA11y} from '@storybook/addon-a11y';

addDecorator(withA11y);
addDecorator((story) => (
	<>
		<GlobalStyle />
		{story()}
	</>
));

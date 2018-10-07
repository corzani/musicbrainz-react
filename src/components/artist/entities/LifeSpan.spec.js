import {render} from 'enzyme/build';
import LifeSpan from './LifeSpan';
import {pinkFloydArtist} from '../../../test/pinkfloydResponse';
import React from 'react';

describe('LifeSpan component', () => {
    it('should show information when "lifeSpan" property is given', () => {
        const lookup = render(<LifeSpan lifeSpan={pinkFloydArtist.lifeSpan}/>);
        expect(lookup.text()).toEqual('1965 to 2014');

    });

    it('should show default information when "lifeSpan" property is not given', () => {
        const lookup = render(<LifeSpan lifeSpan={{}}/>);
        expect(lookup.text()).toEqual('From somewhere in the time to present');
    });

    it('should show "-" when start and end are null', () => {
        const lookup = render(<LifeSpan lifeSpan={{start: null, end: null}}/>);
        expect(lookup.text()).toEqual('From somewhere in the time to ?');
    });
});

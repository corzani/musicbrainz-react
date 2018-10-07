import {shallow} from 'enzyme/build';
import Biography from './Biography';
import {pinkFloydArtist} from '../../../test/pinkfloydResponse';
import React from 'react';

describe('Biography component', () => {
    it('should show the correct text when "theAudioDB.biography" property is given', () => {
        const lookup = shallow(<Biography theAudioDB={pinkFloydArtist.theAudioDB}/>);
        expect(lookup.text()).toEqual(pinkFloydArtist.theAudioDB.biography);
    });

    it('should show "Biography not found." when "theAudioDB.biography" property is not given', () => {
        const lookup = shallow(<Biography theAudioDB={{}}/>);
        expect(lookup.text()).toEqual('Biography not found.');
    });
});
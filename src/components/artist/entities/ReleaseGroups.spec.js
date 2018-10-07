import {render} from 'enzyme/build';
import {pinkFloydArtist} from '../../../test/pinkfloydResponse';
import toJson from 'enzyme-to-json';
import React from 'react';
import ReleaseGroups from "./ReleaseGroups";

describe('ReleaseGroups component', () => {
    it('should show information when "ReleaseGroups" property is given', () => {
        const lookup = render(<ReleaseGroups releaseGroups={pinkFloydArtist.releaseGroups}/>);
        expect(toJson(lookup)).toMatchSnapshot();
    });

    it('should show "No Album found." when "ReleaseGroups" property is not given', () => {
        const lookup = render(<ReleaseGroups releaseGroups={{}}/>);
        expect(lookup.text()).toEqual('No Album found.');
    });
});
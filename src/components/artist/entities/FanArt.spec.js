import {render} from 'enzyme/build';
import FanArt from './FanArt';
import {pinkFloydArtist} from '../../../test/pinkfloydResponse';
import toJson from 'enzyme-to-json';
import React from 'react';

describe('FanArt component', () => {
    it('should show information when "fanArt" property is given', () => {
        const lookup = render(<FanArt fanArt={pinkFloydArtist.fanArt}/>);
        expect(toJson(lookup)).toMatchSnapshot();
    });

    it('should show default information when "fanArt" property is not given', () => {
        const lookup = render(<FanArt fanArt={{}}/>);
        expect(lookup.text()).toEqual('No Fan Art found.');
    });

    it('should show default image when no cover art is present', () => {
        const fanArtWithNoCover = {
            "thumbnails": [{}]
        };

        const lookup = render(<FanArt fanArt={fanArtWithNoCover}/>);
        expect(toJson(lookup)).toMatchSnapshot();
    });
});
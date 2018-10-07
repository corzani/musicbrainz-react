import React from "react";
import {render} from "enzyme";
import toJson from 'enzyme-to-json';
import {pinkFloydArtist} from "../../test/pinkfloydResponse";
import Artist from "./index";

describe('Artist', function () {
    it('should describe the artist when the property "artist" is given', function () {
        const lookup = render(<Artist artist={pinkFloydArtist}/>);
        expect(toJson(lookup)).toMatchSnapshot();
    });
});
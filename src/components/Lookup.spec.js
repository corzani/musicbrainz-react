import React from "react";
import wait from 'waait';
import {MockedProvider} from "react-apollo/test-utils";
import TestRenderer from 'react-test-renderer';
import {PINKFLOYD_MBID, queryArtist} from "../queries/musicbrain";
import Lookup, {} from "./Lookup";
import {pinkFloydResponse} from "../test/pinkfloydResponse";
import {ErrorMessage} from "../common";
import Artist from "./artist";

const mockSuccessfullReq = [
    {
        request: {
            query: queryArtist,
            variables: {mbid: PINKFLOYD_MBID}
        },
        result: pinkFloydResponse
    },
];

const mockFailedRequest = [{
    request: {
        query: queryArtist,
        variables: {mbid: PINKFLOYD_MBID}
    },
    error: new Error("No artists but problems here")
}];

describe('Lookup (Artist) Component', function () {
    it('should handle a successful response with given mbid', async () => {
        const lookup =TestRenderer.create(
            <MockedProvider mocks={mockSuccessfullReq} addTypename={false}>
                <Lookup query={{mbid: PINKFLOYD_MBID}}/>
            </MockedProvider>
        );

        await wait(0); // wait for response

        const lookupInstance = lookup.root;

        expect(lookupInstance.findByType(Artist).props.artist).toEqual(pinkFloydResponse.data.lookup.artist);
    });

    it('should handle an unsuccessful response showing the errors', async () => {
        const lookup = TestRenderer.create(
            <MockedProvider mocks={mockFailedRequest} addTypename={false}>
                <Lookup query={{mbid: PINKFLOYD_MBID}}/>
            </MockedProvider>
        );

        await wait(0);

        const lookupInstance = lookup.root;

        expect(lookupInstance.findByType(ErrorMessage).props.message).toEqual('Network error: No artists but problems here');
    });
});
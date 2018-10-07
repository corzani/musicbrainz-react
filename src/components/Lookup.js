import React from 'react';
import PropTypes from 'prop-types';
import {queryArtist} from '../queries/musicbrain';
import {Query} from 'react-apollo';
import Artist from './artist';
import {ErrorMessage, Loading} from '../common';

const Lookup = ({query}) => {
    const {mbid} = query;
    return (
        <Query query={queryArtist} variables={{mbid}} errorPolicy="all">
            {({loading, error, data}) => {
                if (loading) return <Loading/>;
                if (error) return <ErrorMessage message={error && error.message}/>;

                return (
                    <Artist artist={data.lookup.artist}/>
                );
            }}
        </Query>
    );
};

Lookup.propTypes = {
    query: PropTypes.object.isRequired,
};

export default Lookup;
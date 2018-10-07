import {gql} from "apollo-boost";

export const PINKFLOYD_MBID = '83d91898-7763-47d7-b03b-b92132375c47';

export const queryArtist = gql`

    query QueryArtist($mbid : MBID!) {
        lookup {
            artist(mbid: $mbid) {
                name
                country
                rating {
                    value
                }
                lifeSpan {
                    begin
                    end
                }
                releaseGroups(type: ALBUM) {
                    edges {
                        node {
                            id
                            title
                            firstReleaseDate
                            coverArtArchive {
                                front(size:SMALL)
                                back(size:SMALL)
                            }
                        }
                    }
                }
                fanArt {
                    thumbnails {
                        url
                    }
                }
                theAudioDB {
                    biography
                    style
                }
            }
        }
    }
`;

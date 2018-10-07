# Musicbrainz Simple UI

This is a simple UI to access Musicbrainz through a GraphQL.

## Installation


```sh
npm i
```

## Test

```sh
npm t
```

### Coverage
```sh
npm t -- --coverage
```


# UI

We can run the development UI by executing:

```sh
npm run start
```

The command above starts the development server on port 3000, from now on it is possible to access the webapp at http://localhost:3000

## Test Data

When the server is listening on port 3000 we can access to:

[Pink Floyd](http://localhost:3000/83d91898-7763-47d7-b03b-b92132375c47)

[Rage Against The Machine](http://localhost:3000/3798b104-01cb-484c-a3b0-56adc6399b80)

[Radiohead](http://localhost:3000/a74b1b7f-71a5-4011-9441-d0b5e4122711)

If no MBID (MusicBrainz) on the url is given, Pink Floyd MBID is used

### Edge Cases

The following link shows what is happening when incomplete data is retrieved.

[Rage Against The Latrine](http://localhost:3000/50f87f0f-2989-4d18-8884-48bd8bb1a2d7)
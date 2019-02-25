export let CONFIG = {
    baseSettings: {
        apiKey: 'e33882e210f849fabd16f00a5c77d951',
        pageSize: 5,
        addActionName: 'Add',
        editActionName: 'Edit'
    },
    newsAPIUrls: {
        articles: 'https://newsapi.org/v2/top-headlines?',
        sources: 'https://newsapi.org/v2/sources'
    },
    localSourceSettings: {
        localSourceId: 'local',
        localSourceName: 'Local',
        url: 'http://localhost:3000/articles/'
    }
};

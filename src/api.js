export function indexDocuments(query) {

    const PROJECT_NAME = 'testperformance';
    const COLLECTION_NAME = 'posts';
    const SEARCH_TOKEN = 'MoByR5541043-ae6FxEOVJ-WSsx52jpn9hg3n';
    const HANDLER_NAME = 'suggest';

    const queryParams = {
        q: query,
        session_id: '1c5Hb23', // generate unique random session id for each user
        token: SEARCH_TOKEN
    };

    const URL = `https://192.99.17.57:30001/api/v2/projects/${PROJECT_NAME}/collections/${COLLECTION_NAME}/autocomplete/${HANDLER_NAME}?${new URLSearchParams(queryParams)}`;


    return fetch(
        URL,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json());
}
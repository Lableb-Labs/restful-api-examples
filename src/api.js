export function indexDocuments() {

    const PROJECT_NAME = 'testperformance';
    const COLLECTION_NAME = 'posts';
    const SEARCH_TOKEN = 'MoByR5541043-ae6FxEOVJ-WSsx52jpn9hg3n';
    const HANDLER_NAME = 'recommend';
    const RELATED_DOCUMENTS_TO_DOCUMENT_ID = 204990;


    const queryParams = {
        id: RELATED_DOCUMENTS_TO_DOCUMENT_ID,
        session_id: '1c5Hb23', // generate unique random session id for each user
        token: SEARCH_TOKEN,
    };


    const URL = `https://192.99.17.57:30001/api/v2/projects/${PROJECT_NAME}/collections/${COLLECTION_NAME}/recommend/${HANDLER_NAME}?${new URLSearchParams(queryParams)}`;


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
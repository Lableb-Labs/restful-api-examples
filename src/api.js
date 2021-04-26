export function deleteDocuments() {

    const PROJECT_NAME = 'restful-api-examples';
    const COLLECTION_NAME = 'posts';
    const INDEXING_TOKEN = 'kurwb7554701-snsyTRc6biMpHLKZziqVBU9l';
    const TARGET_DOCUMENT_ID_TO_DELETE = 4;


    const queryParams = {
        token: INDEXING_TOKEN,
    };


    const URL = `https://cse-prd.lableb.com/api/v2/projects/${PROJECT_NAME}/collections/${COLLECTION_NAME}/documents/${TARGET_DOCUMENT_ID_TO_DELETE}?${new URLSearchParams(queryParams)}`;


    return fetch(
        URL,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json());
}
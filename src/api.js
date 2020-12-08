export function deleteDocuments() {

    const PROJECT_NAME = 'testperformance';
    const COLLECTION_NAME = 'posts';
    const INDEXING_TOKEN = 'Mczn363962-P8Zab-fuwNHgBOll6FZlfE-F';
    const TARGET_DOCUMENT_ID_TO_DELETE = 204879;


    const queryParams = {
        token: INDEXING_TOKEN,
    };


    const URL = `https://192.99.17.57:30001/api/v2/projects/${PROJECT_NAME}/collections/${COLLECTION_NAME}/documents/${TARGET_DOCUMENT_ID_TO_DELETE}?${new URLSearchParams(queryParams)}`;


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
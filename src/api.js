export function indexDocuments() {

    const PROJECT_NAME = 'testperformance';
    const COLLECTION_NAME = 'posts';
    const INDEXING_TOKEN = 'Mczn363962-P8Zab-fuwNHgBOll6FZlfE-F';

    const DOCUMENTS = [
        {
            "id": 1,
            "title": "Lableb is awesome",
            "content": "example content goes here",
            "image": "https://mysite.com/static/images/lableb.png",
            "url": "https://mysite.com/posts/lableb-is-awesome",
            "tags": ["Fast", "Accurate"],
            "category": ["Search", "Cloud"],
            "authors": ["Lableb"],
            "date": "2011-07-01T10:50:23Z"
        }
    ];

    const URL = `https://192.99.17.57:30001/api/v2/projects/${PROJECT_NAME}/collections/${COLLECTION_NAME}/documents?token=${INDEXING_TOKEN}`;


    return fetch(
        URL,
        {
            method: 'POST',
            body: JSON.stringify(DOCUMENTS),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json());
}
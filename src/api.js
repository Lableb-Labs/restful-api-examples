export function autoCompleteQuery(query) {

    /**
    * Chnage project info according to yours from Lableb's dashboard
    */
    const PROJECT_NAME = 'restful-api-examples';
    const COLLECTION_NAME = 'posts';
    const SEARCH_TOKEN = 'RAuiM5703795-oMd1VTfDZ5O8jGfDj0tjRPQt';
    const HANDLER_NAME = 'suggest';

    const queryParams = {
        q: query,
        session_id: '1c5Hb23', // generate unique random session id for each user
        token: SEARCH_TOKEN
    };

    const URL = `https://cse-prd.lableb.com/api/v2/projects/${PROJECT_NAME}/collections/${COLLECTION_NAME}/autocomplete/${HANDLER_NAME}?${new URLSearchParams(queryParams)}`;


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
export function indexDocuments() {

    const PROJECT_NAME = 'restful-api-examples';
    const COLLECTION_NAME = 'posts';
    const INDEXING_TOKEN = 'kurwb7554701-snsyTRc6biMpHLKZziqVBU9l';

    const DOCUMENTS = [
        {
            "id": 1,
            "title": "Lableb Custom Cloud Search Engine",
            "content": "Lableb is the leading cloud search engine in the Arabic language in MENA. Lableb is just as good in English.",
            "image": "https://solutions.lableb.com/logo.png",
            "url": "https://lableb.com",
            "tags": ["Fast", "Accurate"],
            "category": ["Search", "Cloud"],
            "authors": ["Lableb Team"],
            "date": "2011-07-01T10:50:23Z"
        },
        {
            "id": 2,
            "title": "Google",
            "content": "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
            "image": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
            "url": "https://google.com",
            "tags": ["National", "Enterprise"],
            "category": ["Search", "Products"],
            "authors": ["Google Team"],
            "date": "2000-07-01T10:50:23Z"
        },
        {
            "id": 3,
            "title": "Bing",
            "content": "Microsoft Bing is a web search engine owned and operated by Microsoft. The service has its origins in Microsoft's previous search engines: MSN Search, Windows Live Search and later Live Search. Bing provides a variety of search services, including web, video, image and map search products",
            "image": "data:image/png;base64,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",
            "url": "https://bing.com",
            "tags": ["Microsoft"],
            "category": ["Search", "Products"],
            "authors": ["Microsoft Team"],
            "date": "2001-07-01T10:50:23Z"
        },
        {
            "id": 4,
            "title": "Yandex",
            "content": "Yandex Search is a search engine. It is owned by Yandex, based in Russia. In January 2015, Yandex Search generated 51.2% of all of the search traffic in Russia according to LiveInternet.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Yandex_Logo.svg/250px-Yandex_Logo.svg.png",
            "url": "https://yandex.com",
            "tags": ["Russia", "Search"],
            "category": ["Search"],
            "authors": ["Yandex Team"],
            "date": "2000-06-01T10:50:23Z"
        },
        {
            "id": 5,
            "title": "duckduckgo",
            "content": "Tired of being tracked online? We can help.",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsearchengineland.com%2Ffigz%2Fwp-content%2Fseloads%2F2015%2F06%2Fduck-duck-go-logo-full-fade-1920.png&f=1&nofb=1",
            "url": "https://duckduckgo.com/",
            "tags": ["Privacy"],
            "category": ["Search"],
            "authors": ["DuckDuckGo Team"],
            "date": "2004-07-01T10:50:23Z"
        },
        {
            "id": 6,
            "title": "Ecosia",
            "content": "Plant trees while you search the web",
            "image": "https://upload.wikimedia.org/wikipedia/en/1/11/Ecosia_logo.png",
            "url": "https://ecosia.com",
            "tags": ["Charity"],
            "category": ["Search", "Service"],
            "authors": ["Ecosia Team"],
            "date": "2000-08-01T10:50:23Z"
        },
    ];


    const URL = `https://cse-prd.lableb.com/api/v2/projects/${PROJECT_NAME}/collections/${COLLECTION_NAME}/documents?token=${INDEXING_TOKEN}`;


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
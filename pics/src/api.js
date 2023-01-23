import axios from 'axios';

const searchImages = async (term) => {
    /**
     * initial course shows all you need is Authorization in the header -- did not work
     * in order for this to work, had to add an extra param cilent_id
     */
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: process.env.REACT_APP_AUTHORIZATION
        },
        params: {
            query: term,
            client_id: process.env.REACT_APP_CLIENT_ID
        }
    });

    return response.data.results;
};

export default searchImages;

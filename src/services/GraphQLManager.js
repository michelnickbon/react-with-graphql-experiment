const GraphQLManager = {

    // Main GraphQL fetch method
    GetGraphQLData: async function(query) {
        const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query }) };
        try {
            const response = await fetch(process.env.REACT_APP_API_URI, options);
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    },

    LoadSampleQuery: function() {
        return process.env.REACT_APP_SAMPLE_QUERY;
    }
}

export default GraphQLManager;
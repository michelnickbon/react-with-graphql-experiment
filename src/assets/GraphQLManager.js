const GraphQLManager = {

    apiURL: "https://snowtooth.moonhighway.com/",

    GetGraphQLData: async function(query) {
        const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query }) };
        try {
            const response = await fetch(this.apiURL,  options );
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    },
}

export default GraphQLManager;
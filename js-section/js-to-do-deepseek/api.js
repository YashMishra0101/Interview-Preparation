class API {
    static async getMotivationalQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random?tags=motivational');
            const data = await response.json();
            return `${data.content} — ${data.author}`;
        } catch (error) {
            console.error('Error fetching quote:', error);
            return "The secret of getting ahead is getting started. — Mark Twain";
        }
    }
}
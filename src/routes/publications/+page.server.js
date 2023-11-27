export async function load() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const responseData = await response.json();
        responseData.length = 10;

        return {
            comments: responseData.map((comment) => ({
                id: comment.id,
                name: comment.name.substring(0, 10),
                email: comment.email,
                body: comment.body.substring(0, 30),
            }))
        }
    } catch (error) {
        console.error(error);
    }
}

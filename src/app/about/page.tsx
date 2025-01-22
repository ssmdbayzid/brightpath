export default async function About() {
    try {
        // Your logic here (e.g., fetching)
        return (
            <div>About Section</div>
        );
    } catch (error) {
        console.error("Error rendering About page:", error);
        return (
            <div>Error loading About Section</div>
        );
    }
}

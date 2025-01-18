import{categoryFilter} from "@/lib/actions/Course/CourseAction";

// type Params = {
//     keyword?: string; // Make it optional if it can be null or undefined
// };

export default async function Categories({ params }:{ params?: any }  ) {
    const keyword = params?.keyword || null; // No need to await here
    console.log("keyword", keyword);

    // Call the categoryFilter function with the keyword
    const result = await categoryFilter(keyword);
    console.log(result);

    return (
        <div>
            <h1>Categories</h1>
            <p>Keyword: {keyword ? keyword : 'No keyword provided'}</p>
        </div>
    );
}

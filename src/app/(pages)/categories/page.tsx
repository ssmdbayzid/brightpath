import{categoryFilter} from "@/lib/actions/Course/CourseAction";

type params = {
    keyword: string;
}

export default async function Categories({params}: {params: params}) {
    const keyword = await params?.keyword || null;
    console.log("keyword", keyword)
const result = await categoryFilter(keyword);
    console.log(result)
    return (
        <div>
            <h1>Categories</h1>

            <p>Keyword: {keyword ? keyword : 'No keyword provided'}</p>
        </div>
    );
}

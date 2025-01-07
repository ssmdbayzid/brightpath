export const getAllCourses = async () => {
    try {
        const data = await fetch('/api/course');
        const course = await data.json();
        console.log(course);
        return course;
    }catch (e) {
        console.log(e);
        return "something Wents wrong";
    }

}

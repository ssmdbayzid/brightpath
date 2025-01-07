export const getSingleCourse = async (courseId: string) => {
    const data = await fetch('/api/course/'+courseId)
    const course = await data.json()
    return course
}
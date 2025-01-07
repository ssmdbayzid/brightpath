import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema({
    name: {type: String},
    category: {type: String}
})
const LessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    duration: { type: String, required: true },
    status: { type: String, required: true },
    videoLink: { type: String, required: true },
});

const courseSchema = new mongoose.Schema({
    title: {type: String, required: true},
    rating: {type: Number},
    students: {type: Number},
    duration: {type: String,},
    categories: {type: [String]},
    summary: {type: String},
    features: {type: [String]},
    category: {type: CategorySchema},
    lessons: {type: [LessonSchema]},
    price_old: {type: String},
    price_discount: {type: String},
    price_new: {type: String},
    thumbnail: {type: String},
    video_url: {type: String},
}, {timestamps: true})


// Prevent OverwriteModelError
const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
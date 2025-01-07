'use client'
import styles from './CourseFeatures.module.scss';
import {IoIosPlayCircle, IoMdLock} from "react-icons/io";
import {useState} from "react";

export default function CourseFeatures({course}) {
    const [open, setOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState("");

    return (
        <div className={styles.featuresArea}>
            <h1>Lessons in this course:</h1>
            {course.lessons &&
                course?.lessons?.map((lesson, index) => (
                    <div key={index}
                         className={styles.lessions}
                         aria-disabled={lesson.status === "unview"}
                         onClick={() => {
                             lesson.status == "view" ? setOpen(!open) : setOpen(false);
                             setSelectedVideo(lesson.videoLink)
                         }}>
                        {lesson.status === "view" ? <IoIosPlayCircle className={styles.viewIcon}/> :
                            <IoMdLock className={styles.icon}/>}
                        <div>
                            <h4>{lesson.title}</h4>
                            <p>{lesson.duration}</p>
                        </div>
                    </div>
                ))
            }
            {open && <div className={styles.modal}>
                <div>
                    <video width="320" height="240" controls>
                        <source src="https://www.w3schools.com/movie.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>}
        </div>
    );
}

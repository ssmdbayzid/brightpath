'use client'
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from "./CourseFeatures.module.scss"
export default function ClassRating(){
    const percentage = 66;

    return (
        <div className="">
            <div className="common-heading ">Class Rating</div>
            <div className={styles.ratingContainer}>
            <div style={{width: 80, height: 80, marginRight: "15px"}}>
                <CircularProgressbar value={66} text={`${percentage}%`} styles={buildStyles({
                    backgroundColor: '#3e98c7',
                    pathColor: `rgba(72,212,45, ${percentage / 100})`,
                    textColor: '#202020',
                    trailColor: '#d6d6d6',
                })}
                />
                <p>Too Good</p>
            </div>
                <div style={{width: 80, height: 80, marginLeft: "15px"}}>
                <CircularProgressbar value={0} text={`${percentage}%`} styles={buildStyles({
                    backgroundColor: '#3e98c7',
                    pathColor: `rgba(72,212,45, ${percentage / 100})`,
                    textColor: '#202020',
                    trailColor: '#d6d6d6',
                })}
                />
                <p>Too Bad</p>
            </div>
            </div>
        </div>
    )
}
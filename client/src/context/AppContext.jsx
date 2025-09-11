import { dummyCourses } from "../assets/assets";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'
import {useAuth , useUser} from '@clerk/clerk-react'

export const AppContext = createContext() ; 

export const AppContextProvider = (props) =>{

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const {getToken} = useAuth()
    const {user} = useUser() ; 

    const[allCourses , setAllCourses] = useState([]) 
    const[isEducator , setIsEducator] = useState(true)
    const[enrolledCourses , setEnrolledCourses] = useState([]) 

    //Function to calculate the average rating of the courses
        const calculateRating = (course)=>{
            if(course.courseRatings.length == 0 ){
                return 0 ; 
            }
            let totalRating = 0 ; 
            course.courseRatings.forEach( rating => {
                totalRating += rating.rating
            })
                return totalRating / course.courseRatings.length ;
        }

    //Function to calculate Course Chapter time 
    const calculateChapterTime = (chapter) =>{
        let time = 0 ; 
        chapter.chapterContent.map((lecture)=>time+= lecture.lectureDuration)
        return humanizeDuration(time*60*1000, {units : ["h" , "m"]})
    }
    //Function to calculate Course Duration
    let calculateCourseDuration = (course)=>{
        let time = 0 ; 

        course.courseContent.map((chapter)=> chapter.chapterContent.map(
            (lecture )=> time += lecture.lectureDuration
        ))
        return humanizeDuration(time*60*1000, {units : ["h" , "m"]})
    }
    //Function to calculate the total lectures in the course 
    const calculateNoOfLectures= (course)=>{
        let totalLectures = 0 ; 
        course.courseContent.forEach( chapter =>{
            if(Array.isArray(chapter.chapterContent)){
                totalLectures += chapter.chapterContent.length
            }
        })
        return totalLectures ; 
    }

    //Fetch all courses
    const fetchAllCourses = async()=>{
        setAllCourses(dummyCourses)
    }

    //Fetch Enrolled Courses
    const fetchUserEnrolledCourses = async()=>{
        setEnrolledCourses(dummyCourses) ;
    }

    useEffect(() => {
        fetchAllCourses()
        fetchUserEnrolledCourses()
    }, [])

    const logToken = async ()=>{
        console.log(await getToken()) ; 
    }

    useEffect(()=>{
        if(user){
            logToken() ; 
        }
    } , [user]) ; 

    const value = {
            currency , allCourses , navigate , calculateRating , 
            isEducator , setIsEducator , 
            calculateChapterTime , calculateCourseDuration ,  calculateNoOfLectures , 
            enrolledCourses , fetchUserEnrolledCourses



}
return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)
}
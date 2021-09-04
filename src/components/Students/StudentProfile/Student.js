import { useParams } from "react-router-dom";
import StudentProfile from './StudentProfile.js'

const GetStudentInfo = () => {
    return (<StudentProfile id={useParams().id}/>)
}

export default GetStudentInfo
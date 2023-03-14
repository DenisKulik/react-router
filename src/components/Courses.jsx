import courses from '../data/courses';
import { Link } from 'react-router-dom';

export default function Courses() {
    return (
        <>
            <h1>Courses</h1>
            {courses.map((course) => {
                return <Link key={course.id}
                             to={course.slug}>{course.title}</Link>;
            })}
        </>
    );
}
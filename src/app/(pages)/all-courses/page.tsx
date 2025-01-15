'use client';

import styles from './allCourses.module.scss';
import SingleCourseCard from "@/app/(pages)/all-courses/components/SingleCourseCard";
import Image from "next/image";
import loader from "@/assets/image/loader-ghoori.svg";
import { fetchCourses } from "@/lib/actions/Course/CourseAction";

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";
import Loader from "@/components/Common/Loader";



export default function AllCourses() {
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesData, setCoursesData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [totalPages, setTotalPages] = useState<number>(1);

    const searchParams = useSearchParams();
    const page = searchParams.get("page");
    const keyword = searchParams.get("keyword");

    const router = useRouter();
    useEffect(() => {
        setCurrentPage(parseInt(page || '1', 10));
    }, [page]);

    useEffect(() => {
        const loadCourses = async () => {
            setLoading(true);
            setError(null);

            try {
                const result = await fetchCourses(currentPage, keyword);
                if (result.success) {
                    const { data, message, page, total, totalPages } = result.data
                    setCoursesData(data);
                    setTotalPages(totalPages);
                } else {
                    setError(result.error || "Failed to load courses.");
                }
            } catch (err: any) {
                setError(err.message || "An unexpected error occurred.");
            } finally {
                setLoading(false);
            }
        };

        loadCourses();
    }, [currentPage, keyword]);

    const handlePageChange = (page: number) => {
        router.push(`/all-courses?page=${page}`);
    };

    const renderPagination = () => {
        const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

        return (
            <div className={styles.pagination}>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={styles.btn}
                >
                    <MdKeyboardDoubleArrowLeft size={12}/>
                </button>
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`${currentPage === page ? styles.activeBtn : styles.btn}`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={styles.btn}
                >
                    <MdKeyboardDoubleArrowRight size={12} />
                </button>
            </div>
        );
    };

    return (
        <div className="container section">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <p className={styles.error}>{error}</p>
                ) : coursesData?.length > 0 ? (
                    <div>
                    <div className={styles.contentArea}>
                        {coursesData.map((course, index) =><SingleCourseCard key={index} course={course}/>)}
                    </div>
                        {totalPages > 1 && renderPagination()}
                    </div>
                        ) : ( coursesData?.length === 0 &&
                    <>
                        <div className={styles.notFound}>Data not found</div>
                    </>
                )}
        </div>
    );
}

import React, { useEffect, useState } from 'react'

import { db, ref, push, onValue } from '../Firebase/Configration' // تأكد من المسار الصحيح لـ firebase.js





function Reviews() {

    const [comment, setComment] = useState(""); // حالة لحفظ التعليق
    const [comments, setComments] = useState([]); // حالة لحفظ جميع التعليق
    useEffect(() => {
        const commentsRef = ref(db, "comments"); // المسار في قاعدة البيانات
        onValue(commentsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setComments(Object.values(data)); // تحويل التعليقات إلى مصفوفة
            }
        });
    }, []);

    // 🔹 إرسال تعليق إلى Firebase
    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() === "") return; // منع الإرسال الفارغ

        const newComment = {
            text: comment,
            author: "Anonymous", // يمكنك استبداله بالمستخدم المسجل
            timestamp: new Date().toISOString(),
        };

        push(ref(db, "comments"), newComment); // إضافة التعليق إلى قاعدة البيانات
        setComment(""); // تفريغ مربع الإدخال بعد الإرسال
    };
    return (


        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                        Discussion ({comments.length})

                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <label htmlFor="comment" className="sr-only">
                            Your comment
                        </label>
                        <textarea
                            id="comment"
                            rows={6}
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Write a comment..."
                            required=""
                            defaultValue={""}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                        Post comment
                    </button>
                </form>
                {comments.map((item, index) => (
                    <article key={index} className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 mb-4">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {item.author}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">{item.text}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            {new Date(item.timestamp).toLocaleString()}
                        </p>
                    </article>
                ))}

            </div>
        </section>


    )
}

export default Reviews

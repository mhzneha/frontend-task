document.addEventListener("DOMContentLoaded", () => {

    const testimonials = [
        {
            text: "At Elearning, I found more than just a place to learn Korean. I found a community that fosters growth and success. The engaging classes and dedicated instructors not only improved my language skills but also boosted my confidence.",
            name: "Saroj Dhungana",
            role: "Student"
        },
        {
            text: "It was good! The curriculum is well-structured and the learning environment is very supportive. I've made significant progress in my studies and feel more confident in my abilities.",
            name: "Priya Sharma",
            role: "Student"
        },
        {
            text: "Excellent experience! The teachers are knowledgeable and patient. The interactive lessons made learning enjoyable and effective. I highly recommend this platform to anyone looking to improve their skills.",
            name: "Amit Kumar",
            role: "Student"
        }
    ];

    let current = 0;

    const avatars = document.querySelectorAll('.avatar');
    const textEl = document.getElementById('testimonial-text');
    const nameEl = document.getElementById('author-name');
    const roleEl = document.getElementById('author-role');
    const progress = document.getElementById('progress-fill');

    function showTestimonial(i) {
        current = i;

        avatars.forEach((a, idx) => a.classList.toggle('active', idx === i));

        const t = testimonials[i];
        textEl.textContent = t.text;
        nameEl.textContent = t.name;
        roleEl.textContent = t.role;

        progress.style.width = ((i + 1) / testimonials.length) * 100 + "%";
    }

    avatars.forEach((avatar, i) =>
        avatar.onclick = () => showTestimonial(i)
    );

    document.getElementById('next-btn').onclick = () =>
        showTestimonial((current + 1) % testimonials.length);

    showTestimonial(0);
});

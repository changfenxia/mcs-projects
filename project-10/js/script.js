window.onload = function() {
    const st = document.querySelector('.symbols-typed')
    const ta = document.querySelector('#joke')
    ta.addEventListener('input', (e) => {
        st.textContent = ta.value.length;
    })
}

const counters = document.querySelectorAll('.counter');
for (let n of counters) {
    const updateCount = () => {
        const target = +n.getAttribute('data-target');
        const count = +n.innerText;
        const divider = 30;
        const speed = 100; // 1000 millisecond => 1 second;
        const inc = target / divider;
        if (count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, speed);
        } else {
            n.innerText = target;
        }
    };

    updateCount();
}
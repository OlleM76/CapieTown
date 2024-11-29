<body>
    <script>
        const countdown = document.getElementById("countdown");
        const targetDate = new Date("December 31, 2024 23:59:59").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (timeLeft <= 0) {
                countdown.innerHTML = "Here we go!";
            }
        }

        setInterval(updateCountdown, 1000);
    </script>
</body>
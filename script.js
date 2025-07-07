<script>
  // Form submission handler
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission
        alert('Thank you for your message! We will get back to you soon.');
        form.reset(); // Clear all form fields
      });
    }
  });
</script>

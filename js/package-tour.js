
    document.querySelectorAll('.acc-head').forEach(head => {
      head.addEventListener('click', () => {
        head.parentElement.classList.toggle('active');
      });
    });

    document.getElementById('enqForm').addEventListener('submit', function(e){
      e.preventDefault();
      alert("Thank you! Your enquiry has been submitted.");
      this.reset();
    });
 
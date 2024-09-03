document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('back-to-home').addEventListener('click',function(){
        window.location.href = 'project2.html';
      });
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const totalAmountDisplay = document.querySelector('.sum');
      let totalAmount = 0;
      function updateTotalAmount(){
        totalAmount = 0;
        checkboxes.forEach((checkbox)=>{
          if(checkbox.checked){
            const price = parseInt(checkbox.getAttribute('data-price'));
            totalAmount += price;
          }
        });
        totalAmountDisplay.textContent = `${totalAmount}/-`;
      }
      checkboxes.forEach((checkbox)=>{
        checkbox.addEventListener('change',updateTotalAmount);
      });
      updateTotalAmount(); // initialise calculation
});
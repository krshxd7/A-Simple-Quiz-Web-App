function score() {
    let score = 0;

    
    const ans1 = document.querySelector('input[name="ans1"]:checked');
    const ans2 = document.querySelector('input[name="ans2"]:checked');
    const ans3 = document.querySelector('input[name="ans3"]:checked');
    const ans4 = document.querySelector('input[name="ans4"]:checked');
    const ans5 = document.querySelector('input[name="ans5"]:checked');

    
    if (ans1 && ans1.value === "New Delhi") score++;
    if (ans2 && ans2.value === "Hockey") score++;
    if (ans3 && ans3.value === "Bengal Tiger") score++;
    if (ans4 && ans4.value === "Shri. Narendra Modi") score++;
    if (ans5) score++; 

    document.getElementById("result").innerText = 'The score is: ' + score + ' / 5';
}

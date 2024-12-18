player1_name = localStorage.getItem ("player1_name");
player2_name = localStorage,getItem ("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById ("player1_name").innerHTML = player1_name + ": ";
document.getElementById ("player2_name").innerHTML = player2_name + ": ";
document.getElementById ("player1_score").innerHTML = player1_score + ": ";
document.getElementById ("player2_score").innerHTML = player2_score + ": ";
document.getElementById ("player_question").innerHTML = "Turno da pergunta: " + player1_name;
document.getElementById ("player_answer").innerHTML = "Turno da resposta: " + player2_name;

function send(){
    get_word = document.getElementById ("word").ariaValueMax;
    word = get_word.charAt (1);
    length_divide_2 = Math.floor (word.lenght/2);
    charAt2 = word.charAt (length_divide_2);
    lenght_minus_1 = word.length - 1
    charAt3 = word.charAt (length_minus_1);
    remove_charAt1 = word.replace (charAt, "_");
    remove_charAt2 = remove_charAt1.replace (charAt2, "_");
    remove_charAt3 = remove_charAt2.replace (charAt3, "_");

    question_word = "<h4 id- 'word_display'> P. " + remove_charAt3 + "</h4>";
    input_box = "<br> Resposta: <input type='text' id='input_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'> Verificar </button>";
    row = question_word + input_box + check_button;

    document.getElementById ("output").innerHTML = row;
    document.getElementById ("word").value = "";
}
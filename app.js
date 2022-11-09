//#addTodo = HTMLの要素
$("#addTodo").click(function() {
    const inputTodo = $("input").val();
    //#todoList = HTMLの要素 へliを追加していく
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val("");
});
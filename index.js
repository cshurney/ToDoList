/* This is the beginning to do list,
mocking the infomation we might get from a server
*/

var toDoList = [{
  title: "Style To Do List",
  complete: false   
},
{
  title: "Exercise",
  complete: false
},
{
  title: "Grocery Shopping",
  complete: true
},
{
  title: "Download Music",
  complete: false
},
{
  title: "Wash Car",
  complete: false
}];

/* Because we use this orderered list multiple times
We save it as a variable so we don't have to find it everytime */
var viewList = $('ol');


/* This function takes our original list and loops through
it using jQuery's .each method and display it in the HTML page.  If the
item is marked as complete it updates the style appropriately */

$(toDoList).each(function(index){
  if(this.complete === true){
    viewList.append('<li class="completed">' + this.title +
    '<span class="glyphicon glyphicon-ok"></span><span class="glyphicon glyphicon-trash"></span></li>');
  } else {
    viewList.append('<li>' + this.title +
    '<span class="glyphicon glyphicon-ok"></span><span class="glyphicon glyphicon-trash"></span></li>');
  }
});


/* This registers a click event. Every time time we click on the checkmark
inside of a list item. If the item is comlpete it removes that class,
if it's incomplete it adds the class*/

$(viewList).on("click", "li .glyphicon-ok", function (){
  var li = $(this).parent();

  /* This is a short way to accompolish our goal */
  li.toggleClass('completed');

  /* This is how I originally had it set up to show what it does
  more explicitly  */

  // if (li.hasClass('completed')) {
  //   li.removeClass('completed');
  // } else {
  //   li.addClass('completed');
  // }
});


/* Registers a click event. Any time we click on the trash can inside of a list item
remove that item from the HTML */

$(viewList).on("click", "li .glyphicon-trash", function (){
  $(this).parent().remove();
});


/* This Any time we click on the Add Button it adds the item
we were were typing to our to do list */

$("#add-item").click(function(){
  var input = $('#add-item-text');
  viewList.append('<li>' + input.val() +
  '<span class="glyphicon glyphicon-ok"></span><span class="glyphicon glyphicon-trash"></span></li>');
  input.val('');
});

/* This registers a keypress event. Any time we hit enter when
typing in a new item, this adds it to our  to do list */

$('#add-item-text').keypress(function(evt){
  if(evt.which === 13){
    viewList.append('<li>' + $(this).val() +
    '<span class="glyphicon glyphicon-ok"></span><span class="glyphicon glyphicon-trash"></span></li>');
    $(this).val('');
  }
});

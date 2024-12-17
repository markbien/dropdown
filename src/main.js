const btn1 = document.querySelector('.btn1');
const list1 = document.querySelector('.dropdown-list1 > ul');

const btn2 = document.querySelector('.btn2');
const list2 = document.querySelector('.dropdown-list2 > ul');

btn1.addEventListener('click', function(){
  toggleList(list1);
});

btn2.addEventListener('click', function(){
  toggleList(list2);
})

function toggleList(element) {
  element.classList.toggle('visible');
}
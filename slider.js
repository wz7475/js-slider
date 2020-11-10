const update_chosen = (button) =>
{
    //switch off current
    let obj = document.getElementsByClassName('chosen')[0];
    document.getElementById(obj.id).classList.remove("chosen");
    //choose to highlight
    document.getElementById(button.id).className += " chosen"
}
const load_img = (picture) =>
{
    const number = picture.id;
    let address = `<img src="img/${number}.jpg" width="440px">`;
    document.getElementById("gallery").innerHTML = address;
    update_chosen(picture);
}

const update_forward = (number) =>
{
    let new_one = number + 1;
    new_one === 6 ? new_one=1 : new_one+=0;
    new_one = new_one.toString();
    number = number.toString();
    document.getElementById(number).classList.remove("chosen");
    document.getElementById(new_one).classList.add("chosen");
}
const forward = () =>
{
    let obj = document.getElementsByClassName("chosen");
    let current = obj[0].id;
    current = parseInt(current);
    update_forward(current);
    current = current + 1;
    current === 6 ? current=5 : current+=0;
    current = current.toString();
    let address = `<img src="img/${current}.jpg" width="440px">`;
    document.getElementById("gallery").innerHTML = address;
}

const update_backwards = (number) =>
{
    let new_one = (number - 1);
    new_one === 0 ? new_one = 5 : new_one+=0;
    new_one = new_one.toString();
    number = number.toString();
    document.getElementById(number).classList.remove("chosen");
    document.getElementById(new_one).classList.add("chosen");
}
const backwards = () =>
{
    let obj = document.getElementsByClassName("chosen");
    let current = obj[0].id;
    current = parseInt(current);
    update_backwards(current);
    current = current - 1;
    current === 0 ? current=5 : current+=0;
    current = current.toString();
    let address = `<img src="img/${current}.jpg" width="440px">`;
    document.getElementById("gallery").innerHTML = address;
}
const update_chosen = (button) =>
{
    //reset all
    for (let i=1; i<=5; i++){
        name = document.getElementById(i).className;
        let classes = name.split(" ");
        //classes.length === 2 ? classes.pop() : pass;
        if (classes.length === 2){
            document.getElementById(i).className = classes[0];
        }
    }
    //choose to highlight
    document.getElementById(button.id).className += " chosen"
}

const update_arrows = (number) =>
{
    
}

const forward = () =>
{
    let obj = document.getElementsByClassName("chosen");
    let current = obj[0].id;
    current = parseInt(current);
    current = (current + 1) % 5;
    current = current.toString();
    let address = `<img src="img/${current}.jpg" width="440px">`;
    document.getElementById("gallery").innerHTML = address;
}

const load_img = (picture) =>
{
    const number = picture.id;
    let address = `<img src="img/${number}.jpg" width="440px">`;
    document.getElementById("gallery").innerHTML = address;
    update_chosen(picture);
}
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

const load_img = (picture) =>
{
    const number = picture.id;
    let address = `<img src="img/${number}.jpg" width="440px">`;
    document.getElementById("gallery").innerHTML = address;
    update_chosen(picture);
}
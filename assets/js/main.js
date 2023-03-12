function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function postMessege() {
    event.preventDefault();

    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();
    let fullmessege = 'email = '+email+' nama = '+name+'pesan = '+message;
    // console.log(isEmail(email));
    if(isEmail(email) == true){
        if(name !== '' && email !== '' && message !== ''){
            fetch('https://sheetdb.io/api/v1/brlifz127ydro', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        'id': "INCREMENT",
                        'name': name,
                        'email': email,
                        'message': message,
                    }
                ]
            })
        })
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then((html) => {
            $('.form-control').val('');
            alert('pesan sudah terkirim');
        });
    

        }else{
            alert('please fill in all fields')
        }
    }else{
        alert('please write email properly')
    }
    
}